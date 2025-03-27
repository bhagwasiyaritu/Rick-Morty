import {FlatList} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {GET_CHARACTERS} from '../queries/Queries';
import CharacterItem from '../components/CharacterItem';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GetCharactersQueryData} from '../model/characterTypes';
import RoutesName from '../routes/routesName';
import {HomeProps} from '../navigation/types';

const Home = ({navigation}: HomeProps) => {
  const {data} = useQuery<GetCharactersQueryData>(GET_CHARACTERS);

  const handleCharacterPress = (id: number, name: string) => {
    navigation.navigate(RoutesName.details, {id, name});
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
            onPress={() => handleCharacterPress(item?.id, item?.name)}
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
