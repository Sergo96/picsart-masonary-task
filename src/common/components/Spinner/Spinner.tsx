import { JSX } from 'react';
import { SpinnerWrapper } from './Spinner.styles';

interface SpinnerProps {
  size?: string;
  color?: string;
}

export const Spinner: ({ size, color }: SpinnerProps) => JSX.Element = ({ size = '40px', color = '' }) => {
  return <SpinnerWrapper size={size} color={color} />;
};
