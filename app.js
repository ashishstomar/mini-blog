const express = require("express");
const path = require("path");
const UserRoute = require("./routes/userRoute");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/miniblog")
  .then((e) => console.log("MongoDB Connected"));

app.use(express.urlencoded({ extended: false })); //handle form data

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/user", UserRoute);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
