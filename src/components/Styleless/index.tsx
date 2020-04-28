import styled, { css } from 'styled-components';

/** The CSS styles of the `<Styleless />` component. */
export const styleless = css`
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
`;

/** A component with reset styles so that it looks like a bare `<div />`. */
export const Styleless = styled.div`
  ${styleless};
`;
