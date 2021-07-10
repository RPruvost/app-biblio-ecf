import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TextInput} from 'react-native';
import axios from 'axios';
import {ListItem, Button} from 'react-native-elements';
import {useFonts} from 'expo-font';

export default function LibraryScreen({navigation}) {
    const [searchedBooks, setSearchedBooks] = useState([]);
    const [content, setContent] = useState('');

    let [fontsLoaded] = useFonts(
        {'Jomhuria': require('../assets/fonts/Jomhuria-Regular.ttf')}
    )

    const handleSubmit = () => {
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${content}&key=AIzaSyA2gGe1cGR5UTQQ4YZVZOBmUARo9B4TJx0`
            )
            .then(res => {
                setSearchedBooks(res.data.items);
            })
    }
    function goToDetails(item) {
        navigation.navigate('Détails du Livre', {
                description:item.volumeInfo.description,
                titre: item.volumeInfo.title,
                author: item.volumeInfo.authors[0]
        })
    }

    if (!fontsLoaded) {
        return <Text>Loading...</Text>
    } else {
        return (
            <View style={styles.background}>
                <TextInput
                    style={styles.searchbar}
                    value={content}
                    onChangeText={(text) => {
                        setContent(text)
                    }}
                    placeholder="Rechercher.."/>
                <Button buttonStyle={styles.button} title='Rechercher' onPress={handleSubmit}/>
                <FlatList
                    data={searchedBooks}
                    renderItem={({item}) => (
                        <View>
                            <ListItem.Swipeable
                                containerStyle= {styles.background}
                                leftContent={<Button
                                title = "Détails"
                                icon = {{ name: 'info', color: 'white' }}
                                buttonStyle = {{ minHeight: '100%', backgroundColor: '#FE6D73' }}
                                onPress={() => goToDetails(item)}
                                />}
                                rightContent={<Button
                                title = "Delete"
                                icon = {{ name: 'delete', color: 'white' }}
                                buttonStyle = {{ minHeight: '100%', backgroundColor: '#FE6D73' }}
                                />}>
                                <ListItem.Content>
                                    <ListItem.Title style={styles.list}>{item.volumeInfo.title}</ListItem.Title>
                                </ListItem.Content>
                            </ListItem.Swipeable>
                        </View>
                    )}
                    keyExtractor={item => item
                        .id
                        .toString()}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    searchbar: {
        padding: 5,
        borderWidth: 2,
        width: 300,
        textAlign: 'center',
        marginHorizontal: 50,
        marginTop: 10,
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 20,
    },
    button: {
        backgroundColor: '#FE6D73',
        width: 150,
        alignItems: 'center',
        marginHorizontal: 125,
        marginVertical: 15
    },
    background: {
        backgroundColor: '#22181C',
        color: 'white',
    },
    list:{
        height: 32,
        color: 'white'
    }
})