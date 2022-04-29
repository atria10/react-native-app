import React, { useContext } from 'react'
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import ScreenFC from '../../models/ScreenFC'
import { ThemeContext } from '../../navigation';
import { selectFavorites } from '../../store/favorites/favorites.selector';
import Favorite from './Favorite/Favorite';

const Favorites: ScreenFC<'Favorites'> = ({ route }) => {
  const { backgroundColor, color } = useContext(ThemeContext);
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: backgroundColor,
      justifyContent: 'center',
      height: '100%',
      padding: 10,
      width: '100%'
    },
  });

  const favorites = useSelector(selectFavorites).filter(item => item.type === route.params?.id);
  return (

    <SafeAreaView style={[styles.container, { padding: 10 }]}>
      {favorites.length > 0 ?
        <FlatList
          data={favorites}
          renderItem={({ item }) =>
            <View>
              <Pressable>
                <Favorite favorite={item.favorite} type={route.params?.id} />
              </Pressable>
            </View>
          }
          keyExtractor={item => String(item.favorite.id)}
        /> :
        <View>
          <Text style={{ color: color, fontSize: 20, fontWeight: 'bold' }}>No favorite yet</Text>
        </View>
      }
    </SafeAreaView>
  )
}



export default Favorites;