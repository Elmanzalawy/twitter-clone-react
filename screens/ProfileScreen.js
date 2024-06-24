import React from "react";
import { View, Text, Image, StyleSheet, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FlatList } from "react-native-gesture-handler";
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function ProfileScreen() {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba3',
            title: 'Fourth Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
            title: 'Fifth Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d721',
            title: 'Sixth Item',
        },
    ];

    const renderItem = ({ item }) => (
        <View style={{ marginVertical: 15 }}>
            <Text>{item.title}</Text>
        </View>
    );
    const ProfileHeader = () => (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={{
                    uri: 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
                }}
            />
            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png'
                    }}
                />
                <TouchableOpacity style={styles.followButton}>
                    <Text style={styles.followButtonText}>Follow</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.nameContainer}>
                <Text style={styles.profileName}>Mohamed Elmanzalawy</Text>
                <Text style={styles.profileHandle}>@m.elmanzalawy</Text>
            </View>

            <View style={styles.proifleContainer}>
                <Text style={styles.profileContainerText}>
                    Full-stack Developer @ Super Be | Bachelor's in Engineering
                </Text>
            </View>

            <View style={styles.locationContainer}>
                <EvilIcons name="location" size={24} color="gray" />
                <Text style={styles.textGray}>Port Said, Egypt</Text>
            </View>

            <View style={styles.linkContainer}>
                <TouchableOpacity
                    style={styles.linkItem}
                    onPress={() => Linking.openURL('https://www.linkedin.com/in/mohamed-elmanzalawy/')}
                >
                    <EvilIcons name="link" size={24} color="gray" />
                    <Text style={styles.linkColor}>LinkedIn</Text>
                </TouchableOpacity>

                <View style={[styles.linkItem, styles.ml4]}>
                    <EvilIcons name="calendar" size={25} color="gray" />
                    <Text style={styles.textGray}>Joined Jan 2024</Text>
                </View>

            </View>

            <View style={styles.followContainer}>
                <View style={styles.followItem}>
                    <Text style={styles.followItemNumber}>509</Text>
                    <Text style={styles.followItemLabel}>Following</Text>
                </View>
                <View style={[styles.followItem, styles.ml4]}>
                    <Text style={styles.followItemNumber}>2,315</Text>
                    <Text style={styles.followItemLabel}>Followers</Text>
                </View>
            </View>

            <View style={styles.separator}></View>
        </View>
    );


    return (
        <FlatList
            style={styles.container}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={styles.separator}></View>}
            ListHeaderComponent={ProfileHeader} //prevent list scrolling
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    backgroundImage: {
        width: '100%',
        height: 120
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
        marginTop: -34
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: 'white'
    },
    followButton: {
        backgroundColor: '#1e1e1e',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 24,
    },
    followButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    nameContainer: {
        paddingHorizontal: 10,
        paddingVertical: 2,
    },
    profileName: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    profileHandle: {
        color: 'gray',
        marginTop: 1
    },
    proifleContainer: {
        paddingHorizontal: 10,
        marginTop: 8,
    },
    profileContainerText: {
        lineHeight: 22
    },
    textGray: {
        color: 'gray'
    },
    locationContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 12
    },
    ml4: {
        marginLeft: 16,
    },
    linkContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 6,
    },
    linkColor: {
        color: '#1d9bf1',
    },
    linkItem: {
        flexDirection: 'row'
    },
    followContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
    followItem: {
        flexDirection: 'row',
    },
    followItemNumber: {
        fontWeight: 'bold'
    },
    followItemLabel: {
        marginLeft: 4
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB'
    }
});