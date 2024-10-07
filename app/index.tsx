import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import { Stack } from "expo-router";
import SplashScreen from "../components/SplashScreen";

const MainContent = () => (
  <View className="flex-1 justify-center items-center">
    <Text className="text-2xl font-pbold">Copracess</Text>
    <Link href="/home">
      <Text className="text-blue-500">Go to Home</Text>
    </Link>
    <Link href="/signIn">
      <Text className="text-blue-500">Go to SignIn</Text>
    </Link>
    <Link href="/signUp">
      <Text className="text-blue-500">Go to SignUp</Text>
    </Link>
  </View>
);

export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      {isSplashVisible ? (
        <SplashScreen onFinish={() => setIsSplashVisible(false)} />
      ) : (
        <MainContent />
      )}
    </>
  );
}
