export class Tool {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.destroyEvents();
    this.lineWidth = 3;
    this.strokeStyle = "black";
  }

  destroyEvents() {
    this.canvas.onmousemove = null;
    this.canvas.onmousedown = null;
    this.canvas.onmouseup = null;
  }

  set lineWidth(size) {
    this.context.lineWidth = size;
  }

  set strokeStyle(color) {
    this.context.strokeStyle = color;
  }

  set fillStyle(color) {
    this.context.fillStyle = color;
  }
}
