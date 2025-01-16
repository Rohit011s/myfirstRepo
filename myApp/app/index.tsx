import { useNavigation } from "expo-router";
import LoginError from "@/app/interface/loginE";
import {
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lError, setLError] = useState<LoginError>({});

  useEffect(() => {
    validation();
  }, [email, password]);

  function validation() {
    const newError ={ ...lError};
    if (email.length === 0) {
      newError.email = "Email is required";
    } else {
      newError.email = "";
    }

    if (password.length === 0) {
      newError.password = "Password is required";
    } else {
      newError.password = "";
    }

    setLError(newError);
  }

  const pressC = () => {
    if (email.length !== 0 && password.length !== 0) {
      navigation.navigate("(screen)");
    } else {
      setLError(lError);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/images/bgImg.jpg")}
      style={{ height: "100%", width: "100%" }}
      resizeMode="cover"
    >
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.titleContainer}>
          <View style={styles.subView}>
            <Image
              source={require("../assets/images/samu.jpg")}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
            <Text style={styles.hedding}>Login</Text>
            <Text style={styles.fontText}>Username :</Text>
            <View style={styles.flexS}>
              <Image
                source={require("../assets/images/profile.png")}
                style={styles.icon}
              />
              <TextInput
                style={styles.inputText}
                placeholder="username"
                onChangeText={(value) => setEmail(value)}
                value={email}
              />
            </View>
            <View style={{alignItems:"flex-start",width:"80%"}}>
              <Text style={{ color: "red",fontSize:18 }}>{lError.email}</Text>
              </View>
            <Text style={styles.fontText}>Password :</Text>
            <View style={styles.flexS}>
              <Image
                source={require("../assets/images/padlock.png")}
                style={styles.icon}
              />
              <TextInput
                style={styles.inputText}
                onChangeText={(value) => setPassword(value)}
                value={password}
                placeholder="password"
                secureTextEntry
              />
            </View>
            <View style={{alignItems:"flex-start",width:"80%"}}>
              <Text style={{ color: "red",fontSize:18 }}>{lError.password}</Text>
              </View>
            <TouchableOpacity onPress={pressC} style={styles.btn}>
              <Text style={styles.inputText1}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.btn}>
              <Text style={styles.link}>Forget Password ?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    height: "200%",
    alignItems: "center",
    justifyContent: "center",
  },
  fontText: {
    marginTop:5,
    width: "80%",
    fontSize: 20,
    textAlign: "left",
    color: "black",
    fontWeight: "bold",
  },
  subView: {
    padding: 20,
    borderRadius: 20,
    borderColor: "blue",
    borderWidth: 2,
    width: 500,
    height: "auto",
    backgroundColor: "#fb6",
    shadowColor: "grey",
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: { width: 8, height: 8 },
    alignItems: "center",
  },
  inputText: {
    width: "80%",
    height: 40,
    fontSize: 20,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    textAlign: "center",
  },
  inputText1: {
    width: "80%",
    height: 40,
    fontSize: 20,
    backgroundColor: "blue",
    margin: 10,
    borderRadius: 10,
    textAlign: "center",
    color: "white",
  },
  btn: {
    alignItems: "center",
    width: "100%",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
    textAlign: "left",
    width: "80%",
    padding: 5,
    fontSize: 20,
  },
  hedding: {
    textAlign: "center",
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    padding: 10,
    textDecorationLine: "underline",
  },
  flexS: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    margin: 5,
    padding: 10,
  },
  icon: {
    height: 40,
    width: 40,
  },
}); 