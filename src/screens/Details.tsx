import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {GET_CHARACTER} from '../queries/Queries';
import FastImage from 'react-native-fast-image';
import {CharacterData} from '../model/characterTypes';
import {RouteProp} from '@react-navigation/native';
import EpisodeItem from '../components/EpisodeItem';

type DetailsRouteProp = RouteProp<{params: {id: string}}, 'params'>;

const Details = ({route}: {route: DetailsRouteProp}) => {
  const {id} = route.params;
  const {data, loading, error} = useQuery<CharacterData>(GET_CHARACTER, {
    variables: {characterId: id},
  });
  const {character} = data || {};
  console.log('Character', data?.character);

  if (loading)
    return <ActivityIndicator size="large" className="color-violet-900" />;

  if (error) return <Text>{'Error: ' + error.message}</Text>;

  return (
    <SafeAreaView className="flex-1 py-8">
      <FastImage
        style={styles.image}
        source={{
          uri: character?.image,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text className="mt-8 color-slate-500 font-semibold text-xl text-center">
        {character?.name}
      </Text>
      <Text className=" color-slate-500 font-semibold text-xs text-center">
        {character?.gender}
      </Text>
      <FlatList
        renderItem={({item}) => <EpisodeItem name={item?.name} id={id} />}
        data={character?.episode || []}
        keyExtractor={item => `${item.id}`}
        removeClippedSubviews={true}
        className="mt-8"
      />
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    alignSelf: 'center',
  },
});
