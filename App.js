// import { StatusBar } from "expo-status-bar";
import React, { useState, useContext,useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import Getting1 from "./src/screens/GettingScreen/Getting1";
import LoginScreen1 from "./src/screens/GettingScreen/LoginScreen1";
import LoginScreen2 from "./src/screens/GettingScreen/LoginScreen2";
import RegisterScreen from "./src/screens/GettingScreen/RegisterScreen";
import Layout from "./src/screens/MainScreen/Layout";
import themeContext from "./src/theme/themeContext";
import theme from "./src/theme/theme";
import { EventRegister } from "react-native-event-listeners";


const Stack = createStackNavigator();

const STYLES = ["dark-content", "light-content"];
const TRANSITIONS = ["fade", "slide", "none"];

export default function App() {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0]
  );

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const listener = EventRegister.addEventListener("ChangeTheme", (data) => {
      setDarkMode(data);
      console.log(data)
      changeStatusBarStyle()
    });
    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, [darkMode]);

  return (
    <themeContext.Provider value={darkMode===true ? theme.dark: theme.light}>
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          barStyle={statusBarStyle}
          showHideTransition={statusBarTransition}
          hidden={hidden}
        />
        <Stack.Navigator>
          <Stack.Screen
            name="Getting1"
            component={Getting1}
            options={{
              title: "",
              headerStyle: {
                height: 0,
              },
              headerLeft: null,
            }}
          />
          <Stack.Screen
            name="Login1"
            component={LoginScreen1}
            options={{
              title: "",
              headerStyle: {
                height: 0,
              },
              headerLeft: null,
            }}
          />
          <Stack.Screen
            name="Login2"
            component={LoginScreen2}
            options={{
              title: "",
              headerStyle: {
                height: 0,
              },
              headerLeft: null,
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              title: "",
              headerStyle: {
                height: 0,
              },
              headerLeft: null,
            }}
          />
          <Stack.Screen
            name="Layout"
            component={Layout}
            options={{
              title: "",
              headerStyle: {
                height: 0,
              },
              headerLeft: null,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
