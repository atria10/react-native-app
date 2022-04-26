import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, SafeAreaView,StyleSheet,View } from 'react-native'
import { Character, ResponseCharacters } from '../../../models/characters.interface';
import ScreenFC from '../../../models/ScreenFC'
import Card from '../../Card/Card';

const Home: ScreenFC<'Home'> = ({ navigation, route }) => {
    const [characters, setCharacters] = useState<Character[]>([]);
  
    const getCharacters = async () => {
      await fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then((data: ResponseCharacters) => (setCharacters(data.results))
        )
    }
    const removeCharacter = (id1: number) => {
      const index = characters.findIndex(({ id }) => id === id1);
      characters.splice(index, 1);
      setCharacters([...characters]);
    }
    
    useEffect(() => {
      getCharacters();
    }, []);
    return (
        <SafeAreaView style={[styles.container, { padding: 10 }]}>
          <FlatList
            data={characters}
            renderItem={({ item }) =>
              <View>
                <Pressable onPress={() => navigation.navigate('Character', { id: String(item.id), name: item.name })}>
                  <Card name={item.name} image={item.image} species={item.species}
                    location={item.location?.name} status={item.status} id={item.id} removeCharacter={removeCharacter} />
                </Pressable>
              </View>
            }
            keyExtractor={item => String(item.id)}
          />
        </SafeAreaView>
      )
    }
    const styles = StyleSheet.create({
      container: {
        alignItems: 'center',
        backgroundColor: '#17aede',
        justifyContent: 'center',
        height: '100%',
        padding: 10,
        width: '100%'
      },
    });


export default Home