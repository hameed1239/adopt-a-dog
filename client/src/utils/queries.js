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
    
    }
  }
`;
