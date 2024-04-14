import { useState, useEffect } from "react";
import { Audio } from "expo-av";

export const useSound = (path) => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  async function playSound() {
    // console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(path);
    setSound(sound);
    console.log("Playing Sound");
    await sound.playAsync();
    setIsPlaying(true);
    setPosition(position);
  }
  const pauseSound = async () => {
    if (sound && isPlaying) {
      // console.log("Pausing Sound");
      await sound.pauseAsync();
      setIsPlaying(false);
      const status = await sound.getStatusAsync();
      if (status.isLoaded) {
        setPosition(status.positionMillis);
      }
      
    }
  };

  const stopSound = async () => {
    if (sound && isPlaying) {
      // console.log("Stopping Sound");
      await sound.stopAsync();
      setIsPlaying(false);
      setPosition(0);
    }
  };
  const resumeSound = async () => {
    if (sound && !isPlaying) {
      // console.log("Resuming Sound");
      await sound.playFromPositionAsync(position);
      console.log(position);
      setIsPlaying(true);
      // setPosition(0);
    }
  };

  useEffect(() => {
    return () => {
      stopSound();
      if (sound) {
        console.log("Unloading Sound");
        sound.unloadAsync();
      }
    };
  }, [sound]);
  return { playSound, pauseSound, stopSound, resumeSound };
};
