
const express = require('express')
const app = express()

//middleware
app.use(express.json());

app.post('/', function (req, res, next) {
    console.log('Hello');
    next();
},
    function (req, res, next) {
        req.body.name = "rosh";
        next();
    },
    function (req, res) {
        let n = req.body.name;
        res.send(`Hello ${n} ,how are you`)

    });
let port = 3000;
app.listen(port, function () {
    console.log(`server is running on port ${port}`);
})
