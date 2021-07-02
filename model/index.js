const User = require("./User");
const Comment = require("./Comment");
const Post = require("./Post");

User.hasMany(Post, {
  foreignkey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

Comment.belongsTo(User, {
  foreignKey: 'post_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = {User, Comment, Post};


// User can have many posts
//Post can have many comments but can only have one User
//