import { FC } from 'react';
import { SpinnerWrapper } from './Spinner.styles.ts';

interface SpinnerProps {
  size?: string;
  color?: string;
}

export const Spinner: FC<SpinnerProps> = ({ size = '40px', color = '' }) => {
  return <SpinnerWrapper size={size} color={color} />;
};
