import app from "./app.js";
import morgan from "morgan";

app.use(morgan("dev"));

app.use((_req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});
