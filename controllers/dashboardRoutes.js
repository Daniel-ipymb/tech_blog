const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req,res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: {
        model: Comment,
        attributes: 'comment_text'
      }
    })
    const posts = postData.map((post) =>post.get({ plain: true }));
    
    res.render('dashboard', {
      ...posts,
      logged_in: true
    });
  } catch (error) {
    res.status(500).json(error);
  }
})
// router for adding a new blog
router.get('/add', async (req,res) => {
//   try {
//     const postData = await Post.findByPk(req.params.id, {
//       include: {
//         model: Comment,
//         attributes: [
//           'comment_text'
//         ]
//       }
//     });
//     const post = postData.get({ plain: true });

//     res.render('add-post', {
//       ...post,
//       logged_in: true
//     })
//   } catch (error) {
//     res.status(500).json(error);
//   }
  try {
    res.render('post')
  } catch (error) {
    console.log(error)
  }
});

//route to get a specific blog recently created in dashboard
router.get('/:id', async (req,res) => {
  try {
    const postData = await Post.findOne({
      where: {
        id: req.params.id
      },
      include: {
        model: Comment,
        attributes: 'comment_text'
      }
    })
    const post = postData.get({ plain: true });

    res.render('view-post', {
      ...post,
      logged_in: true
    })
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports=router