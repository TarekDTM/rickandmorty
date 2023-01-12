import { CharactersRes } from './../../common/types/characters/index';
import { gql} from '@apollo/client';

export const CHARACHTERS_QUERY  = gql`
  query getCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        id
        name
        image
        status
      }
      info {
        next
        count
        pages
      }
    }
  }
`;

