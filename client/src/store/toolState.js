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
}

const toolState = new ToolState();
export { toolState };
