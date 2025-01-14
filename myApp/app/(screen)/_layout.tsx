import { Stack } from "expo-router";

export default function route() {
    return(
        <Stack>
            <Stack.Screen name="signin" options={{headerShown:false}}/>
        </Stack>
    );
}