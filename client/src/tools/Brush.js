// Tool Classes
import { Tool } from "./Tool";

export class Brush extends Tool {
  constructor(canvas, color) {
    super(canvas);
    this.context.strokeStyle = color;
    this.context.fillStyle = color;
    this.listen();
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  mouseUpHandler(e) {
    this.mouseDown = false;
  }

  mouseDownHandler(e) {
    this.mouseDown = true;
    this.context.beginPath();
  }

  mouseMoveHandler(e) {
    if (this.mouseDown) {
      this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
    }
  }

  draw(x, y) {
    this.context.lineTo(x, y);
    this.context.stroke();
  }
}
