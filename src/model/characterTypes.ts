export interface CharacterTypes {
  id: number;
  name: string;
  gender: string;
  image: string;
}

export interface CharacterItemProps extends CharacterTypes {
  onPress: () => void;
}

export interface GetCharactersQueryData {
  characters: {
    results: CharacterTypes[];
  };
}

export interface CharacterData {
  character: {
    id: string;
    name: string;
    image: string;
    gender: string;
    episode: Episode[];
  };
}

export interface Episode {
  id: string;
  name: string;
}
