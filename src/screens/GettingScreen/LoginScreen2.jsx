import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  Alert,
  Dimensions,
} from "react-native";

import { Color } from "../../../GlobalStyle";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth";
import {
  FIREBASE_AUTH,
  FIREBASE_APP,
  FIREBASE_DB,
} from "../../config/firebase";
import themeContext from "../../theme/themeContext";
import theme from "../../theme/theme";
import { AuthProvider } from "../../context/AuthContext";
import AuthContext from "../../context/AuthContext";
import { collection, getDocs } from "firebase/firestore";

const LoginScreen2 = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("trungthanhcao.2003@gmail.com");
  const [password, setPassword] = useState("12323123");
  const [showSuccess, setShowSuccess] = useState(0);
  // const [user, setUser] = useState({})
  const goLayout = () => {
    navigation.navigate("Layout");
  };
  const goRes = () => {
    navigation.navigate("Register");
  };
  const theme = useContext(themeContext);
  const SuccessMessage = ({ message }) => {
    return (
      <View style={styles.successContainer}>
        <View style={styles.successContent}>
          <Text style={styles.successText}>{message}</Text>
        </View>
      </View>
    );
  };

  const handleLogin = async () => {
    const user = {};
    try {
      await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
      setShowSuccess(1);
      const DataUser = await getDocs(collection(FIREBASE_DB, "User"));
      DataUser.forEach((doc) => {
        if (FIREBASE_AUTH.currentUser.email === doc.data().email) {
          user.ava = doc.data().ava;
          user.name = doc.data().Name;
        }
      });
      AuthProvider.user = user;
    } catch (error) {
      console.log(error);
      setShowSuccess(2);
    }
  };

  useEffect(() => {
    if (showSuccess == 1) {
      Alert.alert("Đăng nhập thành công");
      setTimeout(() => {
        setShowSuccess(false);
        goLayout();
      }, 1500);
    }
    if (showSuccess == 2) {
      Alert.alert("Tài khoản không tồn tại vui lòng thử lại");
    }
  }, [showSuccess]);

  return (
    <SafeAreaView
      style={[styles.wrapper, { backgroundColor: theme.backgroundColor }]}
    >
      <View style={{ paddingLeft: 10 }}>
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
      {/* {showSuccess && (
        <SuccessMessage message="Login successful!" style={styles.LoginNoti} />
      )} */}
      <View style={styles.content}>
        <Image source={require("../../../assets/MusicIcon.png")} />
        <View>
          <Text style={{ color: theme.color, fontSize: 30, fontWeight: "700" }}>
            Đăng nhập vào ứng dụng
          </Text>
        </View>
        <View style={styles.formInput}>
          <Fontisto name="email" size={24} color="#525252" />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor={theme.color}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.formInput}>
          <AntDesign name="lock" size={24} color="#525252" />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor={theme.color}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <View>
          <TouchableOpacity onPress={handleLogin}>
            <View style={styles.LoginBtn}>
              <Text style={{ color: "white" }}>Đăng nhập</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Image source={require("../../../assets/or1.png")} />
        <View style={styles.LoginOption}>
          <TouchableOpacity>
            <Image source={require("../../../assets/gg_icon.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../../../assets/fb_icon.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../../../assets/apple_icon.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.Register}>
          <Text style={{ color: theme.color }}>Bạn chưa có tài khoản?</Text>
          <Button title="Đăng kí" onPress={goRes} color={Color.purple} />
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
  formInput: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 340,
    height: 60,
    borderWidth: 2,
    paddingLeft: 10,
    paddingRight: 10,

    gap: 10,
    borderColor: "#525252",
    borderRadius: 12,
  },
  textInput: {
    width: 280,
    height: 50,
    color: theme.color,
  },
  LoginBtn: {
    width: 350,
    height: 60,
    backgroundColor: Color.purple,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
  },
  LoginOption: {
    display: "flex",
    flexDirection: "row",
    width: 350,
    justifyContent: "space-evenly",
  },
  Register: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  successContainer: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "black",
    position: "absolute",
    zIndex: 10,
    opacity: 0.5,
  },
  successContent: {
    display: "flex",
    width: 300,
    height: 300,
    flex: 1,
    position: "relative",
    backgroundColor: "black",
    justifyContent: "center",
    zIndex: 11,
  },
});

export default LoginScreen2;
