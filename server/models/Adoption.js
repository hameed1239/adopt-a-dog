const mongoose = require("mongoose");
const { Schema } = mongoose;

const adoptionSchema = new mongoose.Schema({
    dog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Dog
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    }
})

const Adoption = mongoose.model("Adoption", adoptionSchema);

module.exports = Adoption;