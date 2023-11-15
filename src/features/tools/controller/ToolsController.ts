import { type ByToolIdRequest } from "../../../types.js";
import ToolsRepository from "../repository/ToolsRepository.js";
import { type Request, type Response } from "express";

const toolsRepository = new ToolsRepository();

class ToolsController {
  public getToools(_req: Request, res: Response) {
    const tools = toolsRepository.getTools();
    res.status(200).json({ tools });
  }

  public getToolById(req: ByToolIdRequest, res: Response) {
    const { toolId } = req.params;

    try {
      const tool = toolsRepository.getToolById(+toolId);

      res.status(202).json({ tool });
    } catch {
      res.status(404).json({ error: "Tool not found" });
    }
  }
}

export default ToolsController;
