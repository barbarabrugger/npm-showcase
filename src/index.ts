import cors from "cors";
import express from "express";
import helmet from "helmet";

import writeLogSample from "./loggingSample";

writeLogSample();

const app = express();

app.use(helmet());
app.use(cors());

app.get("/", (req, res): void => {
  res.send("Hello World");
});

app.listen(3_000);

