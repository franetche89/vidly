const mongoose = require('mongoose');
const Joi = require('joi');
const {GenreSchema} = require('./genres');


const Movie = mongoose.model('Movie', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim:true,
        minlenght: 2,
        maxlenght: 255
    },
    genre:{
        type:GenreSchema,
        required:true
    }, 
    numberInStock: {
        type:Number,
        required:true,
        min:0,
        max:255
    },
    dailyRentalRate: { 
        type:Number,
        required:true,
        min:0,
        max:255}

}));

function validateMovie(movie){
    const schema = {
        title: Joi.string().min(2).max(50).required(),
        genreId: Joi.string().required(),
        numberInStock: Joi.number().min(0).required(),
        dailyRentalRate: Joi.number().min(0).required()
    };
    return Joi.validate(movie, schema);
}

exports.Movie = Movie;
exports.validate = validateMovie;