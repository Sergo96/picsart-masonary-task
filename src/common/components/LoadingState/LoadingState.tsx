import { Spinner } from '../Spinner/Spinner';
import { FC } from 'react';
import { Overlay, SpinnerWrapper } from './LoadingState.styles';

export const LoadingState: FC = () => {
  return (
    <Overlay data-testid='overlay'>
      <SpinnerWrapper data-testid='spinner-wrapper'>
        <Spinner />
      </SpinnerWrapper>
    </Overlay>
  );
};
