import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Favorite, RemoveFavorite } from '../../../models/favorites.interface';
import { selectFavorites } from '../../../store/favorites/favorites.selector';
import { selectLogin } from '../../../store/login/login.selector';
import { addFavorite, removeFavorite } from "../../../store/favorites/favorites.actions";
import { MaterialIcons } from '@expo/vector-icons';
import { FavoriteCharacter, FavoriteEpisode, FavoriteInterface } from './Favorite.interface';


const FavoriteElement: FC<FavoriteInterface> = ({ favorite, type }) => {
    const favoriteType = type as 'character' | 'episode';
    const loggedUser = useSelector(selectLogin);
    const dispatch = useDispatch();
    const unfavorite = () => {
        const unfavorite: RemoveFavorite = { username: loggedUser.username, favoriteId: favorite.id, type: favoriteType };
        dispatch(removeFavorite(unfavorite));
    }

    return (
        <View style={styles.box} >
            <View >
                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>{favorite.id}</Text>
            </View>
            <View >
                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>{favorite.name}</Text>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => unfavorite()}>
                    <MaterialIcons name="favorite" size={24} color="red" />
                </TouchableOpacity>
            </View>
        </View>

    )

}
const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        borderRadius: 15,
        borderColor: '#17aede',
        borderWidth: 2,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 20,
        minWidth:300,
        padding:10,
        width: '100%'
    },
});

export default FavoriteElement;
