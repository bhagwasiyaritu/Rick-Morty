import {Text} from 'react-native';
import React from 'react';
import {Episode} from '../model/characterTypes';

const EpisodeItem: React.FC<Episode> = ({id, name}) => {
  return (
    <Text
      key={id}
      className="py-4 px-4 color-slate-500 font-semibold text-l text-start border-b-2 border-gray-200 ">
      {name}
    </Text>
  );
};

export default EpisodeItem;
