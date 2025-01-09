import React from "react";
import { Dimensions, TextInput } from "react-native";
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
          <Text style={{fontSize:30}}> Instagram </Text>
        </TouchableOpacity>
        <TextInput style={styles.search} placeholder="Search"></TextInput>
        <TouchableOpacity>
          {" "}
          <Image
            source={require("../../assets/images/threads.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.highlights}>
          <View style={styles.Hicon}>
            <Image
              source={require("../../assets/images/icon.png")}
              style={styles.Sicon}
            />
            <Text style={styles.Stxt}>rahul</Text>
          </View>
          <View style={styles.Hicon}>
            <Image
              source={require("../../assets/images/icon.png")}
              style={styles.Sicon}
            />
            <Text style={styles.Stxt}>rahul</Text>
          </View>
          <View style={styles.Hicon}>
            <Image
              source={require("../../assets/images/icon.png")}
              style={styles.Sicon}
            />
            <Text style={styles.Stxt}>rahul</Text>
          </View>
          <View style={styles.Hicon}>
            <Image
              source={require("../../assets/images/icon.png")}
              style={styles.Sicon}
            />
            <Text style={styles.Stxt}>rahul</Text>
          </View>
          <View style={styles.Hicon}>
            <Image
              source={require("../../assets/images/icon.png")}
              style={styles.Sicon}
            />
            <Text style={styles.Stxt}>rahul</Text>
          </View>
          <View style={styles.Hicon}>
            <Image
              source={require("../../assets/images/icon.png")}
              style={styles.Sicon}
            />
            <Text style={styles.Stxt}>rahul</Text>
          </View>
        </View>

        {/* posts */}
        <View style={styles.postSection}>
          <View style={styles.postHead}>
            <View style={styles.postHeadLeft}>
              <Image
                source={require("../../assets/images/icon.png")}
                style={styles.postIcon}
              />
              <Text style={{fontSize:20}}>userID123</Text>
              <TouchableOpacity style={styles.followBtn}>
                Follow
              </TouchableOpacity>
            </View>
            <View >
              <TouchableOpacity>
                <Image
                  style={styles.more}
                  source={require("../../assets/images/moreDot.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Image
            style={styles.postImg}
            source={require("../../assets/images/post1.jpg")}
          />
          <View style={styles.postFooter}>
            <View style={styles.postRow}>
              <View style={styles.postLeft}>
                <TouchableOpacity>
                  {" "}
                  <Image
                    style={styles.icon}
                    source={require("../../assets/images/heart.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  {" "}
                  <Image
                    style={styles.icon}
                    source={require("../../assets/images/chat.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  {" "}
                  <Image
                    style={styles.icon}
                    source={require("../../assets/images/share.png")}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Image
                    style={styles.icon}
                    source={require("../../assets/images/bookmark-white.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ paddingLeft: 10, gap: 10, marginTop: 10 }}>
              <Text style={styles.likeCount}>100 Likes</Text>
              <Text style={styles.caption}>
                Caption!! <Text style={{ color: "#000a" }}>...more</Text>
              </Text>
              <Text style={styles.commant}>View all commants </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* footer */}
      <View style={styles.navHead}>
        <TouchableOpacity>
          {" "}
          <Image
            style={styles.icon}
            source={require("../../assets/images/home.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          {" "}
          <Image
            style={styles.icon}
            source={require("../../assets/images/compass.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          {" "}
          <Image
            style={styles.icon}
            source={require("../../assets/images/more.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          {" "}
          <Image
            style={styles.icon}
            source={require("../../assets/images/reel.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          {" "}
          <Image
            style={styles.icon}
            source={require("../../assets/images/share.png")}
          />
        </TouchableOpacity>
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
  postFooter: {
    height: "auto",
  },
  bio: {
    fontSize: 18,
    height: "30%",
    paddingLeft: "5%",
    justifyContent: "center",
  },
  highlights: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingLeft: "3%",
    paddingRight: "3%",
    borderBottomWidth: 1,
    overflow: "hidden",
  },
  Hicon: {
    height: "99%",
    width: "auto",
    borderRadius: 50,
    alignItems: "center",
    padding: 10,
  },
  Sicon: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: "#0a0",
    borderWidth: 3,
  },
  Stxt: {
    height: 30,
    width: 100,
    textAlign: "center",
    fontSize: 16,
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
    width: "100%",
  },

  postImg: {
    width: "100%",
    height: windowWidth,
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
  search: {
    borderWidth: 2,
    borderRadius: 10,
    width: "50%",
    height: "80%",
    textAlign: "center",
    padding: 10,
  },
  postIcon: {
    height: 60,
    width: 60,
    borderColor: "#a60",
    borderWidth: 2,
    borderRadius: 50,
  },
  postHead: {
    height: 80,
    alignItems: "center",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  postHeadLeft: {
    flexDirection: "row",
    width: "60%",
    alignItems: "center",
    textAlign:"center",
    gap: 10,
  },
  more: {
    height: 30,
    width: 30,
  },
  followBtn: {
    width: 100,
    fontSize:20,
    justifyContent:"center",
    color: "blue",
    textAlign:"left",
    fontWeight: "600",
  },
  postRow: {
    flexDirection: "row",
    gap: 10,
    paddingTop: 10,
    justifyContent: "space-between",
  },
  postLeft: { flexDirection: "row", paddingLeft: 10, gap: 20 },
  commant: {
    fontSize: 20,
    color: "#000a",
  },
  likeCount: {
    fontSize: 20,
  },
  caption: { fontSize: 18 },
});
