import express from "express";
import "dotenv/config";
import router from "./routes";
import { errorMiddleware } from "./middleware/error-middleware";

const app = express();

app.use(express.json());
app.use("/api", router);
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

export default app;
