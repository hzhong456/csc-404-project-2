const express = require('express')
const router = express.Router()

/* GET qualified page. */
router.get('/', (req, res) => {
  res.render('qualified')
})

module.exports = router
