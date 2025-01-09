import React from "react";
import Card from "../../components/Card";
import { FlatList, View } from "react-native";
import cardData from "@/interface/cardData";
import { ScrollView } from "react-native-gesture-handler";
let data=cardData;
export default function ExploreApp() {
  const image =
    "https://books.google.co.in/books/publisher/content?id=_ZOvEAAAQBAJ&pg=PA1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U07Nf7ty1PqB-A6wPoezpNnQj-27w&w=1280";
  return (
    <>
    <ScrollView >

    {
      
      data.map((item)=>( 
        <Card
        title={item.title}
        productName={item.productName}
        
        oldPrice={item.oldPrice}
        finalPrice={item.finalPrice}
        url={item.url}
        />
      ) 
    )    }
    </ScrollView>
    </>
  );
}
