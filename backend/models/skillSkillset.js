'use strict';
module.exports = function(sequelize, DataTypes) {
  var SkillSkillset = sequelize.define('SkillSkillset', {
  }, {
    tableName: 'skillSkillsets',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return SkillSkillset;
};
