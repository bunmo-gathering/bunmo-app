import useBridge from "@/src/hooks/useBridge";
import useThemeBackgroundColor from "@/src/hooks/useThemeBackgroundColor";
import webViewRefAtom from "@/src/store/webview";
import { useSetAtom } from "jotai";
import React, { useRef } from "react";
import { View } from "react-native";
import { WebView as WebViewClient } from "react-native-webview";

const WebView = () => {
  const backgroundColor = useThemeBackgroundColor();
  const webViewRef = useRef<WebViewClient>(null);
  const setWebViewRef = useSetAtom(webViewRefAtom);
  const { getMessage } = useBridge(webViewRef);

  return (
    <View className="flex-1">
      <WebViewClient
        ref={webViewRef}
        source={{
          uri: `${"http://localhost:3000"}`,
        }}
        style={{
          backgroundColor: backgroundColor,
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        contentInsetAdjustmentBehavior="automatic"
        onTouchStart={() => {
          setWebViewRef({ ref: webViewRef });
        }}
        onMessage={(e) => {
          getMessage(e);
        }}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn("WebView error: ", nativeEvent);
        }}
      />
    </View>
  );
};

export default WebView;
