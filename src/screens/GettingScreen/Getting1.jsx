import React, {useState} from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { Color } from "../../../GlobalStyle";
import { useNavigation } from "@react-navigation/native";


const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const Getting1 = () => {
  const navigation = useNavigation();
  const goNext = () => {
    navigation.navigate("Login1");
  };
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[2]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0],
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

  return (
    <SafeAreaView style={styles.wrapper}>
      
      <View>
        <Image source={require("../../../assets/MusicIcon.png")} />
      </View>
      <View>
        <TouchableOpacity onPress={goNext}>
          <Text style={{color:'white'}}>Let's get started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Color.black,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Getting1;
