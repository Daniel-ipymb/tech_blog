const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req,res) => {
  try {
    const postData = await Post.create({
      title: req.body.title,
      post_content: req.body.post_content,
      user_id:req.session.user_id
    })
    console.log(postData)
    res.status(200).json(postData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

