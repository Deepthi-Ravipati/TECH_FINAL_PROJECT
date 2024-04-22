import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import PopularDestinationsScreen from './screens/PopularDestinationsScreen';
import HotelsScreen from './screens/HotelsScreen';
import BookNowScreen from './screens/BookNowScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Popular Destinations" component={PopularDestinationsScreen} />
        <Stack.Screen name="Hotels" component={HotelsScreen} />
        <Stack.Screen name="Book Now" component={BookNowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
