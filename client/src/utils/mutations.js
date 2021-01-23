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
