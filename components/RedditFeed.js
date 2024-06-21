
import { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function RedditFeed() {
    const [apiResults, setApiResults] = useState([]);

    useEffect(() => {
        fetch('https://www.reddit.com/r/aww.json')
            .then(response => response.json())
            .then(resultsFromServer => {
                setApiResults(resultsFromServer.data.children)
            })
    }, [])

    const renderItem = ({ item }) => (
        <View style={{ marginTop: 10 }}>
            <Text>{item.data.title}</Text>
        </View>
    );

    return (
        <FlatList
            style={{ marginHorizontal: 20 }}
            data={apiResults}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    );
}