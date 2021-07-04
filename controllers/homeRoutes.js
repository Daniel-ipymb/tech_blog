const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // const postData = await Post.findAll({
    //   attributes: [
    //     'title',
    //     'date_created'
    //   ]
    // });
    // const posts = postData.map((post) => post.get({ plain: true }))
    
    res.render('homeRoutes')
    // {
    //   ...posts,
    //   logged_in: true
    // }
    
  } catch (error) {
    res.status(500).json(error)
  }
});

router.get('/post/:id', async (req,res) => {
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

    res.render('post', {
      ...posts,
      logged_in: true
    });
  } catch (error) {
    res.status(500).json(error)
  }
});

router.get('/login', (req,res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login')
});

router.get('/signup', (req,res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup')
});

module.exports = router;