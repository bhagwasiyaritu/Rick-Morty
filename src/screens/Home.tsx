import {FlatList, Text} from 'react-native';
import React, {useState} from 'react';
import {useQuery} from '@apollo/client';
import {GET_CHARACTERS} from '../queries/Queries';
import CharacterItem from '../components/CharacterItem';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GetCharactersQueryData} from '../model/characterTypes';
import RoutesName from '../routes/routesName';
import {HomeProps} from '../navigation/types';
import Loader from '../components/Loader';

const Home = ({navigation}: HomeProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false);

  const {data, loading, error, fetchMore} = useQuery<GetCharactersQueryData>(
    GET_CHARACTERS,
    {
      variables: {page: 1},
      fetchPolicy: 'cache-and-network',
    },
  );

  const characterList = data?.characters?.results || [];

  const handleCharacterPress = (id: number, name: string) => {
    navigation.navigate(RoutesName.details, {id, name});
  };

  const loadMoreItems = async () => {
    if (isFetchingMore || loading) return;

    setIsFetchingMore(true);
    await fetchMore({
      variables: {page: currentPage + 1},
      updateQuery: (prev, {fetchMoreResult}) => {
        if (
          !fetchMoreResult ||
          fetchMoreResult.characters?.results?.length === 0
        ) {
          return prev;
        }
        setCurrentPage(prevPage => prevPage + 1);
        return {
          characters: {
            ...prev.characters,
            info: fetchMoreResult.characters.info,
            results: [
              ...prev.characters.results,
              ...fetchMoreResult.characters.results,
            ],
          },
        };
      },
    });
    setIsFetchingMore(false);
  };

  if (loading) return <Loader />;

  if (error) return <Text>{'Error: ' + error.message}</Text>;

  return (
    <SafeAreaView className="bg-white">
      <FlatList
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CharacterItem
            name={item?.name}
            image={item?.image}
            id={item?.id}
            gender={item?.gender}
            onPress={() => handleCharacterPress(item?.id, item?.name)}
          />
        )}
        data={characterList}
        keyExtractor={item => `${item.id}`}
        removeClippedSubviews={true}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={3}
        ListFooterComponent={
          data?.characters?.info?.next != null && isFetchingMore ? (
            <Loader />
          ) : null
        }
      />
    </SafeAreaView>
  );
};

export default Home;
