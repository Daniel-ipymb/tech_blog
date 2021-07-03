const router = require('express').Router();
const { SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER } = require('constants');
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req,res) => {
  try {
    const postData = await Post.findOne({
      where: {
        user_id: req.session.user_id
      },
      include: {
        model: Comment,
        attributes: 'comment_text'
      }
    })
    const posts = postData.get({ plain: true })
    
    res.render('dashboard', {
      ...posts,
      logged_in: true
    });
  } catch (error) {
    res.status(500).json(error);
  }
})