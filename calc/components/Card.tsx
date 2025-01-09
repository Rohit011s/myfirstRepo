import { card } from "@/interface/cardData";
import React from "react";
import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { View } from "react-native";

const shopCard=({ title,url,productName,oldPrice,finalPrice}:card) =>{
  return (
    <View style={styles.card}>
<Image
  source={{uri:url}}
  style={styles.img}
/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.productName}>{productName}</Text>
      <Text style={styles.oldPrice}>₹{oldPrice}</Text>
      <Text style={styles.finalPrice}>₹{finalPrice}</Text>
      <TouchableOpacity style={styles.addBtn}>+</TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    gap:2,
    overflow:"hidden",
    backgroundColor: "#fff",
    width: 200,
    borderRadius: 20,
    padding: 10,
    margin:3
  },
  img: {
    width: "100%",
    height: 190,
    resizeMode: "contain",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textTransform:"uppercase"
  },
  productName: {
    fontSize: 18,
    color: "#000a",
    fontWeight:'bold',

  },
  oldPrice: { fontSize:16,
    color:"#f00",
    textDecorationLine:"line-through"
  },
  finalPrice: {
    fontSize: 18,
    fontWeight:"bold",
    color:"#0c0",
  },
  addBtn: {
    width:40,
    height:40,
    backgroundColor:"#000",
    color:"#fff",
    fontSize:35,
    fontWeight:600,
    textAlign:"center",
    position:"absolute",
   bottom:0,
    right:0,
  },
});
export default shopCard;