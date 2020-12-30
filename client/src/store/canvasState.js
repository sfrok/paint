// Core
import { makeAutoObservable } from "mobx";

class CanvasState {
  canvas = null;

  constructor() {
    makeAutoObservable(this);
  }

  setCanvas(canvas) {
    this.canvas = canvas;
  }
}

const canvasState = new CanvasState();
export { canvasState };
