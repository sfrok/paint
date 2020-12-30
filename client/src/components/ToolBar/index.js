// Core
import React from "react";

// Global Style
import { Container, Row, Column } from "../../shared";

// Style
import { ImageItem } from "./ImageItem";
import { Palette } from "./Palette";

// Media
import brush from "./media/brush.png";
import circle from "./media/circle.png";
import eraser from "./media/eraser.png";
import line from "./media/line.png";
import forward from "./media/forward.png";
import back from "./media/back.png";
import rectangle from "./media/rectangle.png";
import save from "./media/save.png";

export const ToolBar = () => {
  return (
    <Container>
      <Row mb={1}>
        <Column width={6}>
          <Palette type="color" />
          <ImageItem image={brush} />
          <ImageItem image={rectangle} />
          <ImageItem image={circle} />
          <ImageItem image={eraser} />
          <ImageItem image={line} />
        </Column>
        <Column contentPosition="flex-end" width={6}>
          <ImageItem image={back} />
          <ImageItem image={forward} />
          <ImageItem image={save} />
        </Column>
      </Row>
    </Container>
  );
};
