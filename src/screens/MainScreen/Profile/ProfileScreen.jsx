import React, { useState } from "react";
import {
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

const Stack = createStackNavigator();



const Profile=()=>{
    const navigation=useNavigation()

    return (
        <View>
            <Text>Cao Thanh Trung</Text>
            <Button  
                title="Setting"
                onPress={()=>{
                    navigation.navigate('Setting')
                }}
            />
        </View>
    )
}

export default Profile
