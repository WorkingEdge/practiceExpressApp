const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hey ho')
})

app.listen(port, () => {
    console.log('Listening here on port 3000')
})