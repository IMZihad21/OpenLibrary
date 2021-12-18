import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import BookDetails from './components/BookDetails';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#CDCDCD',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: "center",
          contentStyle: {
            backgroundColor: "#eee"
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Open Library"
          }}
        />
        <Stack.Screen
          name="BookDetails"
          component={BookDetails}
          options={{
            title: "Details"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
