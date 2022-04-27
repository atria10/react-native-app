import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { ThemeContext } from '../../../../App'
import ScreenFC from '../../../models/ScreenFC'
import { selectLogin } from '../../../store/login/login.selector'
import User from '../../Auth/User/User'


const Personal: ScreenFC<'Personal'> = ({ navigation, route }) => {
  const {backgroundColor,borderColor,color}=useContext(ThemeContext);
  
const styles = StyleSheet.create({
  button: {
    backgroundColor: borderColor,
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
    backgroundColor: backgroundColor,
    justifyContent: 'flex-start',
    height: '100%',
    padding: 10,
    width: '100%'
  },
});

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
          <Text style={{color:color, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>To see this page you need to be logged in</Text>
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
              <Text style={{
                color: color, fontSize: 20, fontWeight: 'bold', padding: 5, textAlign: 'center',
              }}>Go To Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
              <Text style={{
                color: color, fontSize: 20, fontWeight: 'bold', padding: 5, textAlign: 'center',
              }}>Go to Signup</Text>
            </TouchableOpacity>
          </View>
        </View>}


    </SafeAreaView>
  )
}


export default Personal;
