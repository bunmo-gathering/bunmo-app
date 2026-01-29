import Button from "@/src/components/Button";
import ButtonGroup from "@/src/components/ButtonGroup";
import IconButton from "@/src/components/IconButton";
import useBridge from "@/src/hooks/useBridge";
import modalAtom from "@/src/store/modal";
import webViewStore from "@/src/store/webview";
import { useAtom, useAtomValue } from "jotai";
import { Check } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import { ConfirmProps } from "./props.type";

const ConfirmModal = ({ title, message }: ConfirmProps) => {
  const [modalState, setModalState] = useAtom(modalAtom);
  const webViewRef = useAtomValue(webViewStore);
  const { postMessage } = useBridge(webViewRef.ref);

  return (
    <View className="justify-between items-center h-full">
      <View className="items-center gap-4">
        {/* Icon */}
        <IconButton variant="secondary">
          <Check className="text-onSecondary" />
        </IconButton>

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

      <View className="">
        <ButtonGroup type="action">
          <Button
            flex
            onTap={() => {
              postMessage("ACTION_CONFIRMED");
            }}
          >
            확인
          </Button>
          <Button
            flex
            onTap={() => {
              setModalState({ ...modalState, visible: false });
            }}
          >
            adsf
          </Button>
        </ButtonGroup>
      </View>
    </View>
  );
};

export default ConfirmModal;
