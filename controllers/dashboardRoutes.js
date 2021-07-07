const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req,res) => {
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
router.get('/edit/:id', async (req,res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: {
        model: Comment,
        attributes: [
          'comment_text'
        ]
      }
    });
    const post = postData.get({ plain: true });

    res.render('editpost', {
      ...post,
      logged_in: req.session.logged_in
    })
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/add', async (req,res) => res.render('post'))


//route to get a specific blog recently created in dashboard
router.get('/viewpost/:id', async (req,res) => {
  try {
    const postData = await Post.findOne({
      where: {
        id: req.params.id
      },
      include: {
        model: Comment,
        attributes: 'comment_text'
      },
      include: {
        model: User,
        attributes: 'username'
      }
    })
    const post = postData.get({ plain: true });

    res.render('view-post', {
      ...post,
      logged_in: req.session.logged_in
    })
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports=router