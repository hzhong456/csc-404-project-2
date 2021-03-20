const express = require('express')
const router = express.Router()

const {
  courses,
  gradeScale,
  students
} = require('../lib/data')

const {
  calcGPA
} = require('../lib/calculate')

const formatStudentRecord = ({
  firstName,
  lastName,
  csc141,
  csc142,
  csc240,
  csc241
}) => ({
  firstName,
  lastName,
  courseGrades: {
    csc141,
    csc142,
    csc240,
    csc241
  }
})

/* GET input page. */
router.get('/', (req, res) => {
  res.render('input', {
    courses,
    gradeScale
  })
})

/* POST input page. */
router.post('/', (req, res) => {
  const student = formatStudentRecord(req.body)

  students.push(student)

  const partialGPA = calcGPA(student)

  res.render('input', {
    courses,
    gradeScale,
    student,
    partialGPA
  })
})

module.exports = router
