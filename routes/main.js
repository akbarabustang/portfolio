const express = require('express')
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = express.Router()

router.get('/', (req, res) => {
    const data = {
        image_profile: 'https://cdn.britannica.com/99/124299-050-4B4D509F/Linus-Torvalds-2012.jpg',
        greeting: 'Hello, Welcome to my Portfolio Site',
        languages: [
            { name: 'javascript', year:10},
            { name: 'php', year:10},
            { name: 'phyton', year:10},
            { name: 'ruby', year:10}
        ]
    }

    res.render('landing', data)
})

router.get('/test', (req, res) => {
    res.render('landing')
})

module.exports = router