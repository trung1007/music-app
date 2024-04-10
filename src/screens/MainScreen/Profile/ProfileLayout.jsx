import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import Profile from "./ProfileScreen";
import Setting from "./SettingScreen";
import themeContext from "../../../theme/themeContext";
import { useRoute } from "@react-navigation/native";


const Stack = createStackNavigator();

const ProfileLayout = () => {

  const theme=useContext(themeContext)
  // const route=useRoute()
 

  return (
    <SafeAreaView style={[{flex:1, backgroundColor:theme.backgroundColor}]}>
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "",
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{
            title: "",
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default ProfileLayout;
