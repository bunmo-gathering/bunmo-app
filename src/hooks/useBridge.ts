import { useSetAtom } from "jotai";
import { RefObject } from "react";
import WebView, { WebViewMessageEvent } from "react-native-webview";
import { getBridgeEventSegment } from "../libs/bridgeEvent";
import bottomSheetAtom from "../store/bottomSheet";
import modalAtom from "../store/modal";
import { BridgeEvent } from "../types/bridgeEvnet";

const useBridge = (webViewRef: RefObject<WebView | null>) => {
  const modalState = useSetAtom(modalAtom);
  const bottomSheetState = useSetAtom(bottomSheetAtom);

  const getMessage = (event: WebViewMessageEvent) => {
    const response: BridgeEvent = JSON.parse(event.nativeEvent.data);

    const segments = getBridgeEventSegment(response.type);

    switch (segments.target) {
      case "MODAL":
        modalState({
          visible: segments.action === "OPEN" ? true : false,
          variant: segments.variant,
          payload: response.payload,
        });
        break;

      case "BOTTOMSHEET":
        bottomSheetState({
          visible: segments.action === "OPEN" ? true : false,
          variant: segments.variant,
          payload: response.payload,
        });
        break;

      default:
        break;
    }
  };

  const postMessage = ({ type, payload }: BridgeEvent) => {
    if (webViewRef.current == null) return;

    webViewRef.current.postMessage(
      JSON.stringify({
        type: type,
        payload: payload,
      }),
    );
  };

  return { getMessage, postMessage };
};

export default useBridge;
