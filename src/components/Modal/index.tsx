import AlertModal from "@/src/app/(modal)/Alert";
import ConfirmModal from "@/src/app/(modal)/Confirm";
import modalAtom from "@/src/store/modal";
import { useAtomValue } from "jotai";
import React from "react";
import { View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import "../../libs/remapProps";
import modalAnimation from "./animate";
import modalStyle from "./style";

const Modal = () => {
  const modalState = useAtomValue(modalAtom);

  const renderModal = () => {
    if (!modalState.visible || !modalState.payload) return null;

    switch (modalState.variant) {
      case "CONFIRM":
        return (
          <ConfirmModal
            title={modalState.payload.title}
            message={modalState.payload.message}
            buttonOptions={modalState.payload?.buttonOptions}
          />
        );
      case "ALERT":
        return (
          <AlertModal
            title={modalState.payload.title}
            message={modalState.payload.message}
            buttonOptions={modalState.payload.buttonOptions}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Animated.View
      className="absolute w-full h-full z-50 items-center justify-center"
      entering={FadeIn.duration(100)}
      exiting={FadeOut.duration(100)}
    >
      {/* overlay */}
      <View className="absolute opacity-50 bg-black w-full h-full" />

      {/* modal */}
      <Animated.View className={modalStyle()} {...modalAnimation}>
        {renderModal()}
      </Animated.View>
    </Animated.View>
  );
};

export default Modal;
