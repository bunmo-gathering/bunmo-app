import { atom } from "jotai";
import { RefObject } from "react";
import WebView from "react-native-webview";

interface WebViewState {
  ref: RefObject<WebView | null>;
}

const webViewRefAtom = atom<WebViewState>({
  ref: { current: null },
});

export default webViewRefAtom;
