const Post = require("../models/post.js");
class PostController {
  async createPost(req, res) {
    try {
      const { title, content, label_id, img } = req.body;
      const newPost = await Post.create({ title, content, label_id, img });
      res.json(newPost);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getAllPosts(req, res) {
    try {
      const posts = await Post.find();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOnePost(req, res) {
    const { id } = req.params;
    const post = await Post.findById(id);
    return res.json(post);
  }

  async getPostsByLabel(req, res) {
    //console.log("res!!!", res);
    const { id } = req.params;
    const posts = await Post.find({ label_id: `${id}` });
    res.json(posts);
  }

  async deletePost(req, res) {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);
    res.json(post);
  }
  async updatePost(req, res) {
    try {
      const post = req.body;
      if (!post._id) {
        res.status(400).json({ message: "Id error" });
      }
      const updatePost = await Post.findByIdAndUpdate(post._id, post, {
        new: true,
      });
      return res.json(updatePost);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new PostController();
