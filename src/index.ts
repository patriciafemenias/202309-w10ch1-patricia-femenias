import app from "./app.js";
import morgan from "morgan";
import toolsRouter from "./features/tools/router/toolsRouter.js";

app.use(morgan("dev"));

app.use("/tools", toolsRouter);

app.use((_req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});
