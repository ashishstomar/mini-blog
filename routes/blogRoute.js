const { Router } = require("express");
const Blog = require("../models/blogModel");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.resolve(`./public/uploads/${req.user._id}`);
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;

    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

router.get("/new-blog", (req, res) => {
  return res.render("addBlog", {
    user: req.user,
  });
});

router.post("/new-blog", upload.single("cover"), async (req, res) => {
  const { title, body } = req.body;
  console.log(req.body);
  console.log(req.file);

  await Blog.create({
    title,
    body,
    createdBy: req.user._id,
    coverImageURL: `/uploads/${req.user._id}/${req.file.filename}`,
  });

  return res.redirect(`/blog/${blog._id}`);
});

module.exports = router;
