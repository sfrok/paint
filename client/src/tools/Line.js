// Tool Classes
import { Tool } from "./Tool";

export class Line extends Tool {
  constructor(canvas) {
    super(canvas);
    this.listen();
  }

  listen() {
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  mouseUpHandler(e) {
    this.mouseDown = false;
  }

  mouseDownHandler(e) {
    this.mouseDown = true;
  }

  mouseMoveHandler(e) {
    if (this.mouseDown) {
    }
  }

  draw(x, y) {}
}
