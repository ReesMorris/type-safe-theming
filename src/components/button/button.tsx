import styled from '@emotion/styled';
import { ThemeToken } from '../../libs/theme/types/props';
import { themeVar } from '../../libs/theme/utils/theme-var';

interface ButtonProps {
  color?: ThemeToken;
  onClick?: () => void;
  children: React.ReactNode;
}

interface ScButtonProps {
  $color?: ButtonProps['color'];
}

const ScButton = styled.button<ScButtonProps>`
  background-color: ${themeVar('button.background')};
  color: ${(props) => themeVar(props.$color || 'button.color')};
`;

export const Button = ({ color, onClick, children }: ButtonProps) => {
  return (
    <ScButton $color={color} onClick={onClick}>
      {children}
    </ScButton>
  );
};
