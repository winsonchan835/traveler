const jwt = require('jsonwebtoken')

module.exports.sign = async (user) => {
  const JWT_SECRET = '12345'
  return new Promise((resolve, reject) => {
    jwt.sign({
      email: user.email
    }, JWT_SECRET, (err, token) => {
      if (err) return reject(err)
      return resolve(token)
    })
  })
}
