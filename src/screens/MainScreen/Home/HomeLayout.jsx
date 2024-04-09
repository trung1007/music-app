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
import HomeScreen from "./HomeScreen";

const Stack = createStackNavigator();

const HomeLayout = () => {
  return (
    <View style={{flex:1}}>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "",
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default HomeLayout;
