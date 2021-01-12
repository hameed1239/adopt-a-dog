const mongoose = require("mongoose");
const { Schema } = mongoose;

const statusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true

    }
})

const Status = mongoose.model("Status", statusSchema);

module.exports = Status;