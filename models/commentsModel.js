const { Schema, model } = require("mongoose");
const { createIndexes } = require("./userModel");

const commentsSchema = new Schema(
  {
    content: {
      type: String,
      required: false,
    },
    blogId: {
      type: Schema.Types.ObjectId,
      ref: "blog",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const comments = model("comments", commentsSchema);

module.exports = comments;
