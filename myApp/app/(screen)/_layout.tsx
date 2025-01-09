import { Stack } from "expo-router";

export default function route() {
    return(
        <Stack>
            <Stack.Screen name="profile" options={{headerShown:false}}/>
        </Stack>
    );
}