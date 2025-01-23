import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Image, Text, TextInput, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { Dimensions } from 'react-native';
import { useNavigation } from 'expo-router';
import images from '@/constants/ConstImg';
export default function story () {

  const route = useRoute<RouteProp<{params: {item: any}}, 'params'>>();
  const {Sdata}=route.params.item;
    console.log(Sdata);
const nav=useNavigation();
useEffect(()=>{nav.setOptions({headerShown:false})},[]);

const widthW = Dimensions.get('window').width;
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={{flexDirection:"row",justifyContent:"flex-start",gap:10,alignItems:"center",position:"absolute",zIndex:1,top:0,width:"100%",}}>
          <Image style={{width:50,height:50,borderRadius:50}} source={route.params.item.Story.StoryImg}/>
          <Text style={{fontSize: 20, fontWeight: 'bold', color:"white"}}>{route.params.item.Username}</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', color:"white"}}>{route.params.item.Story.Time} h ago</Text>
          </View>
          <View style={{width:"100%",height:"90%"}}>
          <Image style={{width:"100%",height:"100%",resizeMode:"contain"}} source={route.params.item.Story.StoryImg}/>
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-between",width:"98%",height:50}}>
          <TouchableOpacity ><Image source={images.like} style={{tintColor:"white" ,height:50,width:50}}/></TouchableOpacity>
          <TextInput style={{borderColor:"white",borderRadius:10,borderWidth:1,height:50,width:widthW-150}}></TextInput>
          <TouchableOpacity ><Image source={images.share} style={{tintColor:"white" ,height:50,width:50}}/></TouchableOpacity>

          </View>
            {/* <Image style={{width:500,height:500}} source={route.params.item.Story.StoryImg}/> */}
        </View>
  )
}


