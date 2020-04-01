import styled, { css } from 'styled-components';

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
  width: 100%;
`;

export const Styleless = styled.div`
  ${styleless};
`;
