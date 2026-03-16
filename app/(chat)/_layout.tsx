import { Stack } from "expo-router";

export default function ChatLayout() {
    return (
        <Stack>
            <Stack.Screen name="chat-screen" options={{ headerShown: false }} />
        </Stack>
    );
}