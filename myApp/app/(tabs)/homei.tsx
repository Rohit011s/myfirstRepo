import React, { useEffect, useState } from "react";
import images from "@/constants/ConstImg";
import { Dimensions, TextInput } from "react-native";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import PostAdress from "../interface/postData";
import axios from "axios";
import { useNavigation } from "expo-router";
import story from "../(screen)/story";

export default function profile() {
  const searchMovies=async()=>{
    try{const response= await axios.get("http://www.omdbapi.com/?apikey=[d2ea8114]&http://www.omdbapi.com/?t=from");
    console.log(response);}
    catch(error){
      console.log(error);
    }
    
  };
  useEffect(()=>{searchMovies()},[]);
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  const [like, setLike] = useState(false);
  const[likeButton,setLikeButton]=useState(images.like);
  const likebtn = () => {
if (!like) {
 setLikeButton(images.liked);
 setLike(true)
}else{
  setLikeButton(images.like);
  setLike(false);
}
  };
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
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

{
  PostAdress.map((item) => (
  <TouchableOpacity
   onPress={
  ()=>{ navigation.navigate("(screen)",{screen:"story",params:{item}}
  )}}
   >
    <View style={styles.Hicon}>
    <Image
      source={item.imgUrl}
      style={styles.Sicon}
      />
    <Text style={styles.Stxt}>{item.Username}</Text>
  </View>
  </TouchableOpacity>
  ))
}
  </ScrollView>

        </View>

        {/* posts */}
        { PostAdress.map((item)=>(
        <View style={styles.postSection}>
          <View style={styles.postHead}>
            <View style={styles.postHeadLeft}>
              <Image
                source={item.imgUrl}
                style={styles.postIcon}
              />
              <Text style={{fontSize:20}}>{item.Username}</Text>
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
            source={item.imgUrl  }
          />
          <View style={styles.postFooter}>
            <View style={styles.postRow}>
              <View style={styles.postLeft}>
                <TouchableOpacity onPress={likebtn}>
                  {" "}
                  <Image
                    style={styles.icon}
                    source={likeButton}
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
                    source={images.bookmark}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ paddingLeft: 10, gap: 10, marginTop: 10 }}>
              <Text style={styles.likeCount}>100 Likes</Text>
              <Text style={styles.caption}>
                {item.PostText} <Text style={{ color: "#000a" }}> !!</Text>
              </Text>
              <Text style={styles.commant}>View all commants </Text>
            </View>
          </View>
        </View> ))}
      </ScrollView>
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
    height: windowWidth-100,
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
    fontFamily:""
  },
  caption: { fontSize: 18 },
});
