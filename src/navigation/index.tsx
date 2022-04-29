import React, { createContext, FC } from 'react'
import { RootStackParams } from '../models/rootStackParams.type';
import { NavigationContainer } from '@react-navigation/native';
import CharacterStack from './CharacterStack';
import { createStackNavigator } from '@react-navigation/stack';
import Character from '../components/Character/Character';
import Episode from '../components/Episode/Episode';
import Signup from '../components/Auth/Signup/Signup';
import Login from '../components/Auth/Login/Login';
import Favorites from '../components/Favorites/Favorites';
import { useSelector } from 'react-redux';
import { selectThemes } from '../store/themes/themes.selector';

export const themes = {
    light: {
        backgroundColor: '#fff',
        borderColor: '#17aede',
        color: '#000'
    },
    dark: {
        backgroundColor: '#000',
        borderColor: '#f47a00',
        color: '#fff'
    }
}
export const ThemeContext = createContext(themes.light);

const RootStack = createStackNavigator<RootStackParams>();
const NavigationProvider: FC = () => {
    const theme = useSelector(selectThemes);
    return (
        <ThemeContext.Provider value={themes[theme ? 'dark' : 'light']}>
            <NavigationContainer>
                <RootStack.Navigator screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: theme ? themes.dark.borderColor : themes.light.borderColor,
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
                    <RootStack.Screen name="Login" component={Login}
                    />
                    <RootStack.Screen name="Favorites" component={Favorites}
                        options={({ route }) => ({ title: 'Favorite ' + route.params?.id + 's' })} />
                </RootStack.Navigator>
            </NavigationContainer>
        </ThemeContext.Provider>
    )
}

export default NavigationProvider;