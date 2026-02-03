import Button from "@/src/components/Button";
import ButtonGroup from "@/src/components/ButtonGroup";
import useBridge from "@/src/hooks/useBridge";
import useModal from "@/src/hooks/useModal";
import webViewRefAtom from "@/src/store/webview";
import { useAtomValue } from "jotai";
import React from "react";
import { Text, View } from "react-native";
import { AlertProps } from "./props.type";

const AlertModal = ({ title, message, buttonOptions }: AlertProps) => {
  const webViewRef = useAtomValue(webViewRefAtom);
  const { postMessage } = useBridge(webViewRef.ref);
  const { closeModal } = useModal();

  return (
    <View className="justify-between items-center h-full">
      <View className="items-center gap-4">
        {/* Information */}
        <View className="flex items-center gap-2">
          <Text className="text-title4-semibold text-onPrimaryContainer">
            {title}
          </Text>
          <Text className="text-body2-medium text-onPrimaryContainer">
            {message}
          </Text>
        </View>
      </View>

      <View>
        <ButtonGroup type="action">
          <Button
            flex
            onTap={() => {
              postMessage({ type: "ACTION_CONFIRMED" });
              closeModal();
            }}
          >
            {buttonOptions?.confirmText || "확인"}
          </Button>
        </ButtonGroup>
      </View>
    </View>
  );
};

export default AlertModal;
