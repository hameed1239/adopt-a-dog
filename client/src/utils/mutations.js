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

export const ADD_ADOPTION = gql`
  mutation addAdoption(
    $dog: ID!
    $user: ID!
    $requestDate: String
    $isApproved: Boolean
    $approvalDate: String
  ) {
    addAdoption(
      dog: $dog
      user: $user
      requestDate: $requestDate
      isApproved: $isApproved
      approvalDate: $approvalDate
    ) {
      _id
      dog {
        _id
        name
      }
      user {
        _id

        firstName
        lastName
      }
      requestDate
      isApproved
      approvalDate
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

export const UPDATE_USER = gql`
  mutation updateUser(
    $_id: ID!
    $firstName: String!
    $lastName: String!
    $address: String!
    $city: String!
    $state: String!
    $zip: String!
    $phone: Int!
    $otherDogs: Int!
    $noOfKids: Int!
    $houseOrApartment: String!
    $isAdmin: Boolean
  ) {
    updateUser(
      _id: $_id
      firstName: $firstName
      lastName: $lastName

      address: $address
      city: $city
      state: $state
      zip: $zip
      phone: $phone
      otherDogs: $otherDogs
      noOfKids: $noOfKids
      houseOrApartment: $houseOrApartment
      isAdmin: $isAdmin
    ) {
      _id
      firstName
      lastName

      address
      city
      state
      zip
      phone
      otherDogs
      noOfKids
      houseOrApartment
      isAdmin
    }
  }
`;

export const UPDATE_AN_ADOPTION = gql`
  mutation updateAdoption(
    $_id: ID!
    $dog: ID!
    $user: ID!
    $requestDate: String
    $isApproved: Boolean
    $approvalDate: String
  ) {
    updateAdoption(
      _id: $_id
      dog: $dog
      user: $user
      requestDate: $requestDate
      isApproved: $isApproved

      approvalDate: $approvalDate
    ) {
      _id
      dog {
        _id
        name
      }
      user {
        _id
        firstName
        lastName
      }
      requestDate
      isApproved
      approvalDate
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($_id: ID!) {
    deleteUser(_id: $_id) {
      _id
    }

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
    $imgUrl: String
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
      imgUrl: $imgUrl
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
      imgUrl
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
