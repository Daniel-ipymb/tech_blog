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

router.post('/update/:id', async (req,res) => {
  try {
    const updateData = await Post.update(
      {
      title: req.body.title,
      post_content: req.body.post_content
      },
      {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(updateData)
  } catch (error) {
    res.json(500).json(error)
  };
});

router.delete('/delete/:id', async (req,res) => {
  try {
    const deleteData = await Post.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!deleteData) {
      res.status(404).json({ message: 'No blog found with this id!'});
      return;
    }
    res.status(200).json(deleteData)
  } catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router;

