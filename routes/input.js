const express = require('express')
const router = express.Router()

const {
  courses,
  gradeScale
} = require('../lib/data')

/* GET input page. */
router.get('/', (req, res) => {
  res.render('input', {
    courses,
    gradeScale
  })
})

/* POST input page. */
router.post('/', (req, res) => {
  // const {
  //   firstName,
  //   lastName,
  //   csc141,
  //   csc142,
  //   csc240,
  //   csc241
  // } = req.body

  res.json(req.body)
})

module.exports = router
