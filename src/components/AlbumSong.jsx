import React, { useState, useContext, useEffect } from "react";
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
  useWindowDimensions,
  Pressable,
  Dimensions
} from "react-native";

import { useNavigation } from "@react-navigation/native";
const AlbumSong = ({ item }) => {
  useEffect(() => {
    console.log(item.image);
  });

  return (
    <View style = {styles.content} >
      <Image source={{ uri: item.image }} style={styles.songImg} />
      <Text>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    content:{
        display:'flex',
        flexDirection:'row',
        width:Dimensions.get('window').width,
        marginBottom:5
    },
    songImg:{
        width:60,
        height:60,
        borderRadius:8
    },

})

export default AlbumSong;
