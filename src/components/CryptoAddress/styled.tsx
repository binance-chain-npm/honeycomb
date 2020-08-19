import styled, { css } from 'styled-components';
import { em } from 'polished';

import { boxSizing } from '../../modules/box-sizing';
import { Button } from '../Button';
import { CopyToClipboard } from '../CopyToClipboard';
import { TextInput } from '../TextInput';

export const Container = styled.div`
  ${boxSizing};

  font-size: ${({ theme }) => em(theme.honeycomb.size.reduced)};

  display: flex;
  align-items: center;

  > *:not(:last-child) {
    margin-right: ${({ theme }) => em(theme.honeycomb.size.tiny)};
  }
`;

const actionButton = css`
  border-radius: ${({ theme }) => em(theme.honeycomb.size.micro, theme.honeycomb.size.reduced)};
  width: calc(
    ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)} + 2px
  );
  height: calc(
    ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)} + 2px
  );
`;

export const CryptoAddress = styled(TextInput)`
  max-width: ${em(350)};

  ${TextInput.InputContainer} {
    border-radius: ${({ theme }) => em(theme.honeycomb.size.micro, theme.honeycomb.size.reduced)};
  }

  ${TextInput.Input} {
    height: ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
    line-height: ${({ theme }) => em(theme.honeycomb.size.increased, theme.honeycomb.size.reduced)};
    text-indent: ${({ theme }) => em(theme.honeycomb.size.tiny, theme.honeycomb.size.reduced)};
  }
`;

export const StyledButton = styled(Button)`
  ${actionButton}
`;

export const StyledCopyToClipboard = styled(CopyToClipboard)`
  ${actionButton}
`;
