import {FlatList} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {GET_CHARACTERS} from '../queries/Queries';
import CharacterItem from '../components/CharacterItem';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GetCharactersQueryData} from '../model/characterTypes';
import {useNavigation} from '@react-navigation/native';
import RoutesName from '../routes/routesName';
import {RootStackParamList} from '../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'home'
>;

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const {data} = useQuery<GetCharactersQueryData>(GET_CHARACTERS);

  const handleCharacterPress = (id: number) => {
    navigation.navigate(RoutesName.details, {id});
  };

  return (
    <SafeAreaView className="bg-white">
      <FlatList
        renderItem={({item}) => (
          <CharacterItem
            name={item?.name}
            image={item?.image}
            id={item?.id}
            gender={item?.gender}
            onPress={() => handleCharacterPress(item?.id)}
          />
        )}
        data={data?.characters?.results || []}
        keyExtractor={item => `${item.id}`}
        removeClippedSubviews={true}
      />
    </SafeAreaView>
  );
};

export default Home;
