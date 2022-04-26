import React, { FC, useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../store/login/login.actions';
import { selectUsers } from '../../../store/users/users.selector';
// import { selectFavorites } from '../../../store/favorites/favorites.selector'
import { User as UserInterface } from '../../Auth/Signup/Signup.interface';
import { AntDesign } from '@expo/vector-icons';
import { selectLogin } from '../../../store/login/login.selector';


//POI PENSA A CREARE IL REDUX PER I FAVORITES
//STILIZZA ANCHE LA PAGINA PERSONAL
//SISTEMA LA COSA DEI FORM
//FAI LO USE CONTEXT PER MODALITA' NOTTURNA O NORMALE

//PUI LASCIARE UN SOLO REDUCER PER I FAVORITE FORSE
const User: FC = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const loggedUsername = useSelector(selectLogin).username
    // const favorites = useSelector(selectFavorites);
    const [user, setUser] = useState<UserInterface>({} as UserInterface);

    useEffect(() => {
        const loggedUser = users.find(user1 => user1.username! === loggedUsername)
        setUser(loggedUser!);
    }, [user, users])
    // useEffect(() => {
    //     console.log("favChar", favorites);
    // }, [favorites])
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
            {/* <View style={styles.favoritesArea}>
                <TouchableOpacity style={styles.favorite}>
                    <Text style={styles.text}>Favorite Characters:</Text>
                    <Text style={styles.text}>
                        ({favorites.filter(favorite => favorite.type === 'character' && favorite.username === loggedUsername &&
                         favorite.status).length})</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.favorite}>
                    <Text style={styles.text}>Favorite Episodes:</Text>
                    <Text style={styles.text}>
                        ({favorites.filter(favorite => favorite.type === 'episode' && favorite.username === loggedUsername &&
                         favorite.status).length})</Text>
                </TouchableOpacity>
            </View> */}


        </View>
    )
}
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
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        height: '100%',
        width: '100%'
    },
    favorite: {
        alignItems: 'center',
        borderColor: '#17aede',
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
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
export default User;