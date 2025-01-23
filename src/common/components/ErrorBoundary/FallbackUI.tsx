import { FallbackUIContainer, Heading, Message, RetryButton } from './FallbackUI.styles';
import { JSX } from 'react';

export const FallbackUI: () => JSX.Element = () => {
  const handleRetry = () => {
    window.location.reload();
  };
  return (
    <FallbackUIContainer>
      <Heading>Something went wrong!</Heading>
      <Message>We’re sorry, but an unexpected error occurred. Please try again.</Message>
      <RetryButton onClick={handleRetry}>Retry</RetryButton>
    </FallbackUIContainer>
  );
};
