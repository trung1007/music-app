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
  Modal,
  LogBox,
} from "react-native";
import themeContext from "../theme/themeContext";

import { useNavigation } from "@react-navigation/native";
import SongModal from "./SongModal";
import { SongProvider } from "../context/SongContext";

const SongPlayer = () => {
  const theme = useContext(themeContext);
  const [modalVisible, setModalVisible] = useState(false);

  const select =SongProvider.select
  const song = SongProvider.song


  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(()=>{
   
    // console.log(song);
  })

  return (
    <TouchableOpacity onPress={toggleModal} style={styles.stickPlayer}>
      <Image
        source={{
          uri: song.image ,
        }}
        style={{height:50, width:50}}
      />
      <View>
        <Text>{song.name}</Text>
        <Text>{song.singer}</Text>
      </View>
      {modalVisible && <SongModal item={song} toggleModal={toggleModal} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  stickPlayer:{
    position:'absolute',
    height:60,
    width:Dimensions.get('window').width,
    bottom:53,
    backgroundColor:'white',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    borderTopWidth:1,
    borderBottomWidth:1,
    padding:5
  }
});

export default SongPlayer;
