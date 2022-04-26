import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import { RootStackParams } from "../models/rootStackParams.type";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Entypo, Ionicons } from '@expo/vector-icons';
import Home from "../components/tabs/Home/Home";
import Episodes from "../components/tabs/Episodes/Episodes";
import Personal from "../components/tabs/Personal/Personal";

const TabStack = createBottomTabNavigator<RootStackParams>();

const CharacterStack: FC = () => {
    return (
        <TabStack.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#17aede',
                    borderBottomColor: '#fff',
                    borderWidth: 0.3
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <TabStack.Screen name="Home" component={Home}
                options={{
                    title: "Home", tabBarIcon: ({ focused }) => (
                        <Entypo name="home" size={24} color={focused ? "#17aede" : "gray"} />
                    )
                }} />
            <TabStack.Screen name="Episodes"
                component={Episodes}
                options={{
                    title: "Episodes", tabBarIcon: ({ focused }) => (
                        <Feather name="settings" size={24} color={focused ? "#17aede" : "gray"} />
                    )
                }} />
            <TabStack.Screen name="Personal"
                component={Personal}
                options={{
                    title: "Personal", tabBarIcon: ({ focused }) => (
                        <Ionicons name="person-circle" size={24} color={focused ? "#17aede" : "gray"} />
                    )
                }} />
        </TabStack.Navigator>
    )
}

export default CharacterStack;