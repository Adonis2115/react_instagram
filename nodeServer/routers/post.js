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
    const post = await Post.find({ owner: req.user._id });
    res.send(post);
  } catch (e) {
    console.log("Post Not Found");
    res.status(500).send(e);
  }
});

// router.get("/contact/:id", auth, async (req, res) => {
//   const _id = req.params.id;

//   try {
//     const contact = await Contact.findOne({ _id, owner: req.user._id });

//     if (!contact) {
//       return res.status(404).send();
//     } else res.send(contact);
//   } catch (e) {
//     console.log("their is no contact of this id");
//     res.status(500).send(e);
//   }
// });

// router.patch("/contact/:id", auth, async (req, res) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ["name", "phone", "email"];
//   const isValidOperation = updates.every((update) =>
//     allowedUpdates.includes(update)
//   );

//   if (!isValidOperation) {
//     return res.status(400).send({ error: "Can Not Update!" });
//   }
//   try {
//     const contact = await Contact.findOne({
//       _id: req.params.id,
//       owner: req.params._id,
//     });
//     // if(_id == req.params.id) {
//     //     updates.forEach((update) => contact[update] = req.body[update])
//     //     await contact.save()
//     // }
//     // else if( _id != req.params.id ) {
//     //     return res.status(400).send(e)
//     // }
//     if (!contact) {
//       return res.status(404).send(e);
//     }
//     res.send(contact);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// router.delete("/contact/:id/delete", auth, async (req, res) => {
//   try {
//     const contact = await Contact.findOneAndDelete({
//       _id: req.params.id,
//       owner: req.user._id,
//     });
//     if (!contact) {
//       return res.status(404).send();
//     }
//     res.send(contact);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

module.exports = router;
