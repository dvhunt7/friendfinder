//express, body parser, path
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post("/api/new", function (req, res) {
    // req.body is equal to the JSON data sent with the post request
    // This is what the body-parser middleware does for us
    //   console.log(req.body);
        reservation.tables.push(req.body);
        res.json(req.body);
        console.log(reservation.tables);
        console.log(reservation.tables.length);
        return true;

});

module.exports = app;
