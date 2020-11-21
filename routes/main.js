const express = require('express')
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = express.Router()

router.get('/', (req, res) => {
    const data = {
        greeting: 'Hello Fellas!'
    }

    res.render('landing', data)
})

router.get('/test', (req, res) => {
    res.render('landing')
})

module.exports = router