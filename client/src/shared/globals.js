// Core
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => (props.primaryColor ? "#f6f6f6" : "#ffffff")};
  }
`;
