import React, {useState, useEffect}  from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BookScreen({route}) {

    

    return (
        <View style={styles.background}>
            <Text style={styles.title}>{route.params.titre}</Text>
            <Text style={styles.desc}>{route.params.description}</Text>
            <Text style={styles.author}>Écrit par: {route.params.author}</Text>
        </View>
    )
}
const styles = StyleSheet.create({

    title:{
        textAlign: 'center',
        fontSize: 30,
        marginVertical: 20,
        color: 'white',
        marginTop: 75
    },
    desc:{
        marginVertical: 20,
        color: 'white',
        textAlign: 'justify',
        marginHorizontal: 10
    },
    author:{
        color:'white',
        textAlign:'center'
    },
    background: {
        backgroundColor: '#22181C',
        height: 750
        
    }





})
