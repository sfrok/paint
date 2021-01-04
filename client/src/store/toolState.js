// Core
import { makeAutoObservable } from "mobx";

class ToolState {
  tool = null;

  constructor() {
    makeAutoObservable(this);
  }

  setTool(tool) {
    this.tool = tool;
  }

  setFillStyle(color) {
    this.tool.fillStyle = color;
  }

  setStrokeStyle(color) {
    this.tool.strokeStyle = color;
  }

  setLineWidth(size) {
    this.tool.lineWidth = size;
  }
}

const toolState = new ToolState();
export { toolState };
