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
  TouchableOpacity,
} from "react-native";
import themeContext from "../../../theme/themeContext";
import SlideImage1 from "../../../components/SlideMuisc1";
import sildeMusic1 from "../../../components/sildeMusic1";
import SlideImage2 from "../../../components/SlideMusic2";
import silderMusic2 from "../../../components/silderMusic2";
import MusicList3 from "../../../components/MusicList3";
import MusicList4 from "../../../components/MusicList4";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { SongProvider } from "../../../context/SongContext";

const HomeScreen = () => {
  const theme = useContext(themeContext);
  const route = useRoute();
  const navigation = useNavigation();
  const song = SongProvider.song

  useEffect(()=>{
  })

  return (
    <SafeAreaView
      style={[styles.wrapper, { backgroundColor: theme.backgroundColor }]}
    >
      {/* <Text style={[{color:theme.color}]}>Home page</Text> */}
      <View style={styles.title}>
        <Text style={[{ color: theme.color }, styles.titleText]}>KHÁM PHÁ</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.SOTD}>
          <Text style={[{ color: theme.color }, styles.SOTDtext]}>
            Nổi bật hôm nay
          </Text>
          <FlatList
            data={sildeMusic1}
            renderItem={({ item }) => <SlideImage1 item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled={false}
            bounces={false}
          />
          <View></View>
        </View>
        <View style={styles.playlist}>
          <TouchableOpacity>
            <Text style={[styles.playlistText, { color: theme.color }]}>
              Có thể bạn muốn nghe
            </Text>
          </TouchableOpacity>
          <FlatList
            data={silderMusic2}
            renderItem={({ item }) => <SlideImage2 item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled={false}
          />
        </View>
        <View style={styles.playlist}>
          <TouchableOpacity>
            <Text style={[styles.playlistText, { color: theme.color }]}>
              Vừa Nghe Vừa Lak
            </Text>
          </TouchableOpacity>
          <FlatList
            data={MusicList3}
            renderItem={({ item }) => <SlideImage2 item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled={false}
          />
        </View>
        <View style={styles.playlist}>
          <TouchableOpacity>
            <Text style={[styles.playlistText, { color: theme.color }]}>
              Chill
            </Text>
          </TouchableOpacity>
          <FlatList
            data={MusicList4}
            renderItem={({ item }) => <SlideImage2 item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled={false}
          />
        </View>
        {/* <View style={styles.playlist}>
          <TouchableOpacity>
            <Text style={styles.playlistText}>Chill</Text>
          </TouchableOpacity>
          <FlatList
            data={silderMusic2}
            renderItem={({ item }) => <SlideImage2 item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled={false}
            bounces={false}
          />
        </View><View style={styles.playlist}>
          <TouchableOpacity>
            <Text style={styles.playlistText}>Chill</Text>
          </TouchableOpacity>
          <FlatList
            data={silderMusic2}
            renderItem={({ item }) => <SlideImage2 item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled={false}
            bounces={false}
          />
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  title: {
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 3,
  },
  content: {
    // paddingLeft: 10,
    // paddingRight: 10,
    marginBottom: 40,
  },
  SOTDtext: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
  playlistText: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 1,
    paddingLeft: 10,
    marginBottom: 10,
  },
  playlist: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default HomeScreen;
