import React from "react";
import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";
import { Color } from "../../../GlobalStyle";

const Getting1 = () => {
  return (
    <SafeAreaView style={styles.wrapper} >
      <View>
        <Image source={require("../../../assets/MusicIcon.png")} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor: Color.black,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Getting1;
