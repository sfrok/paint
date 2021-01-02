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

// Tool CLasses
import { canvasState, toolState } from "../../store";
import { Brush, Rectangle, Circle, Eraser, Line } from "../../tools";

export const ToolBar = () => {
  return (
    <Container>
      <Row mb={1}>
        <Column width={6}>
          <Palette type="color" />
          <ImageItem
            image={brush}
            onClick={() => toolState.setTool(new Brush(canvasState.canvas))}
          />
          <ImageItem
            image={rectangle}
            onClick={() => toolState.setTool(new Rectangle(canvasState.canvas))}
          />
          <ImageItem
            image={circle}
            onClick={() => toolState.setTool(new Circle(canvasState.canvas))}
          />
          <ImageItem
            image={eraser}
            onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}
          />
          <ImageItem
            image={line}
            onClick={() => toolState.setTool(new Line(canvasState.canvas))}
          />
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
