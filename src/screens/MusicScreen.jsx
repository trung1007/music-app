 
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import Ionicons from '@expo/vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
 
export default function MusicScreen() {
    const [musicFiles, setMusicFiles] = useState([])
    const [playing, setPlaying] = useState(-1)
    const [sound, setSound] = useState(null);
    const [progressDuration, setProgressDuration] = useState(0)
    const [durationMillis, setDurationMilis] = useState(0);
    const [positionMilis, setPositionMilis] = useState(0);
    const fetchMusicFiles = async () => {
        const permission = await MediaLibrary.requestPermissionsAsync(
 
        );
        const media = await MediaLibrary.getAssetsAsync({
            mediaType: MediaLibrary.MediaType.audio,
        });
        const tracks = [
          {
            uri: ''
          }
        ]
        setMusicFiles(media.assets)
    }
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
        
        await sound.playAsync();
    }

    const handleNext = async () => {
      pauseMusic();
      let next = (playing + 1) % musicFiles.length
      setPlaying(prev => (prev + 1) % musicFiles.length);
      playMusic(musicFiles[next].uri);
    }
    
    const handleTimeSlide = async (value) => {
      // await sound.playFromPositionAsync(value * duration);
      // console.log(value);
      
      // setProgressDuration(value * duration)
      // setProgressDuration(value * duration);
      // await sound.setPositionAsync(value);
      if (sound !== null) {
        await sound.setPositionAsync(value);
      }
    }
    const pauseMusic = async () => {

        await sound.pauseAsync();
    }
    useEffect(() => {
        if (!sound) {
            return;
        }
        sound.setOnPlaybackStatusUpdate(
            async (status) => {
                if (status.didJustFinish) {
                    setPlaying(-1)
                    await sound.unloadAsync();
                    console.log("finished")
                    setSound(null);
                }
                else {
                    setProgressDuration(status.positionMillis / 1000)
                }
            }
        );
        const interval = setInterval(() => {
          if (sound !== null) {
            sound.getStatusAsync().then(status => {
              setPositionMilis(status.positionMillis);
            });
          }
        }, 100);
    
        return () => clearInterval(interval);
    }, [sound])
  

    useEffect(() => {
        fetchMusicFiles()
    }
        , [])
    return (
        <View style={styles.container}>
            
            <Text style={styles.heading}>
               Local Music
            </Text>
            <View style={styles.list}>
 
                {musicFiles.map((file, index) => {
 
                    return (
                        <View key={index}>
 
                            <TouchableOpacity onPress={
                                playing !== index ?
                                    () => {
                                        playMusic(file.uri)
                                        setPlaying(index)
                                    } :
                                    () => {
                                        pauseMusic()
                                        setPlaying(-1)
                                    }
                            } style={styles.playButton}>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}>
                                    <Ionicons
                                        name={playing !== index ?
                                            "play" :
                                            "pause"}
                                        size={30}
                                        color="white" >
                                        <Text
                                            style={styles.fileName}>
                                            {file.filename}
                                        </Text>
 
 
                                    </Ionicons>
                                </View>
                                {/* progress duration if index == currentIndex*/}
                                <View style={styles.row}>
 
                                    {playing === index ?
                                        <Text style={styles.fileName}>
                                            {progressDuration} / {file.duration}
                                        </Text> :
                                        <></>
                                    }
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
            {/* <Text>{progressDuration} / {duration}</Text>
            <Text>{progressDuration / duration}</Text> */}
            <Slider onSlidingComplete={handleTimeSlide} value={positionMilis}  minummValue={0} maximumValue={durationMillis}/>
            <Button title='Next' onPress={handleNext}/>
        </View>
    );
}
 
 
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    container: {
        backgroundColor: "#fff",
        height: "100%",
        marginTop: 50,
    },
    heading: {
        color: "green",
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
    },
    list: {
        marginTop: 20,
        flex: 0.5,
        flexDirection: "column",
    },
    fileName: {
        fontSize: 18,
        color: "white",
        fontWeight: 'bold',
    },
    playButton: {
        backgroundColor: 'gray',
        borderRadius: 50,
        padding: 10,
        margin: 10,
    },
});