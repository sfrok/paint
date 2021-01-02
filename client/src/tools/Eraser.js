// Tool Classes
import { Tool } from "./Tool";

export class Eraser extends Tool {
  constructor(canvas) {
    super(canvas);
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
    this.strokeStyle = "white";
    this.lineWidth = 20;
    this.context.lineTo(x, y);
    this.context.stroke();
  }
}
