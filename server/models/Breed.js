const mongoose = require("mongoose");
const { Schema } = mongoose;

const breedSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true

    },
    minLife: {
        type: Number,
        required: true,
    },
    maxLife: {
        type: Number,
        required: true,
    }
})

const Breed = mongoose.model("Breed", breedSchema);

module.exports = Breed;