import React, { useState } from "react";
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

const Stack = createStackNavigator();

const ProfileLayout = () => {
  return (
    <SafeAreaView style={{flex:'1'}}>
      <Stack.Navigator initialRouteName="Setting">
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
            // headerLeft: null,
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default ProfileLayout;
