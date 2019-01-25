const Sequelize = require('sequelize')
const sequelize = require('../lib/db-init')
const users = sequelize.define(
  'users',
  {
    user: Sequelize.STRING(255),
    pwd: Sequelize.STRING(255)
  },
  {
    timestamps: false
  }
)

module.exports = users
