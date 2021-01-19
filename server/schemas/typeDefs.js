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
  }

  type Adoption {
    dog: Dog
    user: User
    requestDate: String
    isApproved: Boolean
    approvedBy: User
    approvalDate: String
  }

  type User {
    userName: String
    email: String
    isAdmin: Boolean
    
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    breeds: [Breed]
    dogs(breed: ID, name: String): [Dog]
    dog(_id: ID!): Dog
    adoptions: [Adoption]
    adoption(_id: ID!): Adoption
    user: User
    me: User
  }

  type Mutation {
    addBreed(
      name: String!
      size: String!
      hypoallergenic: Boolean!
      colors: [ID]!
      temperaments: [ID]!
    ): Breed
    updateBreed(
      _id: ID!
      name: String
      size: String
      hypoallergenic: Boolean
      colors: [ID]
      temperaments: [ID]
    ): Breed
    addDog(
      name: String!
      height: String!
      weight: String!
      yearOfBirth: Int
      gender: String!
      hypoallergenic: Boolean!
      story: String!
      size: String!
      colors: [ID]!
      breed: ID!
      temperaments: [ID]!
      status: [ID]
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
  }
`;

module.exports = typeDefs;
