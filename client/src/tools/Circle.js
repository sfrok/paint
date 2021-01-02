// Tool Classes
import { Tool } from "./Tool";

export class Circle extends Tool {
  constructor(canvas) {
    super(canvas);
    this.listen();
  }

  listen() {
    this.canvas.onmousemove = this.onMouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.onMouseDownHandler.bind(this);
    this.canvas.onmouseup = this.onMouseUpHandler.bind(this);
  }

  onMouseUpHandler(e) {
    this.mouseDown = false;
  }

  onMouseDownHandler(e) {
    this.mouseDown = true;
    this.context.beginPath();
    this.startX = e.pageX - e.target.offsetLeft;
    this.startY = e.pageY - e.target.offsetTop;
    this.saved = this.canvas.toDataURL();
  }

  onMouseMoveHandler(e) {
    if (this.mouseDown) {
      let currentX = e.pageX - e.target.offsetLeft;
      let currentY = e.pageY - e.target.offsetTop;
      let width = currentX - this.startX;
      let height = currentY - this.startY;
      let r = Math.sqrt(width ** 2 + height ** 2);
      this.draw(this.startX, this.startY, r);
    }
  }

  draw(x, y, r) {
    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.context.beginPath();
      this.context.arc(x, y, r, 0, 2 * Math.PI);
      this.context.stroke();
    };
  }
}
