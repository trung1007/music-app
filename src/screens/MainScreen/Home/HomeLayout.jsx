import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home1 from "./HomeScreen";

const Stack = createStackNavigator();

const HomeLayout = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home1}
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

export default HomeLayout;
