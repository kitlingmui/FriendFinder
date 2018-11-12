// include path package to get the correct path

var path = require("path")

//Routing to page

module.exports = function (app) {  
    // get home page link
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

    // get survey page link
    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })

    // get result page link
    app.get('/result', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/result.html"))
    })
}
