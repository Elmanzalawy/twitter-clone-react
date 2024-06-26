import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios';
import { formatDistanceToNowStrict } from "date-fns";
import locale from 'date-fns/locale/en-US';
import formatDistance from "../scripts/formatDateTime";

export default function HomeScreen({ navigation }) {

    const [data, setData] = useState([]);
    useEffect(() => {
        getAllTweets();
    }, []);

    function getAllTweets() {
        axios.get('https://troll-arriving-vertically.ngrok-free.app/api/tweets')
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    function goToProfile() {
        navigation.navigate('Profile Screen');
    }

    function goToTweet() {
        navigation.navigate('Tweet Screen');
    }

    function goToNewTweet() {
        navigation.navigate('New Tweet');
    }

    const renderTweet = ({ item: tweet }) => (
        <View style={styles.tweetContainer}>
            <TouchableOpacity onPress={() => goToProfile()}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: tweet.user.avatar
                    }}
                />
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.flexRow} onPress={() => goToTweet()}>
                    <Text numberOfLines={1} style={styles.tweetName}>{tweet.user.name}</Text>
                    <Text numberOfLines={1} style={styles.tweetHandle}>@{tweet.user.username}</Text>
                    <Text>&middot;</Text>
                    <Text numberOfLines={1} style={styles.tweetHandle}>{formatDistanceToNowStrict(new Date(tweet.created_at), {
                        locale: {
                            ...locale,
                            formatDistance,
                        }
                    })}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tweetContentContainer} onPress={() => goToTweet()}>
                    <Text style={styles.tweetContent}>
                        {tweet.body}
                    </Text>
                </TouchableOpacity>

                <View style={styles.tweetEngagement}>
                    <TouchableOpacity style={styles.flexRow}>
                        <EvilIcons name="comment" size={22} color="gray" style={{ marginRight: 2 }} />
                        <Text style={styles.textGray}>415</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name="retweet" size={22} color="gray" style={{ marginRight: 2 }} />
                        <Text style={styles.textGray}>31</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name="heart" size={22} color="gray" style={{ marginRight: 2 }} />
                        <Text style={styles.textGray}>4,455</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons
                            name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'}
                            size={22}
                            color="gray"
                            style={{ marginRight: 2 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderTweet}
                keyExtractor={tweet => tweet.id}
                ItemSeparatorComponent={() => <View style={styles.tweetSeparator}></View>}
            />

            <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => goToNewTweet()}
            >
                <AntDesign name="plus" size={26} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    flexRow: {
        flexDirection: 'row',
    },
    tweetContainer: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 12
    },
    tweetSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb'
    },
    avatar: {
        width: 42,
        height: 42,
        marginRight: 8,
        borderRadius: 21
    },
    tweetName: {
        fontWeight: 'bold',
        color: '#222222',
    },
    tweetHandle: {
        marginHorizontal: 8,
        color: 'gray'
    },
    tweetContentContainer: {
        marginTop: 4,
    },
    tweetContent: {
        lineHeight: 20,
    },
    textGray: {
        color: 'gray'
    },
    tweetEngagement: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12
    },
    ml4: {
        marginLeft: 16,
    },
    floatingButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d9bf1',
        position: 'absolute',
        bottom: 20,
        right: 12
    }
})