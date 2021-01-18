const { Schema, model } = require("mongoose");

const adoptionSchema = new Schema({
    dog: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Dog"
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    requestDate: {
        type: Date,
        default: Date.now
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    approvedBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    approvalDate: {
        type: Date,
    }
})

const Adoption = model("Adoption", adoptionSchema);

module.exports = Adoption;