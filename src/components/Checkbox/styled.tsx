import styled, { DefaultTheme } from 'styled-components';
import { transitions, em } from 'polished';

import { Icon } from '../Icon';
import { svgAsBase64 } from '../../modules/svg';

export const Input = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  cursor: inherit;
  opacity: 0;
`;

const iconSize = (theme: DefaultTheme) => theme.honeycomb.size.touchableSwitch * (2 / 3);

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;

  ::before {
    content: '';
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ theme }) => em(theme.honeycomb.size.touchableSwitch)};
    height: ${({ theme }) => em(theme.honeycomb.size.touchableSwitch)};
    background: transparent;
    border: 1px solid ${({ theme }) => theme.honeycomb.color.primary};
    border-radius: ${({ theme }) => theme.honeycomb.radius.normal}px;
    display: flex;
    ${({ theme }) => transitions(['background', 'border'], theme.honeycomb.duration.normal)};
  }

  ${Input}:checked ~ & {
    ::before {
      color: ${({ theme }) => theme.honeycomb.color.readable(theme.honeycomb.color.primary)};
      border-color: transparent;
      background: ${({ theme }) => theme.honeycomb.color.primary};
      background-image: url(${svgAsBase64(Icon.sourceFor(Icon.Src.Tick))});
      background-size: ${({ theme }) => em(iconSize(theme))};
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;

export const LabelContent = styled.span`
  font-size: ${({ theme }) => em(theme.honeycomb.fontSize.small)};
  margin-left: ${({ theme }) => em(8, theme.honeycomb.fontSize.small)};
`;