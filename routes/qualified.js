const express = require('express')
const router = express.Router()

const {
  students
} = require('../lib/data')

/* GET qualified page. */
router.get('/', (req, res) => {
  console.log(students)
  res.render('qualified')
})

module.exports = router
