import styled, { DefaultTheme } from 'styled-components';
import { em, transitions } from 'polished';

import { Input } from '../Input';
import { Icon } from '../../Icon';
import { svgAsBase64 } from '../../../modules/svg';

const iconSize = (theme: DefaultTheme) => theme.size.touchableSwitch * (2 / 3);

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;

  ::before {
    content: '';
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ theme }) => em(theme.size.touchableSwitch)};
    height: ${({ theme }) => em(theme.size.touchableSwitch)};
    background: transparent;
    border: 1px solid ${({ theme }) => theme.color.primary};
    border-radius: ${({ theme }) => theme.radius.normal}px;
    display: flex;
    ${({ theme }) => transitions(['background', 'border'], theme.duration.normal)};
  }

  ${Input}:checked ~ & {
    ::before {
      color: ${({ theme }) => theme.color.readable(theme.color.primary)};
      border-color: transparent;
      background: ${({ theme }) => theme.color.primary};
      background-image: url(${svgAsBase64(Icon.sourceFor(Icon.Src.Tick))});
      background-size: ${({ theme }) => em(iconSize(theme))};
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;
