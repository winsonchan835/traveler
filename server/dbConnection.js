const {Sequelize} = require('sequelize')

const db = new Sequelize(`postgres://localhost:5432/traveler`, {
  logging: false
})

const checkConnection = async () => {
  try {
    await db.authenticate()
    console.log('Connection has been established successfully')
  } catch (error) {
    console.log('Error connecting to database', error)
  }
}

checkConnection()

module.exports = db
