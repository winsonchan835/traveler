const express = require('express')
const router = express().Router()
const User = require('../models/User')

router.post('/users', async (req, res, next) => {
  try {
    if (!req.body.email) throw new Error('Email is required')
    if (!req.body.password) throw new Error('Password is required')

    const existingUser = await User.findByPk(req.body.user.email)
    if (existingUser) throw new Error('User already exists with this email')






  } catch (error) {

  }
})

router.post('/users/login', (req, res, next) => {

})

router.get('/user', (req, res, next) => {

})

router.patch('/user', (req, res, next) => {

})

module.exports = router
