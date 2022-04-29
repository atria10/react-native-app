import React, { FC, useContext, useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../store/login/login.actions';
import { selectUsers } from '../../../store/users/users.selector';
import { User as UserInterface } from '../../Auth/Signup/Signup.interface';
import { AntDesign } from '@expo/vector-icons';
import { selectLogin } from '../../../store/login/login.selector';
import { selectFavorites } from '../../../store/favorites/favorites.selector';
import { Props } from './User.interface';
import { ThemeContext } from '../../../navigation';

const User: FC<Props> = ({ navigation }) => {
    const { backgroundColor, borderColor, color } = useContext(ThemeContext);
    const styles = StyleSheet.create({
        logout: {
            alignItems: 'center',
            backgroundColor: 'red',
            borderRadius: 100,
            justifyContent: 'center',
            height: 30,
            width: 30
        },
        buttonView: {
            alignItems: 'center',
            justifyContent: 'center',
            width: '80%',
            height: '60%',
        },
        container: {
            alignItems: 'center',
            backgroundColor: backgroundColor,
            justifyContent: 'flex-start',
            height: '100%',
            width: '100%'
        },
        favorite: {
            alignItems: 'center',
            borderColor: borderColor,
            borderRadius: 20,
            borderWidth: 2,
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: '10%',
            padding: 10,
            width: '100%',
        },
        favoritesArea: {
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10%',
            width: '100%'
        },
        image: {
            borderRadius: 100,
            height: 30,
            width: 30
        },
        infos: {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
        },
        text: {
            color: color,
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center'
        }
    });

    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const favorites = useSelector(selectFavorites);
    const loggedUsername = useSelector(selectLogin).username
    const [user, setUser] = useState<UserInterface>({} as UserInterface);

    useEffect(() => {
        const loggedUser = users.find(user1 => user1.username! === loggedUsername)
        setUser(loggedUser!);
    }, [user, users])
    useEffect(() => {
        console.log('favorites', favorites)
    }, [favorites])
    return (
        <View style={styles.container}>
            <View style={styles.infos}>
                <Image
                    style={styles.image}
                    source={{ uri: `https://countryflagsapi.com/png/${user?.country}` }}
                />
                <View>
                    <Text style={styles.text}>Hello</Text>
                    <Text style={styles.text}>{user?.username}</Text>
                </View>
                <View style={styles.logout}>
                    <TouchableOpacity onPress={() => dispatch(logout())}>
                        <AntDesign name="logout" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.favoritesArea}>
                <TouchableOpacity style={styles.favorite} onPress={() => navigation('character')} >
                    <Text style={styles.text}>Favorite Characters:</Text>
                    <Text style={styles.text}>
                        ({favorites.filter(favorite => favorite.type === 'character' && favorite.username === loggedUsername).length})
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.favorite} onPress={() => navigation('episode')}>
                    <Text style={styles.text}>Favorite Episodes:</Text>
                    <Text style={styles.text}>
                        ({favorites.filter(favorite => favorite.type === 'episode' && favorite.username === loggedUsername).length})
                    </Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default User;