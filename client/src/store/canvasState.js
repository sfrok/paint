// Core
import { makeAutoObservable } from "mobx";

class CanvasState {
  canvas = null;
  undoList = [];
  redoList = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCanvas(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");
  }

  pushToRedo(data) {
    this.redoList.push(data);
  }

  pushToUndo(data) {
    this.undoList.push(data);
  }

  undo() {
    if (this.undoList.length > 0) {
      const previous = this.undoList.pop();
      this.redoList.push(this.canvas.toDataURL());
      const img = new Image();
      img.src = previous;
      img.onload = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(
          img,
          0,
          0,
          this.canvas.width,
          this.canvas.height
        );
      };
    } else {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  redo() {
    if (this.redoList.length > 0) {
      const forward = this.redoList.pop();
      this.undoList.push(this.canvas.toDataURL());
      const img = new Image();
      img.src = forward;
      img.onload = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(
          img,
          0,
          0,
          this.canvas.width,
          this.canvas.height
        );
      };
    }
  }
}

const canvasState = new CanvasState();
export { canvasState };
