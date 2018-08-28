const express = require('express'); //
const app = express(); //
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json()); //
app.use(bodyParser.urlencoded({ extended: true })); //
app.use(cors());


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB);

const { Movie } = require('./models/movie');

app.get('/', (req, res) => {
    res.json({
        message: "Success"
    })
});

app.get('/get-all-movies', (req, res) => {
    Movie.find()
        .select({ imageurl: 1 })
        .then((movies) => {
            res.json(movies);
        }, (err) => {
            console.log(err);
        });
});

app.get('/get-details-by-id/:id', (req, res) => {
    Movie.findById(req.params.id).then((detail) => {
        res.json(detail);
    }, (err) => {
        console.log(err);
    });
});

app.put('/add-review/:id', (req, res) => {

    var updateQuery = {
        $push: {
            "reviews": req.body
        }
    }

    var updateOptions = {
        "safe": true,
        new: true
    }


    Movie.findByIdAndUpdate(req.params.id, updateQuery, updateOptions).then((updateFilm) => {
        res.json(updateFilm);
    }, (err) => {
        console.log(err);
    });
});

app.listen(app.get('port'));