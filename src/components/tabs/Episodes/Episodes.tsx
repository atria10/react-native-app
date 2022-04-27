import React, { useEffect, useState } from 'react'
import { FlatList,StyleSheet, SafeAreaView, View } from 'react-native'
import { Episode as EpisodeInterface, ResponseEpisodes } from '../../../models/episodes.interface';
import ScreenFC from '../../../models/ScreenFC'
import Episode from '../../Episode/Episode';

const Episodes: ScreenFC<'Episodes'> = ({ navigation }) => {
    const [episodes, setEpisodes] = useState<EpisodeInterface[]>([]);
    const getEpisodes = async () => {
        await fetch('https://rickandmortyapi.com/api/episode')
            .then(response => response.json())
            .then((data: ResponseEpisodes) => (setEpisodes(data.results)
            ))
    }
    const removeEpisode = (id1: number) => {
        const index = episodes.findIndex(({ id }) => id === id1);
        episodes.splice(index, 1);
        setEpisodes([...episodes]);
    }
    useEffect(() => {
        getEpisodes();
    }, [])
    return (
        <SafeAreaView style={[styles.container, { padding: 10 }]}>
          <FlatList
            data={episodes}
            renderItem={({ item }) =>
              <View>
                  <Episode name={item.name} id={item.id} air_date={item.air_date}
                    episode={item.episode} characters={item.characters} created={item.created} removeEpisode={removeEpisode}/>
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
      backgroundColor: '#fff',
      justifyContent: 'center',
      height: '100%',
      padding: 10,
      width: '100%'
    },
  });
export default Episodes