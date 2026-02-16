import clsx from "clsx";
import * as LucideIcons from "lucide-react-native";
import React from "react";
import { Pressable, Text } from "react-native";
import { LabelProps } from "./props.type";
import labelStyle from "./style";

type IconComponent = React.ComponentType<{ className?: string; size?: number }>;

const Label = ({
  icon,
  onTap,
  variant = "default",
  children,
  block = false,
}: LabelProps) => {
  const Icon =
    typeof icon === "string"
      ? (LucideIcons as unknown as Record<string, IconComponent>)[icon]
      : (icon as IconComponent);

  return (
    <Pressable className={labelStyle.variants.container} onPress={onTap}>
      {/* Icon 색상 바꾸기 */}
      {Icon && (
        <Icon
          className={clsx("w-5 h-5", labelStyle.variants.variant[variant])}
        />
      )}

      <Text
        className={clsx(
          labelStyle.variants.variant[variant],
          block && labelStyle.variants.block,
        )}
      >
        {children}
      </Text>
    </Pressable>
  );
};

export default Label;
