import React, { FC, useContext } from "react";
import { RootStackParams } from "../models/rootStackParams.type";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Entypo, Ionicons } from '@expo/vector-icons';
import Home from "../components/tabs/Home/Home";
import Episodes from "../components/tabs/Episodes/Episodes";
import Personal from "../components/tabs/Personal/Personal";
import { Switch } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectThemes } from "../store/themes/themes.selector";
import { changeTheme } from "../store/themes/themes.actions";
import { ThemeContext } from ".";


const TabStack = createBottomTabNavigator<RootStackParams>();

const CharacterStack: FC = () => {

    const { backgroundColor, borderColor } = useContext(ThemeContext);
    const dispatch = useDispatch();
    const theme = useSelector(selectThemes);
    const toggleSwitch = () => {
        dispatch(changeTheme(!theme))
    };

    return (
        <TabStack.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: borderColor,
                    borderBottomColor: backgroundColor,
                    borderWidth: 0.3
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <TabStack.Screen name="Home" component={Home}
                options={{
                    title: "Home",
                    tabBarActiveTintColor: borderColor,
                    tabBarIcon: ({ focused }) => (
                        <Entypo name="home" size={24} color={focused ? borderColor : "gray"} />
                    )
                }} />
            <TabStack.Screen name="Episodes"
                component={Episodes}
                options={{
                    title: "Episodes",
                    tabBarActiveTintColor: borderColor,
                    tabBarIcon: ({ focused }) => (
                        <Feather name="settings" size={24} color={focused ? borderColor : "gray"} />
                    )
                }} />
            <TabStack.Screen name="Personal"
                component={Personal}
                options={{
                    headerRight: () =>
                        <Switch style={{ marginRight: 10, position: 'absolute', top: 30 }}
                            trackColor={{ false: '#f47a00', true: '#17aede' }}
                            onValueChange={toggleSwitch}
                            value={theme} />
                    ,
                    title: "Personal",
                    tabBarActiveTintColor: borderColor,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="person-circle" size={24} color={focused ? borderColor : "gray"} />
                    )
                }} />
        </TabStack.Navigator>
    )
}

export default CharacterStack;