import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { View } from "react-native";
import { Dimensions } from "react-native";
import { useNavigation } from "expo-router";
import images from "@/constants/ConstImg";
export default function story() {
  const route = useRoute<RouteProp<{ params: { item: any } }, "params">>();
  const { Sdata } = route.params.item;
  console.log(Sdata);
  const nav = useNavigation();
  useEffect(() => {
    setInterval(() => {
      nav.navigate("(tabs)");
    }, 5000);
  }, [nav]);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={styles.topbar}>
        <Image
          style={styles.profilePic}
          source={route.params.item.Story.StoryImg}
        />
        <Text style={styles.text}>{route.params.item.Username}</Text>
        <Text style={styles.text}>{route.params.item.Story.Time} h ago</Text>
      </View>
      <View style={{ width: "100%", height: "90%" }}>
        <Image
          style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          source={route.params.item.Story.StoryImg}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "98%",
          height: 50,
        }}
      >
        <TouchableOpacity>
          <Image source={images.like} style={styles.icon} />
        </TouchableOpacity>
        <TextInput style={styles.input}></TextInput>
        <TouchableOpacity>
          <Image source={images.share} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  topbar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    alignItems: "center",
    position: "absolute",
    zIndex: 1,
    top: 0,
    width: "100%",
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  icon: { tintColor: "white", height: 50, width: 50 },
  input: {
    height: 50,
    width: "75%",
    borderColor: "white",
    borderRadius: 10,
    borderWidth: 1,
  },
});
