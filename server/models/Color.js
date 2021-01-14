const mongoose = require("mongoose");
const { Schema } = mongoose;

const colorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true

    }
})

const Color = mongoose.model("Color", colorSchema);

module.exports = Color;