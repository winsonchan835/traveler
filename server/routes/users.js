const express = require('express')
const router = express().Router()
const { hashPassword, matchPassword } = require('../utils/password')
const { sign } = require('../utils/jwt')

const User = require('../models/User')

router.post('/users', async (req, res, next) => {
  try {
    if (!req.body.email) throw new Error('Email is required')
    if (!req.body.password) throw new Error('Password is required')

    const existingUser = await User.findByPk(req.body.user.email)
    if (existingUser) throw new Error('User already exists with this email')

    const password = await hashPassword(req.body.user.password)
    const user = await User.create({
      email: req.body.user.email,
      password: password
    })

    if (user) {
      if (user.dataValues.password) delete user.dataValues.password
      user.dataValues.token = await sign(user)
      res.status(201).json(user)
    }
  } catch (error) {
    res.status(422).json({errors : { body: ['Could not create user', error.message]}})
  }
})

router.post('/users/login', async (req, res, next) => {
  try {
    if (!req.body.user.email) throw new Error('Email is required')
    if (!req.body.user.password) throw new Error('Password is required')

    const user = User.findByPk(req.body.user.email)

    if (!user) {
      res.status(401)
      throw new Error('No User with this email')
    }

    const passwordMatch = await matchPassword(user.password, req.body.user.password)
    if (!passwordMatch) {
      res.status(401)
      throw new Error('Invalid email or password')
    }

    delete user.dataValues.password
    user.dataValues.token = await sign({email: user.dataValues.email})

    res.status(200).json({user})
  } catch (error) {
    const status = res.statusCode ? res.statusCode : 500
    res.status(status).json({errors: {body: ['Could not create user', error.message] }})
  }
})

router.get('/user', (req, res, next) => {

})

router.patch('/user', (req, res, next) => {

})

module.exports = router
