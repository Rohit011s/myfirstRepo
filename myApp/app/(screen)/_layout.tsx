import { Stack } from "expo-router";

export default function route() {
    return(
        
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="signin" options={{headerShown:false}}/>
            <Stack.Screen name="story" options={{headerShown:false}}/>
        </Stack>
    );
}