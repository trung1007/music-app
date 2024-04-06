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
} from "react-native";
import themeContext from "../../theme/themeContext";
import sildeMusic from "../../components/sildeMusic";
import SlideMuisc1 from "../../components/SlideMuisc1";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useContext(themeContext);

  return (
    <SafeAreaView
      style={[styles.wrapper, { backgroundColor: theme.backgroundColor }]}
    >
      {/* <Text style={[{color:theme.color}]}>Home page</Text> */}
      <View style={styles.title}>
        <Text style={[{ color: theme.color }, styles.titleText]}>HOME</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.SOTD}>
          <Text style={[{ color: theme.color }, styles.SOTDtext]}>
            Sound of the day
          </Text>
          <FlatList
            data={sildeMusic}
            renderItem={({ item }) => <SlideMuisc1 item={item} />}
            horizontal
            showsHorizontalScrollIndicator
            pagingEnabled
            bounces={false}
          />
          <View></View>
        </View>
        <View></View>
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
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 3,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  SOTDtext: {
    fontSize: 16,
    letterSpacing: 1,
  },
});

export default Home;
