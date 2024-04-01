import React, { useState,useContext } from "react";
import {
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
} from "react-native";
import themeContext from "../../theme/themeContext";


const Home=()=>{

    const[darkMode,setDarkMode] = useState(false)
    const theme=useContext(themeContext)
    
    return (
        <View style={[styles.wrapper,{backgroundColor:theme.backgroundColor}]}>
            <Text style={[{color:theme.color}]}>Home page</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    wrapper:{
        flex:1
    }
})

export default Home
