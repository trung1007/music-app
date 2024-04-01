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


const THEME = ['black', 'white'];


const Getting1 = () => {
  const navigation = useNavigation();
  const goNext = () => {
    navigation.navigate("Login1");
  };
  const [theme, setTheme]=useState(THEME[1])
  

  return (
    <SafeAreaView style={styles.wrapper}>
      
      <View>
        <Image source={require("../../../assets/MusicIcon.png")} />
      </View>
      <View>
        <TouchableOpacity onPress={goNext}>
          <Text style={{color:theme}}>Let's get started</Text>
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
