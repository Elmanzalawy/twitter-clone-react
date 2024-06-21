import {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, FlatList, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import RedditFeed from './components/RedditFeed';

export default function App() {
  const [text, setText] = useState('');

  function onPress() {
    Alert.alert('Alert title', 'Alert message')
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title='Press Me' onPress={() => Alert.alert('test')} />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>
          <MaterialIcons name='settings' size={18} color="#000" />
        </Text>
        <Text>Press hereee</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 60 }}>
        <Pressable style={styles.button}
          onPressIn={() => console.log('press in')}
          onPressOut={() => console.log('press out')}
          onLongPress={() => console.log('long press')}
          hitSlop={20} //hitbox size
        >
          <Text>Pressable</Text>
        </Pressable>
      </View>

      <View style={{ marginTop: 40 }}>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
        />
        <Text>{text}</Text>
      </View>

      <View>
        {/* <FlatList
          style={{ marginHorizontal:20 }}
          data={apiResults}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        /> */}
        <RedditFeed/>
      </View>
    </View>
  );
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
