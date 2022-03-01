const http = require("http");
const express = require("express");
const Post = require("../models/post");
const auth = require("../middleware/auth");
bodyParser = require("body-parser").json();
const router = express.Router();

router.use(bodyParser);

// create post
router.post("/post", auth, async (req, res) => {
  const post = new Post({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    owner: req.user._id,
  });
  try {
    await post.save();
    res.status(201).send(post);
  } catch (e) {
    console.log("Given Data is not correct");
    res.status(400).send(e);
  }
});

// read post
router.get("/post", auth, async (req, res) => {
  try {
    const post = await Post.find({});
    res.send(post);
  } catch (e) {
    console.log("Post Not Found");
    res.status(500).send(e);
  }
});

// read post by id
router.get("/post/:id", auth, async (req, res) => {
  const _id = req.params.id;

  try {
    const post = await Post.findOne({ _id, owner: req.user._id });

    if (!post) {
      return res.status(404).send();
    } else res.send(post);
  } catch (e) {
    console.log("there is no post of this id");
    res.status(500).send(e);
  }
});

// delete post
router.delete("/post/:id/delete", auth, async (req, res) => {
  try {
    const post = await Post.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!post) {
      return res.status(404).send();
    }
    res.send(post);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
