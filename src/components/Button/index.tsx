"use client";

import { ButtonProps } from "./props.type";
// import { motion } from "motion/react";
import { Pressable, Text } from "react-native";
// import buttonAnimation from "./animate";
import Animated from "react-native-reanimated";
import useButtonAnimation from "./animate";
import { buttonStyle, textStyle } from "./style";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Button = ({ variant, size, children, flex, onTap }: ButtonProps) => {
  const buttonAnimation = useButtonAnimation();

  return (
    <AnimatedPressable
      className={buttonStyle({
        variant,
        size,
        flex,
      })}
      onPress={onTap}
      // onPressIn={onPressIn}
      // onPressOut={onPressOut}
      // style={animatedStyle}
      {...buttonAnimation}
      // {...buttonAnimation}
    >
      <Text className={textStyle({ variant, size })}>{children}</Text>
    </AnimatedPressable>
  );
};

export default Button;
