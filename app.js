require("dotenv").config();
const express = require("express");
const path = require("path");
const UserRoute = require("./routes/userRoute");
const BlogRoute = require("./routes/blogRoute");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { checkAuthCookie } = require("./middlewares/authentication");
const BLog = require("./models/blogModel");
const Blog = require("./models/blogModel");

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then((e) => console.log("MongoDB Connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false })); //handle form data
app.use(cookieParser());
app.use(checkAuthCookie("token"));
app.use(express.static(path.resolve("./public")));

app.get("/", async (req, res) => {
  const allBlogs = await Blog.find({}).sort({ createdAt: -1 });
  res.render("index", {
    user: req.user,
    blogs: allBlogs,
  });
});

app.get("/", (req, res) => {
  res.render("index", {
    user: req.user,
  });
});

app.use("/user", UserRoute);
app.use("/blog", BlogRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
