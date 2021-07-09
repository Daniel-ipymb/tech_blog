const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req,res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ],
      where: {
        user_id: req.session.user_id
      },
    })
    const posts = postData.map((post) =>post.get({ plain: true }));
    
    res.render('dashboard', {
      posts:[...posts],
      logged_in: req.session.logged_in
    });
  } catch (error) {
    res.status(500).json(error);
  }
})
// router for adding a new blog
router.get('/edit/:id',withAuth, async (req,res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    console.log(postData)
    const post = postData.get({ plain: true });
    console.log(post)
    res.render('editpost', {
      post,
      logged_in: req.session.logged_in
    })
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/add',withAuth, async (req,res) => res.render('post'))