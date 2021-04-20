import styled, { css } from "styled-components";

export const Nav = styled.nav(
  ({ theme }) => css`
    background-color: ${theme.color.background};
    display: flex;
    justify-content: space-between;
  `
);

export const Text = styled.h5(
  ({ theme }) => css`
    color: ${theme.color.fontColor};
  `
);
