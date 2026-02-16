import SelectBottomSheet from "@/src/app/(bottom-sheet)/Select";
import bottomSheetAtom from "@/src/store/bottomSheet";
import clsx from "clsx";
import { useAtom } from "jotai";
import React from "react";
import { Pressable } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import bottomSheetAnimation from "./animate";

const BottomSheet = () => {
  const [bottomSheetState, setBottomSheetState] = useAtom(bottomSheetAtom);
  const { bottom } = useSafeAreaInsets();

  const renderBottomSheet = () => {
    if (!bottomSheetState.visible || !bottomSheetState.payload) return null;

    switch (bottomSheetState.variant) {
      case "SELECT":
        return (
          <SelectBottomSheet
            title={bottomSheetState.payload.title}
            selectOptions={bottomSheetState.payload.selectOptions}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Animated.View
      className="absolute w-full h-full z-50 items-center justify-end"
      entering={FadeIn.duration(200)}
      exiting={FadeOut.duration(200)}
    >
      <Pressable
        className="absolute opacity-50 bg-black w-full h-full"
        onPress={() =>
          setBottomSheetState({
            ...bottomSheetState,
            visible: false,
          })
        }
      />

      <Animated.View
        className={clsx("bg-surfaceContainer w-full pt-2 rounded-t-3xl")}
        {...bottomSheetAnimation}
      >
        {renderBottomSheet()}
      </Animated.View>
    </Animated.View>
  );
};

export default BottomSheet;
