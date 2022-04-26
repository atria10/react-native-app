import React, { FC, useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { selectLogin } from '../../store/login/login.selector'
import { Props } from './Card.interface'




const Card: FC<Props> = ({ id, name, species, location, status, image, removeCharacter }) => {
    const loggedUser = useSelector(selectLogin);
   
    return (
        <View style={styles.box} >
            <View style={styles.id}>
                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 10 }}>{id}</Text>
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
                <Text style={{ width: '95%' }}>{name?.length > 15 ? name.substring(0, 15) : name}</Text>
                <Text>{species}</Text>
                <Text numberOfLines={1} ellipsizeMode={'tail'}
                    style={{ width: '95%' }}>{location?.length > 15 ? location.substring(0, 15) : location}</Text>
            </View>
            <View style={{ position: 'absolute', bottom: 10, right: 100 }}>
                <Text style={{ fontWeight: 'bold', color: status === 'Alive' ? 'green' : 'red' }}>{status}</Text>
            </View>
            {loggedUser.isLogged &&
                    <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
                        <TouchableOpacity style={styles.button}
                            onPress={() => removeCharacter(id)}>
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
    }
});

export default Card;
