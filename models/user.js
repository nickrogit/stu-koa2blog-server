const Sequelize = require('sequelize')
const sequelize = require('../lib/db-init')
const user = sequelize.define(
  'user',
  {
    user: Sequelize.STRING(255),
    pwd: Sequelize.STRING(255)
  },
  {
    timestamps: false
  }
)

module.exports = user
