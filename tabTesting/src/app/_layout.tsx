import { Tabs } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function RootLayout() {
    return(
        <React.Fragment>
            <StatusBar />
            <Tabs screenOptions={{tabBarActiveTintColor: "teal"}}>  
                <Tabs.Screen
                    name="(home)"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarLabel: "Index",
                        // tabBarShowLabel: false,
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="numeric-1-box-outline" size={size} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="second"
                    options={{
                        title: "Second",
                        headerShown: false,
                        popToTopOnBlur: true,
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="numeric-2-box-outline" size={size} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="third"
                    options={{
                        title: "Third",
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="numeric-3-box-outline" size={size} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="fourth"
                    options={{
                        tabBarBadge: 2,
                        tabBarBadgeStyle: {
                            backgroundColor: 'tomato',
                            color: 'whitea'
                        },
                        title: "Fourth",
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="numeric-4-box-outline" size={size} color={color} />
                        ),
                    }}
                />  
            </Tabs> 
        </React.Fragment>

    );
}