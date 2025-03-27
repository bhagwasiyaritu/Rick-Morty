export interface CharacterTypes {
  id: number;
  name: string;
  gender?: string;
  image: string;
}

export interface CharacterItemProps extends CharacterTypes {
  onPress?: () => void;
  activeOpacity?: number;
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
  id: number;
  name: string;
  episode: string;
  air_date?: string;
  characters?: CharacterTypes[];
}

export interface EpisodeItemProps extends Episode {
  onPress: () => void;
}

export interface EpisodeData {
  episode: Episode;
}
