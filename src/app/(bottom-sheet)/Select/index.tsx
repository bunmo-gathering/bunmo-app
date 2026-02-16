import Label from "@/src/components/Label";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SelectBottomSheetProps } from "./props.type";

const SelectBottomSheet = ({
  title,
  selectOptions,
}: SelectBottomSheetProps) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={{ paddingBottom: bottom }} className={"pt-2"}>
      <View className="pt-2 px-5">
        <Text className="text-title5-bold">{title}</Text>

        <View className="pt-2 pb-4">
          {selectOptions.map((select) => (
            <Label
              key={select.label}
              icon={select.icon}
              variant={select.variant}
            >
              {select.label}
            </Label>
          ))}
        </View>
      </View>
    </View>
  );
};

export default SelectBottomSheet;
