'use strict'

const Moment = require('moment')

module.exports = (sequelize, DataTypes) => {
  let Chore = sequelize.define('Chore', {
    date: {
      type: DataTypes.DATE,
      get: function () {
        return Moment(this.getDataValue('date')).format('Do MMM YY')
      }
    },
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.STRING,
  })

  return Chore;
}
