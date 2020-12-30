// Core
import React from "react";

// Global Style
import { Container, Row, Column } from "../../shared";

// Style
import { Title } from "./Title";
import { Input } from "./Input";

export const SettingsBar = () => {
  return (
    <Container>
      <Row mb={1}>
        <Column contentPosition="flex-start" width={12}>
          <Title>Line size:</Title>
          <Input maxLength="2" pattern="[0-9]" />
        </Column>
      </Row>
    </Container>
  );
};
