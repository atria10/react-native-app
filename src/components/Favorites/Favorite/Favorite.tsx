import React, { FC, useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveFavorite } from '../../../models/favorites.interface';
import { selectLogin } from '../../../store/login/login.selector';
import { removeFavorite } from "../../../store/favorites/favorites.actions";
import { MaterialIcons } from '@expo/vector-icons';
import { FavoriteInterface } from './Favorite.interface';
import { ThemeContext } from '../../../navigation';


const FavoriteElement: FC<FavoriteInterface> = ({ favorite, type }) => {
    const { borderColor, color } = useContext(ThemeContext);
    const styles = StyleSheet.create({
        box: {
            alignItems: 'center',
            borderRadius: 15,
            borderColor: borderColor,
            borderWidth: 2,
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: 10,
            marginTop: 20,
            minWidth: 300,
            padding: 10,
            width: '80%'
        },
    });

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
                <Text style={[{ fontWeight: 'bold', color: color, fontSize: 15 }]}>{favorite.id}</Text>
            </View>
            <View >
                <Text style={{ fontWeight: 'bold', color: color, fontSize: 15 }}>{favorite.name}</Text>
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


export default FavoriteElement;
