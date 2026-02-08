import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const useButtonAnimation = () => {
  const scale = useSharedValue(1);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const onPressIn = () => {
    scale.value = withSpring(0.95, {
      duration: 100,
    });
  };

  const onPressOut = () => {
    scale.value = withSpring(1, {
      duration: 100,
    });
  };

  return {
    style,
    onPressIn,
    onPressOut,
  };
};

export default useButtonAnimation;
