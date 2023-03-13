const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
   
    title: { type: String, required: true },
    content: { type: String, required: true },
    img: { type: String, required: true },
    label_id: { type: String, required: true },
  },
  { timestamps: true }
);
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
