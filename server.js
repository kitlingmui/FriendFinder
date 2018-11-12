const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'app/public')))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app)

app.listen(PORT, () => console.log(`App Listening on : ${PORT}`))

