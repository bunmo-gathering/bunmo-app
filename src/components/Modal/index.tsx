import AlertModal from "@/src/app/(modal)/Alert";
import ConfirmModal from "@/src/app/(modal)/Confirm";
import modalAtom from "@/src/store/modal";
import { useAtomValue } from "jotai";
import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import "../../libs/remapProps";
import modalAnimation from "./animate";
import modalStyle from "./style";

const Modal = () => {
  const modalState = useAtomValue(modalAtom);

  useEffect(() => {
    console.log(modalState.variant);
  }, [modalState]);

  return (
    <Animated.View
      className="absolute w-full h-full z-50 items-center justify-center"
      entering={FadeIn.duration(100)}
      exiting={FadeOut.duration(100)}
    >
      {/* overlay */}
      <View className="absolute opacity-50 bg-black w-full h-full" />

      <Animated.View className={modalStyle()} {...modalAnimation}>
        {modalState.variant === "CONFIRM" ? (
          <ConfirmModal
            title={modalState.content.title}
            message={modalState.content.message}
          />
        ) : modalState.variant === "ALERT" ? (
          <AlertModal />
        ) : (
          <></>
        )}
      </Animated.View>
    </Animated.View>
  );
};

export default Modal;
