import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        userName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($userName: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        userName
      }
    }
  }
`;

export const ADD_BREED = gql`
  mutation addBreed(
    $name: String!
    $size: String!
    $hypoallergenic: Boolean!
    $colors: [ID]!
    $temperaments: [ID]!
  ) {
    addBreed(
      name: $name
      size: $size
      hypoallergenic: $hypoallergenic
      colors: $colors
      temperaments: $temperaments
    ) {
      _id
      name
      size
      hypoallergenic
      colors {
        name
      }
      temperaments {
        name
      }
    }
  }
`;

export const UPDATE_A_BREED = gql`
  mutation updateBreed(
    $_id: ID!
    $name: String
    $size: String
    $hypoallergenic: Boolean
    $colors: [ID]
    $temperaments: [ID]
  ) {
    updateBreed(
      _id: $_id
      name: $name
      size: $size
      hypoallergenic: $hypoallergenic
      colors: $colors
      temperaments: $temperaments
    ) {
      _id
      name
      size
      colors {
        name
      }
    }
  }
`;

export const ADD_DOG = gql`
  mutation addDog(
    $name: String!
    $height: String!
    $weight: String!
    $yearOfBirth: Int
    $size: String!
    $gender: String!
    $hypoallergenic: Boolean!
    $story: String!
    $colors: [ID]!
    $breed: ID!
    $temperaments: [ID]!
    $status: [ID]
  ) {
    addDog(
      name: $name
      height: $height
      weight: $weight
      yearOfBirth: $yearOfBirth
      size: $size
      gender: $gender
      story: $story
      hypoallergenic: $hypoallergenic
      colors: $colors
      breed: $breed
      temperaments: $temperaments
      status: $status
    ) {
      _id
      name
      height
      weight
      yearOfBirth
      gender
      hypoallergenic
      story
      size
      colors {
        name
      }
      breed {
        name
      }
      temperaments {
        name
      }
      status {
        name
      }
    }
  }
`;

export const UPDATE_A_DOG = gql`
  mutation updateDog(
    $_id: ID!
    $name: String
    $height: String
    $weight: String
    $yearOfBirth: Int
    $size: String
    $gender: String
    $Story: String
    $hypoallergenic: Boolean
    $colors: [ID]
    $temperaments: [ID]
    $status: [ID]
    $breed: ID
  ) {
    updateDog(
      _id: $_id
      name: $name
      height: $height
      weight: $weight
      yearOfBirth: $yearOfBirth
      size: $size
      gender: $gender
      story: $Story
      hypoallergenic: $hypoallergenic
      colors: $colors
      breed: $breed
      temperaments: $temperaments
      status: $status
    ) {
      _id
      name
      height
      weight
      yearOfBirth
      gender
      hypoallergenic
      story
      size
      colors {
        _id
        name
      }
      breed {
        _id
        name
      }
      temperaments {
        _id
        name
      }
      status {
        _id
        name
      }
    }
  }
`;

export const REMOVE_A_DOG = gql`
  mutation removeDog($_id: ID!) {
    removeDog(_id: $_id) {
      _id
      name
    }
  }
`;
