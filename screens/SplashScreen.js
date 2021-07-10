import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Image, Button} from 'react-native-elements';
import { useFonts } from 'expo-font';

export default function SplashScreen({navigation}) {

    let [fontsLoaded] = useFonts({
        'Jomhuria': require('../assets/fonts/Jomhuria-Regular.ttf')
      })

    function goToLibraryScreen() {
        navigation.reset({index: 0,
        routes: [{name: 'Ma Bibliothèque'}]})
    }
    if(!fontsLoaded) {
        return <Text>Loading...</Text>
    }else{
        return (
            <View style={styles.container}>
                <Image
                    source={require('../assets/img/splash.png')} style={styles.img}></Image>
                <Text style={styles.title}>Booksor</Text>
                <Text style={styles.subtitle}>Votre bibliothèque à portée de main</Text>
                <Button title="Continuer" buttonStyle={styles.button} titleStyle={styles.button} onPress={() => goToLibraryScreen()}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#22181C',
        
      },
    button: {
        backgroundColor: '#FE6D73',
        borderRadius: 20,
        padding: 10,
        paddingHorizontal: 20,
        color: '#FBFCFF'
    },
    title: {
        fontSize: 100,
        textAlign: 'center',
        color: '#FBFCFF',
        fontFamily: 'Jomhuria'

    },
    img: {
        width: 200,
        height: 200,
    },
    subtitle: {
        fontSize: 50,
        textAlign: 'center',
        color: '#FBFCFF',
        fontFamily: 'Jomhuria',
        marginHorizontal: 35,
        marginBottom: 20,

    }
})