const { User, Breed, Adoption, Dog, Color, Status, Temperament } = require("../models")
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const resolvers = {
    Query: {
        me: async (parent, args) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                  .select('-__v -password')
                
                return userData;
              }
            
              throw new AuthenticationError('Not logged in');
        },
        breeds: async () => {
            return await Breed.find();
        },
        dogs: async (parent, { breed, name }) => {
            const params = {};
            if (breed) {
                params.breed = breed
            }
            if (name){
                params.name = name
            }
        

            return await Dog.find(params).populate("temperaments").populate("breed").populate("colors").populate("status");
        },
        dog: async (parent, {_id}) => {
            return  await Dog.findById(_id).populate("temperaments").populate("breed").populate("colors").populate("status");
        } ,
        adoptions: async()=>{
            return await Adoption.find().populate("dog").populate("user");
        },
        adoption: async(parent, {_id})=>{
            return await Adoption.findById(_id).populate("dog").populate("user");
        },
        temperaments: async()=>{
            return await Temperament.find();
        },
        colors: async()=>{
            return await Color.find();
        },
        status: async()=>{
            return await Status.find();
        }

    },
    Mutation: {
        addBreed: async(parent, args ) =>{
            const breed = await Breed.create(args);

            return {breed};
        },
        updateBreed: async(parent, args) =>{
            const {_id} = args
           return await Breed.findByIdAndUpdate(_id, {...args}, {new: true});
        },
        addDog: async(parent, args) =>{
            const dog = await Dog.create(args)
            return await Dog.findById(dog._id).populate("temperaments").populate("colors").populate("breed").populate("status")
        },
        updateDog: async(parent, args) =>{
            const {_id} = args
            return await Dog.findByIdAndUpdate(_id, {...args}, {new:true});
        },
        removeDog: async(parent, {_id}) => {
            return await Dog.findByIdAndDelete(_id);
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
           const user = await User.create(args);
           const token = signToken(user);
           return {token,user};
        },
        login: async (parent,{email, password}) => {
            const user = await User.findOne({ email });

            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const correctPw = await user.isCorrectPassword(password);
          
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return {token,user};
        }
    }
}

module.exports = resolvers;
