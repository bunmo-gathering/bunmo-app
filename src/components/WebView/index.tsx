import useBridge from "@/src/hooks/useBridge";
import useThemeBackgroundColor from "@/src/hooks/useThemeBackgroundColor";
import modalAtom from "@/src/store/modal";
import webViewRefAtom from "@/src/store/webview";
import { useAtom, useSetAtom } from "jotai";
import React, { useRef, useState } from "react";
import { View } from "react-native";
import { WebView as WebViewClient } from "react-native-webview";

const WebView = () => {
  const [loading, setLoading] = useState(true);
  const [modalState, setModalState] = useAtom(modalAtom);
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
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
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
