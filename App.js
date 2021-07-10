import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import BookScreen from './screens/BookScreen';
import LibraryScreen from './screens/LibraryScreen';
import SplashScreen from './screens/SplashScreen';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{
        headerStyle: {
          backgroundColor: '#FE6D73',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
        },
      }}>
        <Stack.Screen name="Splash" options={{headerShown: false}} component={SplashScreen} />
        <Stack.Screen name="Ma Bibliothèque" component={LibraryScreen} />
        <Stack.Screen name="Détails du Livre" component={BookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}