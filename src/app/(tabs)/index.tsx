import WebView from "@/src/components/WebView";
import "@/src/styles/global.css";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1">
      <WebView />
    </View>
  );
}
