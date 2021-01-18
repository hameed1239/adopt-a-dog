const { User, Breed, Adoption, Dog, Color, Status, Temperament } = require("../models")

const resolvers = {
    Query: {
        breeds: async () => {
            return await Breed.find().populate("dogs");
        },
        dogs: async (parent, { breed, name }) => {
            const params = {};
            if (breed) {
                params.breed = breed
            }
            if (name){
                params.name = name
            }
        

            return await Dog.find(params).populate("temperaments").populate("breed").populate("colors")
        }
    }
}

module.exports = resolvers;