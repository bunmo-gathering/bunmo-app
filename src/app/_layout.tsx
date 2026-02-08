import "@/src/styles/global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import Modal from "@/src/components/Modal";
import { useColorScheme } from "@/src/hooks/use-color-scheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import useModal from "../hooks/useModal";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { isOpen: isModalOpen } = useModal();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} /> */}
      </Stack>
      <StatusBar style="auto" />

      {isModalOpen && <Modal />}
    </ThemeProvider>
  );
}
