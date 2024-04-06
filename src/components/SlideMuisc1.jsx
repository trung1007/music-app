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
import sildeMusic from "./sildeMusic";

export default SlideImage1 = ({ item }) => {
    const {width} = useWindowDimensions()
  return (
    <View style={[styles.wrapper,{width}]}>
      <Image source={item.image} style={[styles.image,{width, resizeMode:'contain'} ]} />
    </View>
  );
};

const styles = StyleSheet.create({
    wrapper:{
        justifyContent:'center'
    },

  image: {
    // width: 300,
    // height: 300,
    borderRadius:70
  },
});
