const mongoose = require("mongoose");
const User = require("./User");

const { Schema } = mongoose;

const dogSchema = new mongoose.Schema({
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
    colors: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: Color,
        }
    ],
    breed: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Breed,  
    },
    temperament: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: Temperament,
    },
    status: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Status,
    },
    adoptedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
    }
})

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;