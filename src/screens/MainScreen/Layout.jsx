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
import Search from "./SearchScreen";
import Library from "./LibraryScreen";
import ProfileLayout from "./Profile/ProfileLayout";
import HomeLayout from "./Home/HomeLayout";
import { EventRegister } from "react-native-event-listeners";
import theme from "../../theme/theme";
import themeContext from "../../theme/themeContext";
import MusicScreen from "../MusicScreen";
import OnlineMusicScreen from "./OnlineMusicScreen";
import { NavigationContainer } from "@react-navigation/native";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useRoute } from "@react-navigation/native";
import SongPlayer from "../../components/SongPlayer";
import { SongProvider } from "../../context/SongContext";
import { useSongContext } from "../../context/SongContext";
import { AuthProvider } from "../../context/AuthContext"; 
import { useAuthContext } from "../../context/AuthContext";

const Tab = createBottomTabNavigator();

const Layout = () => {
  const theme = useContext(themeContext);
  const user = AuthProvider.user

  const [song, setSong] = useState({})

  const select  = SongProvider.select

  const selectTest = select !== undefined ? select : false
  const [selectMusic, setSelectMusic] = useState(false)

  useEffect(()=>{
    // if(select){
    //   setSelectMusic(select)
    // }
    // console.log("dachon"+ select);
    // console.log(selectMusic);
    // if(selectMusic){
    //   setSong(SongProvider.song)
    // }
    if(select){
      setSong(SongProvider.song)
    }

  }, [select])

  return (
    <SafeAreaView
      style={[styles.wrapper, { backgroundColor: theme.backgroundColor }]}
    >
      <SongProvider>
        {/* <View style={[styles.wrapper, { backgroundColor: theme.backgroundColor }]}> */}
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: Color.purple,
            tabBarInactiveTintColor: theme.iconColor,
            tabBarStyle: {
              backgroundColor: theme.tabBarColor,
              position: "absolute",
              bottom: -30,
            },
            tabBarLabelPosition: "below-icon",

            headerStyle: {
              height: 0,
            },
          }}
          initialRouteName="Search"
        >
          <Tab.Screen
            name="Online Music"
            component={OnlineMusicScreen}
            options={{
              title: "Music",
              tabBarIcon: ({ color }) => (
                <Entypo name="music" size={24} color={color} />
              ),
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
            }}
          />
          <Tab.Screen
            name="Home"
            component={HomeLayout}
            options={{
              title: "Khám phá",
              tabBarIcon: ({ color }) => (
                <Entypo name="home" size={24} color={color} />
              ),
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
            }}
          />
        </Tab.Navigator>
        
        {select && <SongPlayer  />}

      </SongProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#CCC6CD",
    // paddingBottom:30,
    marginBottom: 30,
  },
});

export default Layout;
