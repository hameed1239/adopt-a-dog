import gql from "graphql-tag";

export const QUERY_DOGS = gql`
  query getDogs($breed: ID, $name: String) {
    dogs(breed: $breed, name: $name) {
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
      breed {
        _id
        name
      }
      imgUrl
    }
  }
`;

export const QUERY_BREEDS = gql`
  {
    breeds {
      _id
      name
      size
      hypoallergenic
      colors {
        _id
        name
      }
      temperament {
        name
      }
    }
  }
`;

export const QUERY_BREED = gql`
  query getBreed($_id: ID) {
    breed(_id: $_id) {
      _id
      name
      size
      hypoallergenic
    }
  }
`;

export const QUERY_COLORS = gql`
  query getColors {
    colors {
      _id
      name
    }
  }
`;

export const QUERY_TEMPERAMENTS = gql`
  query getTemperaments {
    temperaments {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  query getUser($_id: ID) {
    user(_id: $_id) {
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
