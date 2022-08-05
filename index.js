import express from "express";
const app = express();
const port = 3000;

app.get("/api", (req, res) => {
  res.json({ mensaje: "¡Hola Mundo!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
 