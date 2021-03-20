const { gradeScale } = require('./data')

// Calculate GPA
const calcGPA = ({ courseGrades }) => {
  const rawScore = sumGrades(courseGrades)
  const courses = Object.keys(courseGrades).length

  return parseFloat((rawScore / courses).toFixed(1))
}

const calcGPAs = students =>
  students.map(({ courseGrades, firstName, lastName }) => {
    const partialGPA = calcGPA({ courseGrades })

    return { lastName, firstName, partialGPA }
  })

const sumGrades = courseGrades => {
  const grades = Object.values(courseGrades)

  return grades.reduce((acc, grade) => {
    return acc + gradeScale[grade.toUpperCase()]
  }, 0.00)
}

module.exports = {
  calcGPA,
  calcGPAs,
  sumGrades
}
