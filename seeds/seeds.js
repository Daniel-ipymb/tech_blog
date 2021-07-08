const sequelize = require('../config/connection');
const { User, Comment, Post } = require('../models');

const userData = require('./userData.json');
const commentData = require('./commentData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    // returning: true,
  });
console.log(users)
  
  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      // comment_id: comments[Math.floor(Math.random() * comments.length)].id,
    });
  }

  const comments = await Comment.bulkCreate(commentData, {
    individualHooks: true,
    // returning: true
  });

  // const posts = await Post.bulkCreate(postData)

  process.exit(0);
};
seedDatabase();