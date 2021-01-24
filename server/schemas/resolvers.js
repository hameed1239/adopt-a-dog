const { User, Breed, Adoption, Dog, Color, Status, Temperament } = require("../models")
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        breeds: async () => {
            return await Breed.find().populate("colors").populate("temperaments");
        },
        dogs: async (parent, { breed, name }) => {
            const params = {};
            if (breed) {
                params.breed = breed
            }
            if (name) {
                params.name = name
            }


            return await Dog.find(params).populate("temperaments").populate("breed").populate("colors").populate("status");
        },
        dog: async (parent, { _id }) => {
            return await Dog.findById(_id).populate("temperaments").populate("breed").populate("colors").populate("status");
        },
        adoptions: async (parent, context) => {
            if (context.user.isAdmin) {
                return await Adoption.find().populate("dog").populate("user");
            }
            throw new AuthenticationError('Not logged in');
        },
        adoption: async (parent, { _id }, context) => {
            if (context.user.isAdmin) {
                return await Adoption.findById(_id).populate("dog").populate("user");
            }
            throw new AuthenticationError('Not logged in');
        },
        temperaments: async () => {
            return await Temperament.find();
        },
        colors: async () => {
            return await Color.find();
        },
        status: async () => {
            return await Status.find();
        }

    },
    Mutation: {
        addBreed: async (parent, args, context) => {
            if (context.user) {
                // console.log(context.user)
                if (context.user.isAdmin) {
                    const breed = await Breed.create(args);

                    return await Breed.findById(breed._id).populate("colors").populate("temperaments");
                }
                throw new AuthenticationError('Unauthorized User. Your login information is being reported to sysAdmin');
            }

            throw new AuthenticationError('Not logged in');

        },
        updateBreed: async (parent, args, context) => {
            if (context.user.isAdmin) {
                if (context.user.isAdmin) {
                    const { _id } = args
                    return await Breed.findByIdAndUpdate(_id, { ...args }, { new: true });
                }
                throw new AuthenticationError('Unauthorized User. Your login information is beign reported to sysAdmin');
            }
            throw new AuthenticationError('Not logged in');
        },
        addDog: async (parent, args, context) => {
            if (context.user) {
                if (context.user.isAdmin) {
                    const dog = await Dog.create(args)
                return await Dog.findById(dog._id).populate("temperaments").populate("colors").populate("breed").populate("status")
                }
                throw new AuthenticationError('Unauthorized User. Your login information is beign reported to sysAdmin');
            }
            throw new AuthenticationError('Not logged in');
        },
        updateDog: async (parent, args, context) => {
            if (context.user) {
                if (context.user.isAdmin) {
                    const { _id } = args
                return await Dog.findByIdAndUpdate(_id, { ...args }, { new: true });
                }
                throw new AuthenticationError('Unauthorized User. Your login information is beign reported to sysAdmin');
            }
            throw new AuthenticationError('Not logged in');
        },
        removeDog: async (parent, { _id }, context) => {
            if (context.user) {
                if (context.user.isAdmin) {
                    return await Dog.findByIdAndDelete(_id);
                }
                throw new AuthenticationError('Unauthorized User. Your login information is beign reported to sysAdmin');
            }
            throw new AuthenticationError('Not logged in');
        },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            console.log(user)
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        }
    }
}

module.exports = resolvers;
