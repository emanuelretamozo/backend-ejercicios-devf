import express from "express";
import main from "./index.js";

const app = express();
const port = 3000;



app.get("/api/suma", (req, res) => {
  res.json({ resultado: main() });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
