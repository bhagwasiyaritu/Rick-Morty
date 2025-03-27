import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  home: undefined;
  details: {id: number; name: string};
  episode: {id: number, name: string};
};

export type HomeProps = NativeStackScreenProps<
  RootStackParamList,
  'home'
>;

export type DetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'details'
>;

export type EpisodeProps = NativeStackScreenProps<
  RootStackParamList,
  'episode'
>;
