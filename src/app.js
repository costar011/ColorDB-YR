import express from "express";
import morgan from "morgan";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import globalRouter from "./router/globalRouter";
import connect from "../db/mongo";

const PORT = process.env.PORT;

const app = express();

app.use(morgan(`dev`));

connect();

app.use(express.static(path.join(__dirname, `/assets`)));

app.set("view engine", "pug");

app.use("/", globalRouter);

app.listen(PORT, () => {
  console.log(`✅  ${PORT} Server Start`);
});
