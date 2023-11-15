import { type Tool } from "../../../types.js";
import tools from "../data/tools.js";

class ToolsRepository {
  public getTools(): Tool[] {
    return tools;
  }

  public getToolById(toolId: number): Tool {
    const tool = tools.find((tool) => tool.id === toolId);

    if (!tool) {
      throw new Error("Tool not found");
    }

    return tool;
  }
}

export default ToolsRepository;
