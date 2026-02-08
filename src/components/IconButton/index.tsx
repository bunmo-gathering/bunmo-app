"use client";

import { LucideType } from "lucide-react-native";
import { isValidElement } from "react";
import { Pressable } from "react-native";
import { IconButtonProps } from "./props.type";
import iconButtonStyle from "./style";

const IconButton = ({ variant, size, children, onTap }: IconButtonProps) => {
  if (isValidElement(children)) {
    if (typeof children.type !== typeof LucideType)
      throw new Error(
        "IconButton의 자식은 LucideIcon 컴포넌트 외 사용할 수 없습니다.",
      );
  }

  return (
    <Pressable
      className={iconButtonStyle({
        variant,
        size,
      })}
      onPress={onTap}
      // {...iconButtonAnimation}
    >
      {children}
    </Pressable>
  );
};

export default IconButton;
