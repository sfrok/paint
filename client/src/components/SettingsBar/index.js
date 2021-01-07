// Core
import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

// Global Style
import { Container, Row, Column } from "../../shared";

// Style
import { Title } from "./Title";
import { Input } from "./Input";
import { Palette } from "../../shared/";

// Tool Classes
import { toolState } from "../../store";

export const SettingsBar = observer(() => {
  const [lineColor, setLineColor] = useState(null);
  const { tool } = toolState;

  useEffect(() => {
    if (!tool) return;
    toolState.setStrokeStyle(lineColor);
  }, [tool, lineColor]);

  return (
    <Container>
      <Row mb={1}>
        <Column contentPosition="flex-start" width={6}>
          <Title>Line size:</Title>
          <Input
            type="number"
            min={1}
            max={50}
            defaultValue={1}
            onChange={(e) => toolState.setLineWidth(e.target.value)}
          />
        </Column>
        <Column contentPosition="flex-end" width={6}>
          <Title>Line color:</Title>
          <Palette
            type="color"
            onChange={(e) => setLineColor(e.target.value)}
          />
        </Column>
      </Row>
    </Container>
  );
});
