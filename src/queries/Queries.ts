import {gql} from '@apollo/client';

export const GET_CHARACTERS = gql`
  query Characters {
    characters {
      results {
        id
        image
        name
        gender
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query Character($characterId: ID!) {
    character(id: $characterId) {
      id
      image
      gender
      name
      episode {
        name
        id
      }
    }
  }
`;
