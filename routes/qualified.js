const express = require('express')
const router = express.Router()

// const {
//   students
// } = require('../lib/data')

// const {
//   calculateGPAs
// } = require('../lib/calculate')

/* GET qualified page. */
router.get('/', (req, res) => {
  res.render('qualified')
})

module.exports = router
