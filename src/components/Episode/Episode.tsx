import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Episode as EpisodeInterface } from '../../models/episodes.interface'
import { selectLogin } from '../../store/login/login.selector';
import { MaterialIcons } from '@expo/vector-icons';
import { selectFavorites } from '../../store/favorites/favorites.selector';
import { Favorite, RemoveFavorite } from '../../models/favorites.interface';
import { addFavorite, removeFavorite } from '../../store/favorites/favorites.actions';

//OK SVILUPPA LA PARTE DEI FAVORITES CON IL REDUCER
//POI USA LO USE CONTEXT PER IL DARK THEME
const Episode: FC<EpisodeInterface> = ({ id, name, air_date, episode, characters, created, removeEpisode }) => {
    const loggedUser = useSelector(selectLogin);
    const favorites = useSelector(selectFavorites);
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState<boolean>(
        favorites.some(favorite => favorite.favorite.id === id && favorite.username === loggedUser.username && favorite.type === 'episode'))
    const newFavorite = () => {
        const favorite: Favorite = {
            username: loggedUser.username,
            favorite: { id, name, air_date, episode, characters, created, }, type: 'episode'
        };
        dispatch(addFavorite(favorite));
        setIsFavorite(true);
    }
    const unfavorite = () => {
        const unfavorite: RemoveFavorite = { username: loggedUser.username, favoriteId:id, type: 'episode' };
        dispatch(removeFavorite(unfavorite));
        setIsFavorite(false);
    }
    return (
        <View style={styles.box} >
            <View style={styles.id}>
                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 10 }}>{id}</Text>
            </View>
            <View>
                <Text style={styles.text}>NAME:</Text>
                <Text style={styles.text}>Release Date:</Text>
                <Text style={styles.text}>Characters's number:</Text>
                <Text style={styles.text}>Episode:</Text>
            </View>
            <View>
                <Text style={{ width: '95%' }}>{name?.length > 15 ? name.substring(0, 15) : name}</Text>
                <Text>{air_date}</Text>
                <Text style={{ width: '95%' }}>{characters?.length}</Text>
                <Text>{episode}</Text>
            </View>

            {loggedUser.isLogged &&
                <>
                    <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
                        <TouchableOpacity style={styles.button}
                            onPress={() => (removeEpisode(id), unfavorite())}>
                            <Text style={{ fontWeight: 'bold', color: '#fff', textAlign: 'center', paddingHorizontal: 5 }}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', bottom: 10, left: 30 }}>
                        {isFavorite &&
                         <TouchableOpacity
                             onPress={() => unfavorite()}>
                             <MaterialIcons name="favorite" size={24} color="red" />
                         </TouchableOpacity>
                     }
                        {!isFavorite &&
                            <TouchableOpacity
                                onPress={() => newFavorite()}>
                                <MaterialIcons name="favorite" size={24} color="gray" />
                            </TouchableOpacity>
                        }
                    </View>
                </>
            }
        </View>

    )

}
const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#17aede',
        borderRadius: 15,
        borderWidth:2,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        height: 150,
        marginBottom: 10,
        marginTop: 10,
        minWidth: 300,
        width: '100%'
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 15,
        justifyContent: 'center',
        height: 30,
        padding: 1,
        width: '100%',
    },
    id: {
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: 'orange',
        justifyContent: 'center',
        height: 40,
        position: 'absolute',
        right: '42%',
        top: -10,
        width: 40
    },
    image: {
        borderRadius: 100,
        height: 60,
        width: 60
    },
    text: {
        fontWeight: 'bold',
    }
});

export default Episode;