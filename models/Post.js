const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define Post Model; create Post Model
class Post extends Model {}

// create fields/columns for Post model
Post.init(
    // define Post schema
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      post_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isURL: true
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    // configure metadata & naming conventions
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  );

  module.exports = Post;