import { Spinner } from '../Spinner/Spinner.tsx';
import { FC } from 'react';
import { Overlay } from './LoadingState.styles.ts';

export const LoadingState: FC = () => {
  return (
    <Overlay>
      <Spinner />
    </Overlay>
  );
};
