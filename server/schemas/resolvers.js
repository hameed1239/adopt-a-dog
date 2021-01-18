const { User, Breed, Adoption, Dog, Color, Status, Temperament } = require("../models")

const resolvers = {
    Query: {
        breeds: async () => {
            return await Breed.find();
        },
        dogs: async (parent, { breed, name }) => {
            const params = {};

            if (breed) {
                params.breed = breed;
            }

            return await Dog.find(params).populate("breed")
        }
    }
}

module.exports = resolvers;