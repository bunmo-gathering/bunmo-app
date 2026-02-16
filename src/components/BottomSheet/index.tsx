import SelectBottomSheet from "@/src/app/(bottom-sheet)/Select";
import bottomSheetAtom from "@/src/store/bottomSheet";
import { useAtom } from "jotai";
import React from "react";
import { Pressable } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import bottomSheetAnimation from "./animate";
import bottomSheetStyle from "./style";

const BottomSheet = () => {
  const [bottomSheetState, setBottomSheetState] = useAtom(bottomSheetAtom);

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
      className={bottomSheetStyle.variants.container}
      entering={FadeIn.duration(200)}
      exiting={FadeOut.duration(200)}
    >
      {/* overlay */}
      <Pressable
        className={bottomSheetStyle.variants.overlay}
        onPress={() =>
          setBottomSheetState({
            ...bottomSheetState,
            visible: false,
          })
        }
      />

      {/* sheet */}
      <Animated.View
        className={bottomSheetStyle.variants.sheet}
        {...bottomSheetAnimation}
      >
        {renderBottomSheet()}
      </Animated.View>
    </Animated.View>
  );
};

export default BottomSheet;
