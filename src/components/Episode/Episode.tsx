import React, { FC } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { Episode as EpisodeInterface } from '../../models/episodes.interface'
import { selectLogin } from '../../store/login/login.selector';
import { MaterialIcons } from '@expo/vector-icons';

//OK SVILUPPA LA PARTE DEI FAVORITES CON IL REDUCER
//POI USA LO USE CONTEXT PER IL DARK THEME
const Episode: FC<EpisodeInterface> = ({ id, name, air_date, episode, characters, created, removeEpisode }) => {
    const loggedUser = useSelector(selectLogin);
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
                    <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
                        <TouchableOpacity style={styles.button}
                            onPress={() => removeEpisode(id)/*(dispatch(remove(id)), unfavorite())*/
                        }>
                            <Text style={{ fontWeight: 'bold', color: '#fff', textAlign: 'center', paddingHorizontal: 5 }}>Delete</Text>
                        </TouchableOpacity>
                    </View>
            }
        </View>

    )

}
const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
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

export default Episode