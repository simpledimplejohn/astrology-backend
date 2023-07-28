const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

module.exports = router //alows this to be exported to the server file