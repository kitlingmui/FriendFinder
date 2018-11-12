// LOAD DATA 

var friend = require('../data/friends')

// ROUTING

module.exports = function (app) {
    // get all added friends survey
    app.get('/api/friends', (req, res) => {
        res.json(friend)
    })

    // add new friend in data table
    app.post('/api/friends', (req, res) => {
        friend.push(req.body)
        res.sendStatus(200)
    })
}

