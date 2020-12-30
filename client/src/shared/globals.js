// Core
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ primaryColor, theme }) =>
      primaryColor ? theme.palette.primary : theme.palette.tertiary};
    box-sizing: border-box;
  }
`;
