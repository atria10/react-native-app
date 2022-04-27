import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, SafeAreaView,StyleSheet,Text,View } from 'react-native'
import { useSelector } from 'react-redux';
import ScreenFC from '../../models/ScreenFC'
import { selectFavorites } from '../../store/favorites/favorites.selector';
import Card from '../Card/Card';

const Favorites: ScreenFC<'Favorites'> = ({ route }) => {
    //SVILUPPA QUESTA PAGINATION
    //SVILUPPA LO USE CONTEXT
    //AGGIUSTA I FORM
    //HAI FINITO
    const favorites=useSelector(selectFavorites).filter(item=>item.type===route.params?.id);
    return (
        <Text>{JSON.stringify(favorites)}</Text>
        // <SafeAreaView style={[styles.container, { padding: 10 }]}>
        //   <FlatList
        //     data={favorites}
        //     renderItem={({ item }) =>
        //       <View>
        //         <Pressable onPress={() => navigation.navigate('Character', { id: String(item.id), name: item.name })}>
        //           <Card name={item.name} image={item.image} species={item.species}
        //             location={item.location?.name} status={item.status} id={item.id} removeCharacter={removeCharacter} />
        //         </Pressable>
        //       </View>
        //     }
        //     keyExtractor={item => String(item.id)}
        //   />
        // </SafeAreaView>
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


export default Favorites;