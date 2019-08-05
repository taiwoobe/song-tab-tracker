const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send({
        message: 'Hello World'
    })
})
app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}, Your Registration was successful.`
    })
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Song Tab Tracker app listening on port ${port}!`))

