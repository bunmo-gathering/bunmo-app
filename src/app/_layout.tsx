import "@/src/libs/remapProps";
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
import BottomSheet from "../components/BottomSheet";
import useBottomSheet from "../hooks/useBottomSheet";
import useModal from "../hooks/useModal";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { isOpen: isModalOpen } = useModal();
  const { isOpen: isBottomSheetOpen } = useBottomSheet();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} /> */}
      </Stack>
      <StatusBar style="auto" />

      {isModalOpen && <Modal />}
      {isBottomSheetOpen && <BottomSheet />}
    </ThemeProvider>
  );
}
