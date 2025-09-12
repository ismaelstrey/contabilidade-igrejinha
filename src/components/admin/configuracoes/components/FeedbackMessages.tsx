import React from 'react';
import { TbAlertCircle } from 'react-icons/tb';
import { PiCheckCircle } from 'react-icons/pi';
import {
  FeedbackMessage,
  FeedbackContent,
  FeedbackCloseButton
} from '../AdminConfiguracoes.styles';

interface FeedbackMessagesProps {
  error: string | null;
  success: string | null;
  onClearError: () => void;
  onClearSuccess: () => void;
}

const FeedbackMessages: React.FC<FeedbackMessagesProps> = ({
  error,
  success,
  onClearError,
  onClearSuccess
}) => {
  return (
    <>
      {error && (
        <FeedbackMessage
          className="error"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <FeedbackContent className="error">
            <TbAlertCircle />
            <span>{error}</span>
            <FeedbackCloseButton
              className="error"
              onClick={onClearError}
            >
              ×
            </FeedbackCloseButton>
          </FeedbackContent>
        </FeedbackMessage>
      )}

      {success && (
        <FeedbackMessage
          className="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <FeedbackContent className="success">
            <PiCheckCircle />
            <span>{success}</span>
            <FeedbackCloseButton
              className="success"
              onClick={onClearSuccess}
            >
              ×
            </FeedbackCloseButton>
          </FeedbackContent>
        </FeedbackMessage>
      )}
    </>
  );
};

export default FeedbackMessages;