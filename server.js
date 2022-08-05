import express from "express";
import  getUser  from "./db.js";

const app = express();
const port = 3000;


app.get("/api/usuario", (_, res) => {
  res.json({ 
   data: getUser()
    });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port} 👆🏽`);
});

