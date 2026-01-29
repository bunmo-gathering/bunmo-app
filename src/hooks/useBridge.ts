import { useSetAtom } from "jotai";
import { RefObject } from "react";
import WebView, { WebViewMessageEvent } from "react-native-webview";
import { BridgePostEventToken } from "../constants/event";
import { getBridgeEventSegment } from "../libs/bridgeEvent";
import modalAtom from "../store/modal";
import { BridgeEvent } from "../types/bridgeEvnet";

const useBridge = (webViewRef: RefObject<WebView | null>) => {
  const modalState = useSetAtom(modalAtom);

  const getMessage = (event: WebViewMessageEvent) => {
    const response: BridgeEvent = JSON.parse(event.nativeEvent.data);

    const segments = getBridgeEventSegment(response.type);

    switch (segments.target) {
      case "MODAL":
        modalState({
          visible: segments.action === "OPEN" ? true : false,
          variant: segments.variant,
          content: response.payload,
        });
        break;

      default:
        break;
    }
  };

  const postMessage = (message: BridgePostEventToken) => {
    if (webViewRef.current == null) return;

    webViewRef.current.postMessage(
      JSON.stringify({
        type: message,
        payload: {
          title: "Modal Test",
          message: "이 동작은 분모 앱에서만 확인 가능합니다.",
        },
      }),
    );
  };

  return { getMessage, postMessage };
};

export default useBridge;
