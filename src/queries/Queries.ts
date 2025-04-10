import {gql} from '@apollo/client';

export const GET_CHARACTERS = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      info {
        next
        pages
        prev
      }
      results {
        id
        name
        image
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
        episode
        air_date
      }
    }
  }
`;

export const GET_EPISODE = gql`
  query Episode($episodeId: ID!) {
    episode(id: $episodeId) {
      characters {
        image
        name
        id
      }
      name
      id
      episode
      air_date
    }
  }
`;
