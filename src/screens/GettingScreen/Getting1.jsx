import React, {useState, useContext} from "react";
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
import themeContext from "../../theme/themeContext";


const THEME = ['black', 'white'];


const Getting1 = () => {
  const navigation = useNavigation();
  const theme = useContext(themeContext);

  const goNext = () => {
    navigation.navigate("Login1");
  };
  

  return (
    <SafeAreaView style={[styles.wrapper, { backgroundColor: theme.backgroundColor }]}>
      <View>
        <Image source={require("../../../assets/MusicIcon.png")} style={styles.logo} />
      </View>
      <View>
        <TouchableOpacity onPress={goNext}>
          <Text style={[{color:theme.color}, styles.text]}>Let's get started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: "center",
  },
  logo:{
    width:200,
    height:200
  },

  text:{
    fontSize:20
  }
});

export default Getting1;
