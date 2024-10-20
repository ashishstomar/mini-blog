const express = require("express");
const path = require("path");
const UserRoute = require("./routes/userRoute");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { checkAuthCookie } = require("./middlewares/authentication");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/miniblog")
  .then((e) => console.log("MongoDB Connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false })); //handle form data
app.use(cookieParser());
app.use(checkAuthCookie("token"));

app.get("/", (req, res) => {
  res.render("index", {
    user: req.user,
  });
});

app.use("/user", UserRoute);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
