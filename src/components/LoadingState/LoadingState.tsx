import { Spinner } from '../Spinner/Spinner.tsx';
import { FC } from 'react';
import { Overlay, SpinnerWrapper } from './LoadingState.styles.ts';

export const LoadingState: FC = () => {
  return (
    <Overlay>
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    </Overlay>
  );
};
