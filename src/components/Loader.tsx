import {ActivityIndicator} from 'react-native';
import React from 'react';

const Loader = () => {
  return <ActivityIndicator testID='loader' size="large" className="color-violet-900" />;
};

export default Loader;
