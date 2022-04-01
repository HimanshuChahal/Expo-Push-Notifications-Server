const express = require('express')
const bodyParser = require('body-parser')
const tokens = require('./routes/tokens')

const app = express()

app.use(bodyParser.json())
app.use(tokens)

const PORT = 3000

app.get('/', (req, res, next) => {
    res.send('You have reached to Expo Push Notifications API')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${ PORT }`)
})

module.exports = app
