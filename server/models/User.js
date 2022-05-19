const {DataTypes} = require('sequelize')
const db = require('../dbConnection')

const User = db.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
},{
  timestamps: false
})

module.exports = User
