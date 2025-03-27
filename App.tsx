import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import {ApolloProvider} from '@apollo/client';
import client from './src/client/ApolloClient';
import RoutesName from './src/routes/routesName';

import './global.css';
import {RootStackParamList} from './src/navigation/types';
import {headerTitle} from './src/utils/constants';
import Episode from './src/screens/Episode';

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={RoutesName.home}>
          <Stack.Screen
            name={RoutesName.home}
            component={Home}
            options={{headerTitle: headerTitle.rickyMorty}}
          />
          <Stack.Screen
            name={RoutesName.details}
            component={Details}
            options={({route}) => ({headerTitle: route?.params?.name})}
          />
          <Stack.Screen
            name={RoutesName.episode}
            component={Episode}
            options={({route}) => ({headerTitle: route?.params?.name})}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
