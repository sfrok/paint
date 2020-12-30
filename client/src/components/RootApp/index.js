// Core
import React from "react";
import { ThemeProvider } from "styled-components";

// Components
import { SettingsBar } from "../SettingsBar";
import { ToolBar } from "../ToolBar";
import { Canvas } from "../Canvas";

// Global Style
import { GlobalStyle, theme } from "../../shared";

export const RootApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle primaryColor />
      <ToolBar />
      <SettingsBar />
      <Canvas />
    </ThemeProvider>
  );
};
