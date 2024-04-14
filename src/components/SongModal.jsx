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
} from "react-native";
import themeContext from "../theme/themeContext";

import { useNavigation, useRoute } from "@react-navigation/native";

const SongModal = ({ item, toggleModal }) => {
  const theme = useContext(themeContext);
  const navigation = useNavigation()
  const route = useRoute();
  const screenName = route.name;

  const goHomeScreen =()=>{
    navigation.navigate('HomeScreen')
  }
  const closeModal=()=>{
    toggleModal()
    if(screenName==='Album'){
      goHomeScreen()
    }
  }

  return (
    <Modal style={styles.modalContent}
      animationType="slide"
    > 
        <SafeAreaView
        style={{ flex: 1, alignItems: "center" }}
      >
        <Image source={{ uri: item.image }} style={styles.modalImage} />
        <Text style={styles.modalText}>{item.name}</Text>
        <Button title="Close" onPress={closeModal} />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
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

export default SongModal;
