import React, { useState, useEffect, useContext } from "react";
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
// import Home from "./HomeScreen";
import Search from "./SearchScreen";
import Library from "./LibraryScreen";
import ProfileLayout from "./Profile/ProfileLayout";
import HomeLayout from "./Home/HomeLayout";
import { EventRegister } from "react-native-event-listeners";
import theme from "../../theme/theme";
import themeContext from "../../theme/themeContext";
import { NavigationContainer } from "@react-navigation/native";


const Tab = createBottomTabNavigator();

const Layout = () => {
  const theme = useContext(themeContext);

  return (
    <SafeAreaView
      style={[styles.wrapper, { backgroundColor: theme.backgroundColor }]}
    >
    {/* <View style={[styles.wrapper, { backgroundColor: theme.backgroundColor }]}> */}
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Color.purple,
          tabBarInactiveTintColor: Color.black,
          tabBarStyle: {  backgroundColor: theme.backgroundColor, position:"absolute", bottom:-30},
          tabBarLabelPosition: "below-icon",
        
          headerStyle: {
            height: 0,
          },

        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeLayout}
          options={{
            title: "Khám phá",
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
            title: "Tìm kiếm",
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
            title: "Thư viện",
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
            title: "Cá nhân",
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
    // paddingBottom:30,
    marginBottom:30
  },
});

export default Layout;
