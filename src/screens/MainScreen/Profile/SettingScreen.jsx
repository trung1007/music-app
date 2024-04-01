import React, { useState, useContext } from "react";
import {
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  Switch,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../../../theme/themeContext";
// import theme from "../../../theme/theme";

const Stack = createStackNavigator();

const Setting = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [darkMode, setDarkMode] = useState(false);
  const theme = useContext(themeContext);

  return (
    <SafeAreaView
      style={[{ flex: "1", justifyContent: "center", alignItems: "center" },{backgroundColor:theme.backgroundColor}]}
    >
      
        <Text style={[{color:theme.color}]}>
          setting
        </Text>
        <Switch
          // trackColor={{ false: "#767577", true: "#81b0ff" }}
          // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          // ios_backgroundColor="#3e3e3e"
          // onValueChange={toggleSwitch}
          // value={isEnabled}
          value={darkMode}
          onValueChange={(value) => {
            setDarkMode(value), EventRegister.emit("ChangeTheme", value);
          }}
        />
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({
  
})

export default Setting;
