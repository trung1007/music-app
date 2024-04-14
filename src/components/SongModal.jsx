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
  ImageBackground,
} from "react-native";
import themeContext from "../theme/themeContext";

import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useSound } from "../hooks/useSound";

const SongModal = ({ item, toggleModal }) => {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const route = useRoute();
  const screenName = route.name;
  const { playSound, pauseSound, stopSound, resumeSound } = useSound({
    uri: item.music,
  });
  const [play, setPlay] = useState(false);
  const [first, setFirst] = useState(true)

  const goHomeScreen = () => {
    navigation.navigate("HomeScreen");
  };
  const closeModal = () => {
    toggleModal();
    if (screenName === "Album") {
      goHomeScreen();
    }
  };
  const PlayMusic = async () => {
    stopSound();
    await playSound();
    setFirst(false)
  };
  const PauseMusic = async () => {
    await pauseSound();
    setPlay(!play)
  };


  const ResumeMusic = async () => {
    await resumeSound();
  };

  const handlePlayMusic = async()=>{
    if(first){
      PlayMusic()
    }
    else{
      ResumeMusic()
    }
    setPlay(!play)
  }

  return (
    <Modal style={styles.modalContent} animationType="slide">
      <SafeAreaView
        style={[styles.wrapper, { backgroundColor: theme.backgroundColor }]}
      >
        <TouchableOpacity onPress={closeModal} style={{ paddingLeft: 10 }}>
          <AntDesign name="down" size={24} style={{ color: theme.color }} />
        </TouchableOpacity>
        <View style={styles.content}>
          <Image source={{ uri: item.image }} style={styles.songImage} />
          <Text style={[styles.songName, { color: theme.color }]}>
            {item.name}
          </Text>
          <Text style={[styles.songSinger]}>{item.singer}</Text>
          {/* <Button title="Play Music" onPress={PlayMusic} />
          <Button title="Pause Music" onPress={PauseMusic} />
          <Button title="Resume Music" onPress={ResumeMusic} /> */}
          {!play && (
            <TouchableOpacity onPress={handlePlayMusic}>
              <AntDesign name="play" size={40} color="black" />
            </TouchableOpacity>
          )}
          {play && (
            <TouchableOpacity onPress={PauseMusic} style={styles.pause}>
              <AntDesign name="pausecircle" size={40} color="black" />
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
  background: {
    // flex: 1,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    position: "absolute",
  },
  songImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
  songName: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 5,
  },
  songSinger: {
    fontSize: 16,
    marginTop: 5,
    color: "gray",
  },
  content: {
    alignItems: "center",
  },
  
});

export default SongModal;
