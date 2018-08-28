const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    name: {
        type: String
    },
    imageurl: {
        type: String
    },
    year: {
        type: Number
    },
    genre: [],
    runningTime: {
        type: String
    },
    releseDate: {
        type: Date
    },
    synopsis: {
        type: String
    },
    castAndCrew: [
        {
            name: {
                type: String
            },
            imageUrl: {
                type: String
            }
        }
    ],
    reviews: [
        {
            message: {
                type: String
            },
            name: {
                type: String
            },
            rating: {
                type: Number
            }
        }
    ]
});

const Movie = mongoose.model('movie', MovieSchema);
module.exports = { Movie };

