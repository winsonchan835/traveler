const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    console.log(req, 'request')
  } catch (error) {

  }
})
