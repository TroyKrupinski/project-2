'use strict';

module.exports = (sequelize, DataTypes) => {
  const Show = sequelize.define('Show', {

    Venue: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    Date: {
        type: DataTypes.DATE
    },

    Price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    Facebook: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  });

  Show.associate = function(models) {
    Show.belongsTo(models.Artist, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  
  return Show;
};