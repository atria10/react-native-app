import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, SafeAreaView,StyleSheet,Text,View } from 'react-native'
import { useSelector } from 'react-redux';
import ScreenFC from '../../models/ScreenFC'
import { selectFavorites } from '../../store/favorites/favorites.selector';
import Card from '../Card/Card';
import Favorite from './Favorite/Favorite';

const Favorites: ScreenFC<'Favorites'> = ({ route }) => {
    //SVILUPPA QUESTA PAGINATION
    //SVILUPPA LO USE CONTEXT
    //AGGIUSTA I FORM
    //HAI FINITO
    const favorites=useSelector(selectFavorites).filter(item=>item.type===route.params?.id);
    return (

        <SafeAreaView style={[styles.container, { padding: 10 }]}>
          {favorites.length>0?
          <FlatList
            data={favorites}
            renderItem={({ item }) =>
              <View>
                <Pressable>
                  <Favorite favorite={item.favorite} type={route.params?.id}/>
                </Pressable>
              </View>
            }
            keyExtractor={item => String(item.favorite.id)}
          />:
          <View>
            <Text style={{color:'black', fontSize: 20, fontWeight: 'bold'}}>No favorite yet</Text>
            </View>
        }
        </SafeAreaView>
      )
    }
    const styles = StyleSheet.create({
      container: {
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        height: '100%',
        padding: 10,
        width: '100%'
      },
    });


export default Favorites;