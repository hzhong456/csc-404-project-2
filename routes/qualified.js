const express = require('express')
const router = express.Router()

const {
  students
} = require('../lib/data')

const {
  calcGPAs
} = require('../lib/calculate')

const {
  filterQualified
} = require('../lib/student')

/* GET qualified page. */
router.get('/', (req, res) => {
  const studentsWithGPAs = calcGPAs(students)
  const qualifiedStudents = filterQualified(studentsWithGPAs)

  res.render('qualified', {
    qualifiedStudents,
    totalStudents: students.length
  })
})

module.exports = router
