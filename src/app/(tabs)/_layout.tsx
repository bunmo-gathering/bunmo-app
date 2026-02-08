import React from "react";

import { Colors } from "@/src/constants/theme";
import { useColorScheme } from "@/src/hooks/use-color-scheme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  Badge,
  Icon,
  Label,
  NativeTabs,
  VectorIcon,
} from "expo-router/unstable-native-tabs";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <NativeTabs
      minimizeBehavior="onScrollDown"
      tintColor={Colors[colorScheme ?? "light"].tint}
      disableTransparentOnScrollEdge
    >
      <NativeTabs.Trigger name="index">
        <Label>홈</Label>
        <Icon src={<VectorIcon family={MaterialIcons} name="home" />} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="coupang">
        <Label>쿠팡 혜택</Label>
        <Icon
          src={<VectorIcon family={MaterialIcons} name="shopping-cart" />}
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="message">
        <Label>채팅</Label>
        <Badge>58+</Badge>
        <Icon src={<VectorIcon family={MaterialIcons} name="chat" />} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="me">
        <Label>마이</Label>
        <Icon src={<VectorIcon family={MaterialIcons} name="person" />} />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
