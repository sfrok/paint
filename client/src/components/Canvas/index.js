// Core
import React, { useRef, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, FormControl, InputGroup, Modal, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";

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

  const [modalState, setModalState] = useState(true);
  const [formIsValid, setValidationState] = useState(false);
  const [username, setUsername] = useState("");

  const { id: sessionId } = useParams();

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasState.canvas));
  }, [canvasRef]);

  useEffect(() => {
    if (username === "") {
      setValidationState(false);
    } else {
      setValidationState(true);
    }
  }, [username]);

  useEffect(() => {
    if (!canvasState.username) return;
    const ws = new WebSocket("ws://localhost:5000");
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          id: sessionId,
          username: canvasState.username,
          method: "connection",
        })
      );
      ws.onmessage = (e) => {
        console.log(e.data);
      };
    };
  }, [sessionId, canvasState.username]);

  const mouseDownHandled = () => {
    canvasState.pushToUndo(canvasState.canvas.toDataURL());
  };

  const connectionHandler = () => {
    canvasState.setUserName(username);
    setModalState(false);
  };

  const changeUsernameHandler = (e) => {
    setUsername(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Column width={12} contentPosition="center">
          <Modal
            show={modalState}
            onHide={() => {}}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                Enter username:
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <InputGroup>
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  value={username}
                  onChange={(e) => changeUsernameHandler(e)}
                />
              </InputGroup>
              {!formIsValid && (
                <Alert variant="danger mt-2">
                  Please enter a username. This fill cannot be empty!
                </Alert>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                disabled={!formIsValid}
                onClick={() => connectionHandler()}
              >
                Sign In
              </Button>
            </Modal.Footer>
          </Modal>
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
