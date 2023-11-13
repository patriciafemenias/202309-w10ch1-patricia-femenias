import express from "express";
import morgan from "morgan";

const app = express();

const port = process.env.PORT ?? 4000;

app.listen(+port, () => {
  console.log("Estoy escuchando...");
});

app.use(morgan("dev"));

export default app;
