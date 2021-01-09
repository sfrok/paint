// Core
import React, { useRef, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Button, FormControl, InputGroup, Modal } from "react-bootstrap";

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
    toolState.setTool(new Brush(canvasState.canvas));
  }, [canvasRef]);

  const mouseDownHandled = () => {
    canvasState.pushToUndo(canvasState.canvas.toDataURL());
  };

  const connectionHandler = () => {};

  return (
    <Container>
      <Row>
        <Column width={12} contentPosition="center">
          <Modal
            show={true}
            onHide={() => {}}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Enter username:
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <InputGroup>
                <FormControl placeholder="Username" aria-label="Username" />
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => connectionHandler()}>Sign In</Button>
            </Modal.Footer>
          </Modal>
          :
          <Area
            ref={canvasRef}
            width={800}
            height={600}
            onMouseDown={() => mouseDownHandled()}
          />
        </Column>
      </Row>
    </Container>
  );
});
