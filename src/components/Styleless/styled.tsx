import styled, { css } from 'styled-components';

import { boxSizing } from '../../modules/box-sizing';

/** The CSS styles of the `<Styleless />` component. */
export const styleless = css`
  ${boxSizing};

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  text-decoration: none;
  background: transparent;
  font: inherit;
  color: inherit;
  list-style: none;
  cursor: inherit;
`;

export const Styled = styled.div`
  ${styleless};
`;
