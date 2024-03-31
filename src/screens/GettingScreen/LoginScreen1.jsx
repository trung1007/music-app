import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  Button,
  Pressable,
} from "react-native";
import { Color } from "../../../GlobalStyle";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const STYLES = ["default", "dark-content", "light-content"];

const LoginScreen1 = () => {
  const navigation = useNavigation();
  const goLogin = () => {
    navigation.navigate("Login2");
  };
  const goRes = () => {
    navigation.navigate("Register");
  };

  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[2]);
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle={statusBarStyle} />
      <View style={{ paddingLeft: 10 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View>
          <Image source={require("../../../assets/MusicIcon.png")} />
        </View>
        <View>
          <Text style={{color:'white', fontSize:32, fontWeight:'700'}}>
            Let's get you in
          </Text>
        </View>
        <View style={styles.Login}>
          <TouchableOpacity style={styles.LoginOption}>
            <Image source={require("../../../assets/gg_icon.png")} />
            <Text style={{ color: "white" }}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.LoginOption}>
            <Image source={require("../../../assets/fb_icon.png")} />
            <Text style={{ color: "white" }}>Continue with FaceBook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.LoginOption}>
            <Image source={require("../../../assets/apple_icon.png")} />
            <Text style={{ color: "white" }}>Continue with AppleID</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image source={require("../../../assets/or.png")} />
        </View>
        <View>
          <TouchableOpacity onPress={goLogin}>
            <View style={styles.LoginBtn}>
              <Text style={{ color: "white" }}>Login with your password</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.Register}>
          <Text style={{ color: "white" }}>Don't have an account?</Text>
          <Button title="Sign up" onPress={goRes} color={Color.purple} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Color.black,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
    gap: 20,
  },
  Login: {
    display: "flex",
    alignItems: "center",
    gap: "15",
    marginTop: 10,
  },
  LoginOption: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: 350,
    height: 60,
    borderWidth: "3",
    borderColor: "white",
    borderRadius: 12,
  },
  LoginBtn: {
    width: 350,
    height: 60,
    backgroundColor: Color.purple,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
  },
  Register:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
});

export default LoginScreen1;
