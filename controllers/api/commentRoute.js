const router = require('express').Router();
const { Comment, Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/:id', async (req,res) => {
  try {
    const commentData = await Comment.create({
      comment_text: req.body.comment_text,
      where: {
        id : req.params.id
      },
    })
    res.status(200).json(commentData)
  } catch (error) {
    res.status(500).json(error)
  }
})
module.exports = router;