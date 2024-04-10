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
import {useNavigation} from '@react-navigation/native'


const SlideImage2 = ({ item }) => {
    const {width} = useWindowDimensions()
    const navigation=useNavigation()

    
  return (
    <View style={[ styles.wrapper]}>
      <Image source={item.image} style={[styles.image,{ } ]} />

    </View>
  );
};

export default SlideImage2

const styles = StyleSheet.create({
    wrapper:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:5,
        marginRight:5
    },

  image: {
    width: 160,
    height: 160,
    borderRadius:10,
  },
});
