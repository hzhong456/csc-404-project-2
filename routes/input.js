const express = require('express')
const router = express.Router()

const courses = {
  csc141: 'CSC-141',
  csc142: 'CSC-142',
  csc240: 'CSC-240',
  csc241: 'CSC-241',
}

const validGrades = [
  'A',
  'A-',
  'B+',
  'B',
  'B-',
  'C+',
  'C',
  'C-',
  'D+',
  'D',
  'D-',
  'F'
]

/* GET input page. */
router.get('/', (req, res) => {
  res.render('input', {
    courses,
    validGrades
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
