// Get Route to /survey which should display the survey page
// catch all route that leads to home.html which display the home page


const allfriends = require('../data/friends.js')

module.exports = function (app) {
    // get all added friends survey
    app.get('/survey', (req, res) => {
        res.json(allfriends.getfriend())
    })

    // add a new friend survey
    app.post('/survey', (req, res) => {
        allfriends.push(req.body)
        res.sendStatus(200)
    })
}
