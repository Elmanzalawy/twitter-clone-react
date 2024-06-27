import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Platform, ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import axiosConfig from '../config/axiosConfig';
import { Entypo } from '@expo/vector-icons';
import { format } from "date-fns";


export default function TweetScreen({ route, navigation }) {

    const [tweet, setTweet] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getTweet();
    }, []);

    function getTweet() {
        axiosConfig.get(`/tweets/${route.params.tweetId}`)
            .then(response => {
                setTweet(response.data)
                setIsLoading(false)
            })
            .catch(error => {
                console.error(error)
                setIsLoading(false)
            })
    }

    function goToProfile() {
        navigation.navigate('Profile Screen');
    }

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator style={{ marginTop: 8 }} size="large" color="gray" />
            ) : (
                <>
                    <View style={styles.profileContainer}>
                        <TouchableOpacity style={styles.flexRow} onPress={() => goToProfile()}>
                            <Image
                                style={styles.avatar}
                                source={{
                                    uri: tweet.user.avatar
                                }}
                            />
                            <View>
                                <Text style={styles.tweetName}>{tweet.user.name}</Text>
                                <Text style={styles.tweetHandle}>{tweet.user.username}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Entypo name="dots-three-vertical" size={24} color="gray" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.tweetContentContainer}>
                        <Text style={styles.tweetContent}>
                            {tweet.body}
                        </Text>

                        <View style={styles.tweetTimestampContainer}>
                            <Text style={styles.tweetTimestampText}>{format(new Date(tweet.created_at), 'h:mm a')}</Text>
                            <Text style={styles.tweetTimestampText}>&middot;</Text>
                            <Text style={styles.tweetTimestampText}>{format(new Date(tweet.created_at), 'd MMM.yy')}</Text>
                            <Text style={styles.tweetTimestampText}>&middot;</Text>
                            <Text style={[styles.tweetTimestampText, styles.linkColor]}>Twitter for Android</Text>
                        </View>
                    </View>

                    <View style={styles.tweetEngagement}>
                        <View style={[styles.flexRow, styles.ml4]}>
                            <Text style={styles.tweetEngagementCount}>612</Text>
                            <Text style={styles.tweetEngagementLabel}>Retweets</Text>
                        </View>
                        <View style={[styles.flexRow, styles.ml4]}>
                            <Text style={styles.tweetEngagementCount}>39</Text>
                            <Text style={styles.tweetEngagementLabel}>Quote Tweets</Text>
                        </View>
                        <View style={[styles.flexRow, styles.ml4]}>
                            <Text style={styles.tweetEngagementCount}>3,941</Text>
                            <Text style={styles.tweetEngagementLabel}>Likes</Text>
                        </View>
                    </View>

                    <View style={[styles.tweetEngagement, styles.spaceAround]}>
                        <TouchableOpacity style={styles.flexRow}>
                            <EvilIcons name="comment" size={32} color="gray" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.flexRow}>
                            <EvilIcons name="retweet" size={32} color="gray" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.flexRow}>
                            <EvilIcons name="heart" size={32} color="gray" />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                            <EvilIcons
                                name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'}
                                size={32}
                                color="gray"
                            />
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 10
    },
    flexRow: {
        flexDirection: 'row',
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 8,
        borderRadius: 25
    },
    tweetName: {
        fontWeight: 'bold',
        color: '#222222'
    },
    tweetHandle: {
        color: 'gray',
        marginTop: 2
    },
    tweetContentContainer: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb'
    },
    tweetContent: {
        fontSize: 18,
        lineHeight: 30,
    },
    tweetTimestampContainer: {
        flexDirection: 'row',
        marginTop: 12,
    },
    tweetTimestampText: {
        color: 'gray',
        marginRight: 3,
    },
    linkColor: {
        color: '#1d9bf1'
    },
    tweetEngagement: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb'
    },
    tweetEngagementCount: {
        fontWeight: 'bold',
    },
    tweetEngagementLabel: {
        color: 'gray',
        marginLeft: 4
    },
    ml4: {
        marginLeft: 16,
    },
    spaceAround: {
        justifyContent: 'space-around'
    }
})