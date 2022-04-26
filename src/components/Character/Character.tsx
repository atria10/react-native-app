import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text, View, Image } from 'react-native';
import ScreenFC from '../../models/ScreenFC';
import { Character as CharacterInterface } from '../../models/characters.interface'

const Character: ScreenFC<'Character'> = ({ navigation, route }) => {
    const [character, setCharacter] = useState<CharacterInterface>();

    const getCharacter = async () => {
        await fetch(`https://rickandmortyapi.com/api/character/${route.params?.id}`)
            .then(response => response.json())
            .then((data: CharacterInterface) => setCharacter(data));
    }
    useEffect(() => {
        getCharacter();
    }, [])
    return (
        <SafeAreaView style={styles.box}>
            <Image
                style={styles.image}
                source={{ uri: character?.image, }}
            />
            <View style={styles.infos}>
                <View style={{height:'100%'}}>
                    <Text style={styles.text}>Name: </Text>
                    <Text style={styles.text}>Status: </Text>
                    <Text style={styles.text}>Species: </Text>
                    <Text style={styles.text}>Gender: </Text>
                    <Text style={styles.text}>Origin: </Text>
                    <Text style={styles.text}>Location: </Text>
                </View>
                <View>
                    <Text style={[styles.text, styles.text2,{width: '90%' }]}> {character?.name}</Text>
                    <Text style={[styles.text, styles.text2,
                    { color: character?.status === "Alive" ? 'green' : character?.status === "Dead" ? 'red' : 'black'}]}>
                        {character?.status}</Text>
                    <Text style={[styles.text, styles.text2]}> {character?.species}</Text>
                    <Text style={[styles.text, styles.text2]}> {character?.gender}</Text>
                    <Text style={[styles.text, styles.text2,{width: '90%' }]}
                    > {character?.origin.name}</Text>
                    <Text style={[styles.text, styles.text2,{width: '90%' }]}> {character?.location.name}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        textAlign:'center',
        width: '100%'
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 15,
        justifyContent: 'center',
        height: 20,
        width: '100%',
    },
    id: {
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#4c3838',
        justifyContent: 'center',
        height: 30,
        position: 'absolute',
        top: -10,
        width: 30
    },
    image: {
        borderRadius: 10,
        height: 200,
        marginTop: '5%',
        width: '90%'
    },
    infos: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '10%',
        width: '80%',
    },
    text: {
        fontSize: 20,
        padding: 5
    },
    text2: {
        fontWeight: 'bold',
    }
});

export default Character