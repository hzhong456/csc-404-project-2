const express = require('express')
const router = express.Router()

const { calcGPAs } = require('../lib/calculate')
const { students } = require('../lib/data')
const { filterQualified, sortStudents } = require('../lib/student')

/* GET qualified page. */
router.get('/', (req, res) => {
  const studentsWithGPAs = calcGPAs(students)
  const qualifiedStudents = filterQualified(studentsWithGPAs)
  const sortedStudents = sortStudents(qualifiedStudents)

  res.render('qualified', {
    students: sortedStudents,
    totalStudents: students.length
  })
})

module.exports = router
