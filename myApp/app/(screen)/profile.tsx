import React from "react";
import { Dimensions } from "react-native";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function profile() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View style={styles.container}>
      <View style={styles.navHead}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/images/settings.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.username}>rohit._.suthar</Text>
        <TouchableOpacity>
          {" "}
          <Image
            source={require("../../assets/images/threads.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      {/* profile section */}
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.profileSection}>
          <View style={styles.porfileRow}>
            <Image
              source={require("../../assets/images/icon.png")}
              style={styles.profilePic}
            />
            <View style={{ width: "40%" }}>
              <Text style={styles.username}> rohit._.suthar</Text>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <TouchableOpacity style={styles.btn}>
                  <Text style={{ fontSize: 18, fontWeight: 400 }}>
                    Edit Profile
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                  <Text style={{ fontSize: 18, fontWeight: 400 }}>Archive</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* bio */}
          <View style={styles.bio}>
            <View>Rohit </View>
            <View>jai shree ram </View>
            <View>IET'26 </View>
            <View>Cool down...</View>
          </View>
          {/* highlights */}
          <View style={styles.highlights}>
            <Image
              source={require("../../assets/images/icon.png")}
              style={styles.Hicon}
            />
            <Image
              source={require("../../assets/images/icon.png")}
              style={styles.Hicon}
            />
            <Image
              source={require("../../assets/images/icon.png")}
              style={styles.Hicon}
            />
            <Image
              source={require("../../assets/images/icon.png")}
              style={styles.Hicon}
            />
            <Image
              source={require("../../assets/images/icon.png")}
              style={styles.Hicon}
            />
          </View>
        </View>
        {/* follow section */}
        <View style={styles.followSection}>
          <View style={styles.followRow}>
            <Text style={styles.boldBlack}>12</Text>
            <Text style={styles.boldBlack}>posts</Text>
          </View>
          <View style={styles.followRow}>
            <Text style={styles.boldBlack}>237</Text>
            <Text style={styles.boldBlack}>followers</Text>
          </View>
          <View style={styles.followRow}>
            <Text style={styles.boldBlack}>217</Text>
            <Text style={styles.boldBlack}>following</Text>
          </View>
        </View>
        {/* post nav */}
        <View style={styles.postNav}>
        <TouchableOpacity>   <Image
            source={require("../../assets/images/grid.png")}
            style={styles.icon}
          /></TouchableOpacity> 
        <TouchableOpacity>   <Image
            source={require("../../assets/images/reel.png")}
            style={styles.icon}
          /></TouchableOpacity> 
        <TouchableOpacity>   <Image
            source={require("../../assets/images/bookmark-white.png")}
            style={styles.icon}
          /></TouchableOpacity> 
        <TouchableOpacity>   <Image
            source={require("../../assets/images/comment.png")}
            style={styles.icon}
          /></TouchableOpacity> 
        </View>
        {/* posts */}
        <View style={styles.postSection}>
          <Image
            style={styles.postImg}
            source={require("../../assets/images/post1.jpg")}
          />
          <Image
            style={styles.postImg}
            source={require("../../assets/images/post2.jpg")}
          />
          <Image
            style={styles.postImg}
            source={require("../../assets/images/post3.jpg")}
          />

          <Image
            style={styles.postImg}
            source={require("../../assets/images/post4.jpg")}
          />
          <Image
            style={styles.postImg}
            source={require("../../assets/images/post1.jpg")}
          />
          <Image
            style={styles.postImg}
            source={require("../../assets/images/post2.jpg")}
          />

          <Image
            style={styles.postImg}
            source={require("../../assets/images/post3.jpg")}
          />
          <Image
            style={styles.postImg}
            source={require("../../assets/images/post4.jpg")}
          />
          <Image
            style={styles.postImg}
            source={require("../../assets/images/post1.jpg")}
          />

          <Image
            style={styles.postImg}
            source={require("../../assets/images/post2.jpg")}
          />
          <Image
            style={styles.postImg}
            source={require("../../assets/images/post3.jpg")}
          />
          <Image
            style={styles.postImg}
            source={require("../../assets/images/post4.jpg")}
          />
        </View>
      </ScrollView>
      {/* footer */}
      <View style={styles.navHead}>
       <TouchableOpacity>  <Image
          style={styles.icon}
          source={require("../../assets/images/home.png")}
        /></TouchableOpacity> 
       <TouchableOpacity>  <Image
          style={styles.icon}
          source={require("../../assets/images/compass.png")}
        /></TouchableOpacity> 
       <TouchableOpacity>  <Image
          style={styles.icon}
          source={require("../../assets/images/more.png")}
        /></TouchableOpacity> 
       <TouchableOpacity>  <Image
          style={styles.icon}
          source={require("../../assets/images/reel.png")}
        /></TouchableOpacity> 
       <TouchableOpacity>  <Image
          style={styles.icon}
          source={require("../../assets/images/share.png")}
        /></TouchableOpacity> 
      </View>
    </View>
  );
}
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const minh = windowHeight - (windowHeight * 20) / 100;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  navHead: {
    borderBottomWidth: 2,
    borderTopWidth: 2,
    width: "100%",
    height: "10%",
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    height: 40,
    width: 40,
  },
  username: {
    fontSize: 25,
    fontWeight: 500,
  },
  profilePic: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
  },
  profileSection: {
    height: minh,
    gap: 25,
  },
  porfileRow: {
    textAlign: "center",
    height: "33%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  bio: {
    fontSize: 18,
    height: "30%",
    paddingLeft: "5%",
    justifyContent: "center",
  },
  highlights: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-evenly",
    height: "18%",
    paddingLeft: "3%",
    paddingRight: "3%",
  },
  Hicon: {
    height: "100%",
    width: 100,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 3,
  },
  followSection: {
    height: "5%",

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  boldBlack: {
    fontSize: 20,
    fontWeight: 500,
  },
  followRow: {
    justifyContent: "center",
    alignItems: "center",
  },
  postSection: {
    flexDirection: "row",
    flex: 1,
    gap: 1,
    flexWrap: "wrap",
  },
  postNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "5%",
  },
  postImg: {
    width: "33%",
  },
  btn: {
    marginTop: 5,
    width: "50%",
    gap: 5,
    backgroundColor: "#aff",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
  },
});
