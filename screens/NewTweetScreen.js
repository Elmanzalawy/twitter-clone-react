import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator, Alert } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import axiosConfig from '../config/axiosConfig';

export default function NewTweetScreen({ navigation }) {
    const [tweet, setTweet] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function sendTweet() {
        if(tweet.length == 0){
            Alert.alert('Please enter a tweet');
            return;
        }

        setIsLoading(true)

        axiosConfig.post(`/tweets`, {
            body: tweet
        })
            .then(response => {
                navigation.navigate('Home1', {
                    newTweetAdded: response.data
                });
                setTweet(response.data)
                setIsLoading(false)
            })
            .catch(error => {
                console.error(error)
                setIsLoading(false)
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.tweetButtonContainer}>
                <Text style={tweet.length > 250 ? styles.textRed : styles.textGray}>Characters left: {280 - tweet.length}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {isLoading && (
                        <ActivityIndicator size="small" color="gray" style={{ marginRight: 8 }} />
                    )}

                    <TouchableOpacity 
                        style={isLoading ? [styles.tweetButton, { backgroundColor:'#5fa8d9'}] : styles.tweetButton} 
                        onPress={() => sendTweet()}
                        disabled={isLoading}
                    >
                        <Text style={styles.tweetButtonText}>Tweet</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.tweetBoxContainer}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png'
                    }}
                />

                <TextInput
                    style={styles.input}
                    onChangeText={setTweet}
                    value={tweet}
                    placeholder="What's happening?"
                    placeholderTextColor="gray"
                    multiline
                    maxLength={280}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 12,
        paddingHorizontal: 10
    },
    textGray: {
        color: 'gray'
    },
    textRed: {
        color: 'red'
    },
    ml4: {
        marginLeft: 16,
    },
    tweetButtonContainer: {
        paddingVertical: 4,
        paddingHorizontal: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tweetButton: {
        backgroundColor: '#1d9bf1',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 24,
    },
    tweetButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    tweetBoxContainer: {
        flexDirection: 'row',
        paddingTop: 10,
    },
    avatar: {
        width: 42,
        height: 42,
        borderRadius: 21,
        marginRight: 8,
        marginTop: 10
    },
    input: {
        flex: 1,
        fontSize: 18,
        lineHeight: 28,
        padding: 10
    }
});