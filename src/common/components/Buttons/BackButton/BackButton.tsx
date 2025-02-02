import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButtonWrapper, BackIcon } from './BackButton.styles';

export const BackButton: FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <BackButtonWrapper onClick={handleBack}>
      <BackIcon />
    </BackButtonWrapper>
  );
};
