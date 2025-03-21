import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import {ApolloProvider} from '@apollo/client';
import client from './src/client/ApolloClient';
import RoutesName from './src/routes/routesName';

import './global.css';
import { RootStackParamList } from './src/navigation/types';

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={RoutesName.home}>
          <Stack.Screen name={RoutesName.home} component={Home} />
          <Stack.Screen name={RoutesName.details} component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
