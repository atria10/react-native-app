import { createStackNavigator } from "@react-navigation/stack";
import React, { createContext, FC, useContext, useState } from "react";
import { RootStackParams } from "../models/rootStackParams.type";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Entypo, Ionicons } from '@expo/vector-icons';
import Home from "../components/tabs/Home/Home";
import Episodes from "../components/tabs/Episodes/Episodes";
import Personal from "../components/tabs/Personal/Personal";
import { Switch } from "react-native";
import { ThemeContext } from "../../App";


const TabStack = createBottomTabNavigator<RootStackParams>();

const CharacterStack: FC = () => {
    
    const {backgroundColor,borderColor,color}=useContext(ThemeContext);
    


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