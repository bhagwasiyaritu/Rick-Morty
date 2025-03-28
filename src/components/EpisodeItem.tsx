import {Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {EpisodeItemProps} from '../model/characterTypes';

const EpisodeItem: React.FC<EpisodeItemProps> = ({
  id,
  name,
  episode,
  onPress,
}) => {
  return (
    <TouchableOpacity
      key={id}
      className="flex-row border-b-2 border-gray-200 py-4 px-4"
      onPress={onPress}>
      <Text className="flex-1 color-slate-500 font-semibold text-l text-start  ">
        {name}
      </Text>
      <Text className=" color-slate-500 font-semibold text-l text-end ">
        {episode}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(EpisodeItem, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
