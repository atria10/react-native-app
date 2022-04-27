import React, { useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import ScreenFC from '../../../models/ScreenFC'
import { selectLogin } from '../../../store/login/login.selector'
import User from '../../Auth/User/User'

//SVILUPPA LA PERSONAL PAGE

const Personal: ScreenFC<'Personal'> = ({ navigation, route }) => {

  const isLogged = useSelector(selectLogin);
  useEffect(() => {
  }, [isLogged])
  const goToFavorites=(type:'character'|'episode')=>navigation.navigate('Favorites',{id:type})
  return (

    <SafeAreaView style={styles.container}>
      {isLogged.isLogged ?
        <User navigation={goToFavorites} /> 
        :
        <View style={styles.buttonView}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>To see this page you need to be logged in</Text>
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
              <Text style={{
                color: 'white', fontSize: 20, fontWeight: 'bold', padding: 5, textAlign: 'center',
              }}>Go To Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
              <Text style={{
                color: 'white', fontSize: 20, fontWeight: 'bold', padding: 5, textAlign: 'center',
              }}>Go to Signup</Text>
            </TouchableOpacity>
          </View>
        </View>}


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#17aede',
    borderRadius: 20,
    marginTop: 10,
    width: '100%',
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
    padding: 10,
    width: '100%'
  },
  image: {
    borderRadius: 100,
    height: 50,
    width: 50
  },
  infos: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  }
});

export default Personal;
