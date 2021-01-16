"Brown"
"Red"
"Gold"
"Cream"
"Fawn"
"Black"
"Blue"
"White"
"Orange"
"Silver"
"Tan"
"Grey"
"Piebald"
"Brindle"
"Tricolor"
"Yellow"
"Sable"
"Harlequin"
"Mantle"
"Mahogany"
"Rust"


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