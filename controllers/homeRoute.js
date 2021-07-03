const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/',withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: [
        'title',
        'date_created'
      ]
    });
    const posts = postData.map((post) => post.get({ plain: true }))
    
    res.status(200).json(userData)
  } catch (error) {
    res.status(500).json(error)
  }
});

router.get('/post/:id',withAuth, async (req,res) => {
  try {
    const postdata = Post.findByPk(req.params.id, {
      include: [
        {
        model: Comment,
        attributes: ['comment_text']
        }
      ]
    });
    const posts = (await postdata).get({ plain: true })
  } catch (error) {
    res.status(500).json(error)
  }
})