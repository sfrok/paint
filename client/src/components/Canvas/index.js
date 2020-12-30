// Core
import React, { useRef, useEffect } from "react";
import { observer } from "mobx-react-lite";

// GlobalStyle
import { Container, Row, Column } from "../../shared";

// Style
import { Area } from "./Area";

// State
import { canvasState, toolState } from "../../store";

// Tool Classes
import { Brush } from "../../tools";

export const Canvas = observer(() => {
  const canvasRef = useRef();

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasRef.current));
  }, [canvasRef]);

  return (
    <Container>
      <Row>
        <Column width={12} contentPosition="center">
          <Area ref={canvasRef} width={800} height={600} />
        </Column>
      </Row>
    </Container>
  );
});
