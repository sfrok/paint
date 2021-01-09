// Core
import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import { SettingsBar } from "../SettingsBar";
import { ToolBar } from "../ToolBar";
import { Canvas } from "../Canvas";

// Global Style
import { GlobalStyle, theme } from "../../shared";

export const RootApp = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:id">
          <ThemeProvider theme={theme}>
            <GlobalStyle primaryColor />
            <ToolBar />
            <SettingsBar />
            <Canvas />
          </ThemeProvider>
        </Route>
        <Redirect to={`f${(+new Date()).toString(16)}`} />
      </Switch>
    </BrowserRouter>
  );
};
