const User = require('./User');
const Post = require('./Post');

// create associations
    // forward association
User.hasMany(Post, {
    foreignKey: 'user_id'
});
    // reverse associatin
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };