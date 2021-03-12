const express = require('express')
const router = express.Router()

const { something } = require('../public/javascripts/index.js')

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' })
})

module.exports = router
