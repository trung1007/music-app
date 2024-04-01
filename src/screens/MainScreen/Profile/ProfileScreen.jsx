import React, { useState, useContext } from "react";
import {
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import themeContext from "../../../theme/themeContext";

const Stack = createStackNavigator();

const Profile = () => {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  return (
    <View style={[styles.wrapper, { backgroundColor: theme.backgroundColor }]}>
      <View style={styles.header}>
        <Text style={[{ color: theme.color, fontSize: 32, fontWeight: "700" }]}>
          Profile
        </Text>
      </View>
      <View style={[styles.userInf, { borderBottomColor: theme.color }]}>
        <Image
          style={styles.ava}
          source={require("../../../../assets/img/ava.jpg")}
        />
        <View style={[styles.inf,{borderBottomColor: theme.color}]}>
          <Text style={[styles.name, { color: theme.color }]}>
            Cao Thanh Trung
          </Text>
          <View style={styles.role}>
            <Text style={{ color: "white", fontWeight: "600" }}>BASIC</Text>
          </View>
        </View>
      </View>
      <View style={styles.personal}>
        <Button title="Account" />
        <Button
          title="Setting"
          onPress={() => {
            navigation.navigate("Setting");
          }}
        />
      </View>
      <TouchableOpacity style={{flex:1, alignItems:'center'}}>
        <View style={styles.logOutBtn}>
          <Text style={{color:theme.color, fontSize:16}}>Log out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    
  },
  header: {
    marginLeft: 20,
  },
  userInf: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    gap: 15,

    borderBottomWidth: 2,
    paddingBottom: 15,
  },
  ava: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  inf: {
    gap: 10,

  },
  name: {
    fontSize: 24,
    fontWeight: "600",
  },
  role: {
    width: 60,
    height: "auto",
    padding: 4,
    backgroundColor: "#C695E9",
    alignItems: "center",
    borderRadius: 6,
  },
  personal: {
    display: "flex",
    alignItems: "flex-start",
    
    borderBottomWidth: 2,
    paddingBottom: 15,
  },
  logOutBtn:{
    width:200,
    height:60,
    backgroundColor:'gray',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:40,
    marginTop:15
  }
});

export default Profile;
