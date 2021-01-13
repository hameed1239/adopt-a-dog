const mongoose = require("mongoose");
const { Schema } = mongoose;

const temperamentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true

    }
})

const Temperament = mongoose.model("Temperament", temperamentSchema);

module.exports = Temperament;