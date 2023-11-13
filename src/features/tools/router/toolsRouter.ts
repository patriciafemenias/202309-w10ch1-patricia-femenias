import { Router } from "express";
import tools from "../data/tools.js";

const toolsRouter = Router();

toolsRouter.get("/", (_req, res) => {
  res.status(200);
  res.json({ tools });
});

toolsRouter.get("/:idTool", (req, res) => {
  const id = Number(req.params.idTool);

  const tool = tools.find((tool) => tool.id === id);

  if (!tool) {
    res.status(404).json({ error: "This tool doesn't exist" });
    return;
  }
  res.status(200).json(tool);
});

export default toolsRouter;
