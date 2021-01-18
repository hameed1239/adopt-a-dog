// const mongoose = require("mongoose");
const Status = require("./Status");
const User = require("./User");

const { Schema, model } = require("mongoose");

const dogSchema = new Schema({
    name: {
        type: String, 
        required: true,
        trim: true
    },
    height: {
        type: String, 
        required: true,
        trim: true
    },
    weight: {
        type: String, 
        required: true,
        trim: true
    },
    yearOfBirth: {
        type: Number        
    },
    gender: {
        type: String,
        required: true,
    },
    hypoallergenic: {
        type: Boolean,
        required: true
    },
    story: {
        type: String
    },
    size: {
        type: String,
        required: true,
    },
    colors: [
        {
            type: Schema.Types.ObjectId, 
            ref: "Color",
        }
    ],
    breed: {
        type: Schema.Types.ObjectId,
        ref: "Breed",  
    },
    temperaments: [
        {
        type: Schema.Types.ObjectId, 
        ref: "Temperament",
        }
    ],
    status: {
        type: Schema.Types.ObjectId,
        ref: "Status",
    },
    adoption: {
        type: Schema.Types.ObjectId,
        ref "adoption"
    }
})

const Dog = model('Dog', dogSchema);

module.exports = Dog;