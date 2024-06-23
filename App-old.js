import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, FlatList, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import RedditFeed from './components/RedditFeed';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen({ navigation }) {


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
}

function DetailsScreen({route}) {
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log('details focused')

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log('details unfocused')
      };
    }, [])
  );

  // handle nav params
  // const {itemId, otherParam} = route.params;

  // return (
  //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //     <Text>Details Screen for {itemId}</Text>
  //     <Text>{otherParam}</Text>
  //   </View>
  // );

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen for</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}
        options={{ 
          tabBarLabel: 'My Home',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home" size={size} color={color}/>
          ),
         }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [text, setText] = useState('');

  function onPress() {
    Alert.alert('Alert title', 'Alert message')
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'My Home' }}
        />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );

  // return (
  //   <NavigationContainer>
  //     <Tab.Navigator>
  //       <Tab.Screen 
  //         name="Home" 
  //         component={HomeScreen}
  //         options={{ title: 'My Home' }}
  //       />
  //       <Tab.Screen name="Details" component={DetailsScreen} />
  //     </Tab.Navigator>
  //   </NavigationContainer>
  // );


  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       <Stack.Screen 
  //         name="Home" 
  //         component={HomeScreen}
  //         options={{ title: 'My Home' }}
  //       />
  //       <Stack.Screen name="Details" component={DetailsScreen} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );


  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //     <Button title='Press Me' onPress={() => Alert.alert('test')} />
  //     <TouchableOpacity style={styles.button} onPress={onPress}>
  //       <Text>
  //         <MaterialIcons name='settings' size={18} color="#000" />
  //       </Text>
  //       <Text>Press hereee</Text>
  //     </TouchableOpacity>

  //     <View style={{ marginTop: 60 }}>
  //       <Pressable style={styles.button}
  //         onPressIn={() => console.log('press in')}
  //         onPressOut={() => console.log('press out')}
  //         onLongPress={() => console.log('long press')}
  //         hitSlop={20} //hitbox size
  //       >
  //         <Text>Pressable</Text>
  //       </Pressable>
  //     </View>

  //     <View style={{ marginTop: 40 }}>
  //       <TextInput
  //         style={styles.input}
  //         onChangeText={setText}
  //         value={text}
  //       />
  //       <Text>{text}</Text>
  //     </View>

  //     <View>
  //       {/* <RedditFeed/> */}
  //     </View>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    marginTop: 10,
    padding: 10,
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
