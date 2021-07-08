const User = require("./User");
const Comment = require("./Comment");
const Post = require("./Post");

User.hasMany(Post, {
  foreignkey: 'user_id',
  onDelete: 'CASCADE',
  
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
  
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
})

module.exports = {User, Comment, Post};


// User can have many posts
//Post can have many comments but can only have one User
//