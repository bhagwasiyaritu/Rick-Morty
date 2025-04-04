import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import FastImage from 'react-native-fast-image';
import {CharacterItemProps} from '../model/characterTypes';

const CharacterItem: React.FC<CharacterItemProps> = ({
  id,
  name,
  image,
  gender,
  onPress,
  activeOpacity,
}: CharacterItemProps) => {
  return (
    <TouchableOpacity
      testID="character-item"
      activeOpacity={activeOpacity}
      className="flex-row py-4 px-4 mb-4 border-b-2 border-gray-200 items-center"
      key={id}
      onPress={onPress}>
      <FastImage
        testID="character-image"
        style={styles.image}
        source={{
          uri: image,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View className="ml-8">
        <Text className=" color-slate-500 font-semibold text-xl">{name}</Text>
        <Text className=" color-slate-500 font-semibold text-xs">{gender}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(CharacterItem, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});
