import React, { useState, useEffect,useContext } from "react";
import {
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
} from "react-native";
import { BlurView } from "expo-blur";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Color } from "../../../GlobalStyle";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Home from "./HomeScreen";
import Search from "./SearchScreen";
import Library from "./LibraryScreen";
import ProfileLayout from "./Profile/ProfileLayout";
import { EventRegister } from "react-native-event-listeners";
import theme from "../../theme/theme";
import themeContext from "../../theme/themeContext";
import MusicScreen from "../MusicScreen";
import OnlineMusicScreen from "./OnlineMusicScreen";

const Tab = createBottomTabNavigator();

const Layout = () => {

  const theme=useContext(themeContext)
  
  return (
    
      <SafeAreaView style={[styles.wrapper,{backgroundColor:theme.backgroundColor}]}>
        <Tab.Navigator
          //  activeBackgroundColor="green"
          screenOptions={{
            // tabBarActiveBackgroundColor:'white',
            // tabBarBackground:'white'
            tabBarActiveTintColor: Color.purple,
            tabBarInactiveTintColor: Color.black,
            tabBarStyle: { position: "absolute" },
            tabBarLabelPosition: "below-icon",
            tabBarBackground: () => {
              <BlurView
                tint="light"
                intensity={100}
                style={StyleSheet.absoluteFill}
              />;
            },
            headerStyle: {
              height: 0,
            },
          }}
        >
          <Tab.Screen
            name="Online Music"
            component={OnlineMusicScreen}
            options={{
              title: "Music",
              tabBarIcon: ({ color }) => (
                <Entypo name="music" size={24} color={color} />
              ),
              // tabBarActiveTintColor: Color.purple,
            }}
            />
          <Tab.Screen
            name="Local Music"
            component={MusicScreen}
            options={{
              title: "Music",
              tabBarIcon: ({ color }) => (
                <Entypo name="music" size={24} color={color} />
              ),
              // tabBarActiveTintColor: Color.purple,
            }}
          />
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home",
              tabBarIcon: ({ color }) => (
                <Entypo name="home" size={24} color={color} />
              ),
              // tabBarActiveTintColor: Color.purple,
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              title: "Search",
              tabBarIcon: ({ color }) => (
                <FontAwesome name="search" size={24} color={color} />
              ),
              // tabBarActiveTintColor: Color.violet,
            }}
          />
          <Tab.Screen
            name="Library"
            component={Library}
            options={{
              title: "Library",
              tabBarIcon: ({ color }) => (
                <Ionicons name="library" size={24} color={color} />
              ),
              // tabBarActiveTintColor: Color.purple,
            }}
          />
          <Tab.Screen
            name="ProfileLayout"
            component={ProfileLayout}
            options={{
              title: "Profile",
              tabBarIcon: ({ color }) => (
                <FontAwesome name="user" size={24} color={color} />
              ),
              // tabBarActiveTintColor: Color.purple,
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#CCC6CD",
  },
});

export default Layout;
