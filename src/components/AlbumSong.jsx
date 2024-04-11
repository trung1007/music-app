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
  Dimensions,
} from "react-native";
import themeContext from "../theme/themeContext";

import { useNavigation } from "@react-navigation/native";
const AlbumSong = ({ item }) => {
  const theme = useContext(themeContext)


  return (
    <View style={styles.content}>
      <Image source={{ uri: item.image }} style={styles.songImg} />
      <View style={styles.songInfo}>
        <Text style={[styles.songName, {color:theme.color}]}>{item.name}</Text>
        <Text style={[styles.songSinger]}>{item.singer}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "row",
    width: Dimensions.get("window").width,
    gap:10,
    padding:10
  },
  songImg: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  songInfo:{
    display:'flex',
    justifyContent:'space-between'
  }, 
  songName:{
    fontSize:16,
    fontWeight:'600',
    marginTop:5
  },
  songSinger:{
    fontSize:14,
    marginBottom:10,
    color:'gray'
  }
});

export default AlbumSong;
