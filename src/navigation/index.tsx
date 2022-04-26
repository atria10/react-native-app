import React, { FC } from 'react'
import { RootStackParams } from '../models/rootStackParams.type';
import { NavigationContainer } from '@react-navigation/native';
import CharacterStack from './CharacterStack';
import { createStackNavigator } from '@react-navigation/stack';
import Character from '../components/Character/Character';
import Episode from '../components/Episode/Episode';
import Signup from '../components/Auth/Signup/Signup';
import Login from '../components/Auth/Login/Login';

const RootStack = createStackNavigator<RootStackParams>();

const NavigationProvider: FC = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#17aede',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
                <RootStack.Screen
                    name="Tab"
                    component={CharacterStack}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen name="Character" component={Character}
                    options={({ route }) => ({ title: route.params?.name })}
                />
                <RootStack.Screen name="Episode" component={Episode} />
                <RootStack.Screen name="Signup" component={Signup} />
                <RootStack.Screen name="Login" component={Login} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationProvider;