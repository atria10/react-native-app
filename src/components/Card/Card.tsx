import React, { FC, useContext, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Favorite, RemoveFavorite } from '../../models/favorites.interface';
import { selectFavorites } from '../../store/favorites/favorites.selector';
import { selectLogin } from '../../store/login/login.selector';
import { Props } from './Card.interface';
import { addFavorite, removeFavorite } from "../../store/favorites/favorites.actions";
import { MaterialIcons } from '@expo/vector-icons';
import { ThemeContext } from '../../navigation';




const Card: FC<Props> = ({ id, name, species, location, status, image, removeCharacter }) => {
    const { borderColor, color } = useContext(ThemeContext);
    const styles = StyleSheet.create({
        box: {
            alignItems: 'center',
            borderColor: borderColor,
            borderRadius: 15,
            borderWidth: 2,
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            height: 150,
            marginBottom: 10,
            marginTop: 20,
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
            backgroundColor: '#4c3838',
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
            color: color
        }
    });
    const loggedUser = useSelector(selectLogin);
    const favorites = useSelector(selectFavorites);
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState<boolean>(
        favorites.some(favorite => favorite.favorite.id === id && favorite.username === loggedUser.username && favorite.type === 'character'))
    const newFavorite = () => {
        const favorite: Favorite = {
            username: loggedUser.username,
            favorite: { id, name, species, location, status, image }, type: 'character'
        };
        dispatch(addFavorite(favorite));
        setIsFavorite(true);
    }
    const unfavorite = () => {
        const unfavorite: RemoveFavorite = { username: loggedUser.username, favoriteId: id, type: 'character' };
        dispatch(removeFavorite(unfavorite));
        setIsFavorite(false);
    }

    return (
        <View style={styles.box} >
            <View style={styles.id}>
                <Text style={[styles.text, { fontSize: 10, color: '#fff' }]}>{id}</Text>
            </View>
            <View>
                <Image
                    style={styles.image}
                    source={{ uri: image, }}
                />
            </View>
            <View>
                <Text style={styles.text}>NAME:</Text>
                <Text style={styles.text}>Specie:</Text>
                <Text style={styles.text}>Location:</Text>
            </View>
            <View>
                <Text style={[styles.text, { width: '95%' }]}>{name?.length > 15 ? name.substring(0, 15) : name}</Text>
                <Text style={[styles.text, { width: '95%' }]}>{species}</Text>
                <Text numberOfLines={1} ellipsizeMode={'tail'}
                    style={[styles.text, { width: '95%' }]}>{location?.length > 15 ? location.substring(0, 15) : location}</Text>
            </View>
            <View style={{ position: 'absolute', bottom: 10, right: 100 }}>
                <Text style={[styles.text, { color: status === 'Alive' ? 'green' : 'red' }]}>{status}</Text>
            </View>
            {loggedUser.isLogged &&
                <>
                    <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
                        <TouchableOpacity style={styles.button}
                            onPress={() => (removeCharacter(id), unfavorite())}>
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


export default Card;
