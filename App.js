import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='New Tweet' component={NewTweetScreen} />
        <Stack.Screen name='Tweet Screen' component={TweetScreen} />
        <Stack.Screen name='Profile Screen' component={ProfileScreen} />
        <StatusBar style='auto' />
      </Stack.Navigator>
    </NavigationContainer>
  );
}