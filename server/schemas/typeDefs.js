const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Status {
    _id: ID
    name: String
  }

  type Breed {
    _id: ID
    name: String
    size: String
    hypoallergenic: Boolean
    colors: [Color]
    temperament: [Temperament]
  }

  type Color {
    _id: ID
    name: String
  }

  type Temperament {
    _id: ID
    name: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Dog {
    _id: ID
    name: String
    height: String
    weight: String
    yearOfBirth: Int
    gender: String
    hypoallergenic: Boolean
    story: String
    size: String
    colors: [Color]
    breed: Breed
    temperaments: [Temperament]
    status: Status
    imgUrl: String
  }

    type Adoption {
        _id:ID
        dog: Dog
        user: User
        requestDate: String
        isApproved: Boolean
        approvedBy: User
        approvalDate: String
    }

    type User {
        _id: ID
        userName: String
        email: String
        isAdmin: Boolean
        firstName: String
        lastName: String
        address: String
        city: String
        state: String
        zip: String
        phone: Int
        otherDogs: Int
        noOfKids: Int
        houseOrApartment: String
        adoption: ID
    }

    type Query {
        breeds: [Breed]
        breed(_id: ID): Breed
        dogs(breed: ID, name: String): [Dog]
        dog(_id: ID!): Dog
        adoptions: [Adoption]
        adoption(_id: ID!): Adoption
        user: User
        temperaments: [Temperament]
        colors: [Color]
        status: [Status]
        me: User
        users: [User]
    }

    type Mutation {
        addBreed(
            name: String!, 
            size: String!, 
            hypoallergenic: Boolean!, 
            colors:[ID]!, 
            temperaments:[ID]! 
            ): Breed
        updateBreed(
            _id: ID!, 
            name: String, 
            size: String, 
            hypoallergenic: Boolean, 
            colors:[ID], 
            temperaments:[ID] 
            ) :Breed
        addDog(
            name: String!, 
            height: String!, 
            weight: String!, 
            yearOfBirth: Int, 
            gender: String!, 
            hypoallergenic: Boolean!, 
            story: String!, 
            size: String!, 
            colors: [ID]!, 
            breed: ID!, 
            temperaments: [ID]!, 
            status: [ID]
            ): Dog
        updateDog(
            _id:ID!, 
            name: String, 
            height: String, 
            weight: String, 
            yearOfBirth: Int, 
            gender: String, 
            hypoallergenic: Boolean, 
            story: String, 
            size: String, 
            colors: [ID], 
            breed: ID, 
            temperaments: [ID], 
            status: [ID]
            ): Dog
        removeDog(
            _id:ID!
        ): Dog
        login(
          email: String!,
          password: String!
        ): Auth
        addUser(
          userName: String!, 
          email: String!, 
          password: String!
        ): Auth
        updateUser(
          _id: ID!
          firstName: String!
          lastName: String!
          address: String!
          city: String!
          state: String!
          zip: String!
          phone: Int!
          otherDogs: Int!
          noOfKids: Int!
          houseOrApartment: String!
       ):User
    }
`;

module.exports = typeDefs;
