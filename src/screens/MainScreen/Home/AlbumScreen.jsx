import React, { useEffect, useState, useContext } from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import themeContext from "../../../theme/themeContext";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { FIREBASE_DB } from "../../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import SlideImage1 from "../../../components/SlideMuisc1";
import AlbumSong from "../../../components/AlbumSong";
const AlbumScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  const AlbumName = route.params[0].name;

  const [songAlbum, setSongAlubm] = useState([]);

  const fetchMusic = async () => {
    const song = [];
    const MusicData = await getDocs(collection(FIREBASE_DB, AlbumName));
    MusicData.forEach((doc) => {
      song.push({
        name: doc.data().name,
        image: doc.data().image,
        singer: doc.data().singer
      });
    });
    setSongAlubm(song);
  };

  useEffect(() => {
    fetchMusic();
  }, []);

  return (
    <SafeAreaView
      style={[styles.wrapper, { backgroundColor: theme.backgroundColor }]}
    >
      <View style={[{ paddingLeft: 10 }]}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign
            name="arrowleft"
            size={24}
            style={{ color: theme.color }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={[styles.albumName, theme.color]}>
          {route.params[0].name}
        </Text>

        <ScrollView contentContainerStyle={styles.content}>
          <Image source={route.params[0].image} style={styles.albumImg} />

          {songAlbum.map((item) => (
            <AlbumSong item={item} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    display: "flex",
    alignItems: "center",
  },
  albumImg: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginTop: 10,
    marginBottom:10
  },
  albumName: {
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 1,
    marginTop: 10,
  },
});
export default AlbumScreen;
