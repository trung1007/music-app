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
  TouchableOpacity,
  Modal
} from "react-native";
import themeContext from "../theme/themeContext";

import { useNavigation } from "@react-navigation/native";
import SongModal from "./SongModal";
const AlbumSong = ({ item }) => {
  const theme = useContext(themeContext)
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <TouchableOpacity style={styles.content} onPress={toggleModal}>
      
      <Image source={{ uri: item.image }} style={styles.songImg} />
      <View style={styles.songInfo}>
        <Text style={[styles.songName, {color:theme.color}]}>{item.name}</Text>
        <Text style={[styles.songSinger]}>{item.singer}</Text>
      </View>
      {modalVisible && (
        <SongModal item={item} toggleModal={toggleModal} />
      )}
       
    </TouchableOpacity>
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
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 5,
  },
});

export default AlbumSong;
