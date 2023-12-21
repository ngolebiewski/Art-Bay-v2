const express = require("express");
const ViteExpress = require("vite-express");

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

ViteExpress.listen(app, 8000, () =>
  console.log("Server is listening on port 8000..."),
);
