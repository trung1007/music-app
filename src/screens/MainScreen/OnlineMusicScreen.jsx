import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image } from "react-native";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";
import Ionicons from "@expo/vector-icons/Ionicons";
import Slider from "@react-native-community/slider";
import { collection, getDocs } from "firebase/firestore";
import { FIREBASE_DB } from "../../config/firebase";

export default function OnlineMusicScreen() {
  const [musicFiles, setMusicFiles] = useState([]);
  const [playing, setPlaying] = useState(-1);
  const [sound, setSound] = useState(null);
  const [progressDuration, setProgressDuration] = useState(0);
  const [durationMillis, setDurationMilis] = useState(0);
  const [positionMilis, setPositionMilis] = useState(0);
  const fetchMusicFiles = async () => {
    const tracks = [];
    const onlineTracks = await getDocs(collection(FIREBASE_DB, "Music"));
    onlineTracks.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data().uri}`);
      tracks.push({
        uri: doc.data().uri,
        title: doc.data().title,
        img: doc.data().img,
      });
    });
    setMusicFiles(tracks);
  };
  const playMusic = async (fileUri) => {
    Audio.setAudioModeAsync({
      staysActiveInBackground: true,
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: true,
    });
    const { sound } = await Audio.Sound.createAsync({
      uri: fileUri,
    });

    const status = await sound.getStatusAsync();
    setDurationMilis(status.durationMillis);

    setSound(sound);
    setPositionMilis(0);
    await sound.playAsync();
  };

  const handleNext = async () => {
    pauseMusic();
    let next = (playing + 1) % musicFiles.length;
    setPlaying((prev) => (prev + 1) % musicFiles.length);
    playMusic(musicFiles[next].uri);
  };

  const handleTimeSlide = async (value) => {
    if (sound !== null) {
      await sound.setPositionAsync(value);
    }
  };
  const pauseMusic = async () => {
    await sound.pauseAsync();
  };
  useEffect(() => {
    if (!sound) {
      return;
    }
    sound.setOnPlaybackStatusUpdate(async (status) => {
      if (status.didJustFinish) {
        setPlaying(-1);
        await sound.unloadAsync();
        // console.log("finished");
        setSound(null);
      } else {
        setProgressDuration(status.positionMillis / 1000);
      }
    });
    const interval = setInterval(() => {
      if (sound !== null) {
        sound.getStatusAsync().then((status) => {
          setPositionMilis(status.positionMillis);
        });
      }
    }, 100);

    return () => clearInterval(interval);
  }, [sound]);

  useEffect(() => {
    fetchMusicFiles();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.heading}>Online Music</Text> */}
      <View style={styles.list}>
        {musicFiles.map((file, index) => {
          return (
            <View key={index} style={styles.MusicFrame}>
                <View>
                    <Text>
                        {file.title}
                    </Text>
                </View>
                <Image source={{
                    uri: file.img,
                }}
                style= {styles.MusicImg} />
              <TouchableOpacity
                onPress={
                  playing !== index
                    ? () => {
                        playMusic(file.uri);
                        setPlaying(index);
                      }
                    : () => {
                        pauseMusic();
                        setPlaying(-1);
                      }
                }
                style={styles.playButton}
              >
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name={playing !== index ? "play" : "pause"}
                    size={30}
                    color="white"
                  >
                    <Text style={styles.fileName}>{file.title}</Text>
                  </Ionicons>
                </View>
                <View style={styles.row}>
                  {playing === index ? (
                    <Text style={styles.fileName}>
                      {progressDuration} / {durationMillis / 1000}
                    </Text>
                  ) : (
                    <></>
                  )}
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      {/* <Text>{progressDuration} / {duration}</Text>
            <Text>{progressDuration / duration}</Text> */}
      <Slider
        onSlidingComplete={handleTimeSlide}
        value={positionMilis}
        minummValue={0}
        maximumValue={durationMillis}
      />
      <Button title="Next" onPress={handleNext} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  container: {
    
    flex:1,
  },
//   list: {
//     marginTop: 20,
//     flex: 0.5,
//     flexDirection: "column",
//   },
  fileName: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  playButton: {
    backgroundColor: "gray",
    borderRadius: 50,
    padding: 10,
    margin: 100,
  },
  MusicFrame:{
    display: 'flex',
    
    justifyContent:'center',
    alignItems:'center'
  },
  MusicImg:{
    width:200,
    height:200
  }
});
