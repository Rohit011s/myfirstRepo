import { Tabs } from 'expo-router';
import React from 'react';
import { Platform ,Image } from 'react-native';
import images from '@/constants/ConstImg';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>  
      <Tabs.Screen
        name="homei"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Image 
          style={{backgroundColor: 'transparent', width: 28, height: 28}}
          source={images.home}
           />, 
        
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Image 
          style={{backgroundColor: 'transparent', width: 28, height: 28}}
          source={require("../../assets/images/profile.png")}
           />,
        }}
      />
    </Tabs>
  );
}
