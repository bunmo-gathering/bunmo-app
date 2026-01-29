import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <Text className="text-onPrimaryContainer">Me Screen</Text>
    </SafeAreaView>
  );
};

export default MeScreen;
