import React, { useState, useContext } from "react";
import {
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
  FlatList,
  Image,
  useWindowDimensions
} from "react-native";
import sildeMusic from "./sildeMusic1";

const SlideImage1 = ({ item }) => {
    const {width} = useWindowDimensions()
  return (
    <View style={[ styles.wrapper]}>
      <Image source={item.image} style={[styles.image,{ } ]} />

    </View>
  );
};
export default SlideImage1

const styles = StyleSheet.create({
    wrapper:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:5,
        marginRight:5
    },

  image: {
    width: 300,
    height: 300,
    borderRadius:20
  },
});
