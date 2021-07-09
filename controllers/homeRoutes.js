const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/',withAuth, async (req, res) => {
  console.log(req.session.user_id)
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: [
            'username'
          ]
        }
      ],
    });
    const posts = postData.map((post) => post.get({ plain: true }))
    console.log(posts)
    res.render('homepage',
      {
        posts: [...posts],
        logged_in: req.session.logged_in
      })

  } catch (error) {
    res.status(500).json(error)
  }
});

router.get('/post/:id',withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User
        },
        {
          model: Comment,
          include: [
            {
              model: User
            }
          ]
        }]
    });
    console.log('postData', postData)
    const posts = postData.get({ plain: true })
    console.log('posts', posts)
    res.render('comment', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (error) {
    res.status(500).json(error)
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login')
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup')
});

module.exports = router;