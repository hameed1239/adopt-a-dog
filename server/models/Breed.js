const mongoose = require("mongoose");
const { Schema } = mongoose;

const breedSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true

    },
    size:{
        type: String,
        required: true,
   },
    hypoallergenic: {
        type: Boolean,
        required: true,

    },
    colors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Color
        }   
    ],
    Temperaments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Temperament
        }
    ]
})

const Breed = mongoose.model("Breed", breedSchema);

module.exports = Breed;