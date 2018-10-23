// Get route with the url /api/friends 
// post route to handing incoming survey result

const allfriends = require('../data/friends.js')

module.exports = function (app) {
    // get all added friends survey
    app.get('/api/friends', (req, res) => {
        res.json(allfriends.gettingfriend())
    })

    // add a new friend survey
    app.post('/api/friends', (req, res) => {
        allfriends.push(req.body)
        res.sendStatus(200)
    })
}

