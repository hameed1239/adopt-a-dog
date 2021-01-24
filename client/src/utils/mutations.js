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
      temperament {
        name
      }
    }
  }
`;

export const ADD_ADOPTION = gql`
  mutation addAdoption(
    $dog: ID!
    $user: ID!
    $requestDate: String!
    $isApproved: Boolean!
    $approvedBy: ID!
    $approvalDate: String!
  ) {
    addAdoption(
      dog:$dog
      user:$user
      requestDate: $requestDate
      isApproved: $isApproved
      approvedBy: $approvedBy
      approvalDate: $approvalDate
    ) {
      _id
      dog{
        _id
        name
        
      }
      user{
        _id
        
        firstName
        lastName
        
        
      }
      requestDate
      isApproved
      approvedBy{
        _id
        
        firstName
        lastName
      }
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
    $email: String!
    $address: String!
    $city: String!
    $state: String!
    $zip: String!
    $phone: Int!
    $otherDogs: Int!
    $noOfKids: Int!
    $houseOrApartment: String!
    $isAdmin: Boolean
  ){
    updateUser(
      _id: $_id
      firstName: $firstName
      lastName: $lastName
      email: $email
      address: $address
      city: $city
      state: $state
      zip: $zip
      phone: $phone
      otherDogs: $otherDogs
      noOfKids: $noOfKids
      houseOrApartment: $houseOrApartment
      isAdmin: $isAdmin
    )
    {
      _id
      firstName
      lastName
      email
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
`

export const UPDATE_AN_ADOPTION = gql`
  mutation updateAdoption(
    $_id: ID!
    $dog: ID!
    $user: ID!
    $requestDate: String!
    $isApproved: Boolean!
    $approvedBy: ID!
    $approvalDate: String!
  ){
    updateAdoption(
    _id: $_id
    dog: $dog
    user: $user
    requestDate: $requestDate
    isApproved: $isApproved
    approvedBy: $approvedBy
    approvalDate: $approvalDate
    )
    {
    _id
    dog
    user
    requestDate
    isApproved
    approvedBy
    approvalDate
    }
  }
`

export const DELETE_USER = gql`
    mutation deleteUser(
      $_id: ID!
    ){
      deleteUser(
        _id: $_id
      )
      {
        _id
      }
    }
`
