import { useState, useEffect } from "react";
import { Audio } from "expo-av";

export const useSound =(path)=>{
    const [sound, setSound] = useState();
    async function playSound(){
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(path);
        setSound(sound);
    
        console.log('Playing Sound');
        await sound.playAsync();
      }
      useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync();
            }
          : undefined;
      }, [sound]);
      return {playSound}
}