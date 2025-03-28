import {FlatList, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {EpisodeProps} from '../navigation/types';
import {useQuery} from '@apollo/client';
import {GET_EPISODE} from '../queries/Queries';
import {EpisodeData} from '../model/characterTypes';
import CharacterItem from '../components/CharacterItem';
import {labels} from '../utils/constants';
import Loader from '../components/Loader';

const Episode = ({route}: EpisodeProps) => {
  const {id} = route.params;
  const {data, loading, error} = useQuery<EpisodeData>(GET_EPISODE, {
    variables: {episodeId: id},
  });
  const {episode} = data || {};

  if (loading) return <Loader />;

  if (error) return <Text>{'Error: ' + error.message}</Text>;

  return (
    <SafeAreaView>
      <View className="p-4">
        <Text className="text-3xl">{episode?.name}</Text>
        <Text className="text-xl">{episode?.episode}</Text>
        <Text className="text-l">{episode?.air_date}</Text>
        <Text className="text-2xl mt-8 font-semibold">
          {labels.listOfCharacters}
        </Text>
      </View>
      <FlatList
        renderItem={({item}) => (
          <CharacterItem
            name={item?.name}
            id={item?.id}
            image={item?.image}
            activeOpacity={1}
          />
        )}
        data={episode?.characters || []}
        keyExtractor={item => `${item.id}`}
        removeClippedSubviews={true}
        className="mt-8"
      />
    </SafeAreaView>
  );
};

export default Episode;
