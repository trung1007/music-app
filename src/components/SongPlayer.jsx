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

import { useNavigation } from "@react-navigation/native";
import SongModal from "./SongModal";

const SongPlayer = ({ item }) => {
  const theme = useContext(themeContext);
  const [modalVisible, setModalVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <TouchableOpacity onPress={toggleModal}>
      <Image
        source={{
          uri: item.image,
        }}
        style={{height:50, width:50}}
      />
      <View>
        <Text>{item.name}</Text>
        <Text>{item.singer}</Text>
      </View>
      {modalVisible && <SongModal item={item} toggleModal={toggleModal} />}
    </TouchableOpacity>
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

export default SongPlayer;
