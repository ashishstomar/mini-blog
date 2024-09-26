const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
  res.render("index");
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
