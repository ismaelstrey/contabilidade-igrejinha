import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getApiBaseUrl } from '@/utils/api'

const VISITOR_KEY = 'site_visitor_id'
const LAST_VIEW_KEY = 'site_last_page_view'
const DUPLICATE_WINDOW_MS = 3000

const getVisitorId = (): string => {
  const current = localStorage.getItem(VISITOR_KEY)

  if (current) {
    return current
  }

  const next = crypto.randomUUID()
  localStorage.setItem(VISITOR_KEY, next)
  return next
}

const getLastView = (): { path: string; timestamp: number } | null => {
  try {
    const lastView = sessionStorage.getItem(LAST_VIEW_KEY)
    return lastView ? JSON.parse(lastView) as { path: string; timestamp: number } : null
  } catch {
    return null
  }
}

export const usePageAnalytics = (): void => {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.startsWith('/admin')) {
      return
    }

    const now = Date.now()
    const lastViewData = getLastView()

    if (
      lastViewData?.path === location.pathname &&
      now - lastViewData.timestamp < DUPLICATE_WINDOW_MS
    ) {
      return
    }

    sessionStorage.setItem(LAST_VIEW_KEY, JSON.stringify({ path: location.pathname, timestamp: now }))

    const payload = JSON.stringify({
      path: location.pathname,
      title: document.title,
      referrer: document.referrer,
      visitorId: getVisitorId(),
    })

    const url = `${getApiBaseUrl()}/analytics/track`

    if (navigator.sendBeacon) {
      const blob = new Blob([payload], { type: 'application/json' })
      navigator.sendBeacon(url, blob)
      return
    }

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
      keepalive: true,
    }).catch(() => undefined)
  }, [location.pathname])
}
