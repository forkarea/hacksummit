'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.user.belongsToMany(models.project, { through: models.userProject });
        user.belongsTo(models.evaluation, {
          foreignKey: {
            allowNull: false
          }
        });
        user.belongsTo(models.evaluation, {
          foreignKey: {
            allowNull: false
          },
          as: 'EvaluatedUser'
        });
      }
    }
  });
  return user;
};
