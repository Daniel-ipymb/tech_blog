const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req,res) => {
  try {
    const postData = await Post.create({
      title: req.body.title,
      post_content: req.body.post_content,
      creator_username: req.body.creator_username,
      date_created: req.body.date_created
    })
    console.log(postData)
    res.status(200).json(postData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

