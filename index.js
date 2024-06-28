// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const getRandomLetter = () => letters.charAt(Math.floor(Math.random() * letters.length));

const App = () => {
    const [letter, setLetter] = React.useState(getRandomLetter());

    const handleNextLetter = () => {
        setLetter(getRandomLetter());
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Learn to Read!</Text>
            <View style={styles.letterContainer}>
                <Text style={styles.letter}>{letter}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleNextLetter}>
                <Text style={styles.buttonText}>Next Letter</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    letterContainer: {
        minHeight: 200,
        minWidth: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 10,
        marginBottom: 20,
    },
    letter: {
        fontSize: 100,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 24,
        color: '#fff',
    },
});

export default App;