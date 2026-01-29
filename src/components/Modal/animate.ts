import { ZoomIn, ZoomOut } from "react-native-reanimated";

const modalAnimation = {
  entering: ZoomIn.springify()
    .damping(50)
    .stiffness(100)
    .duration(100)
    .withInitialValues({
      transform: [{ scale: 0.8 }],
    }),

  exiting: ZoomOut.springify().damping(15).stiffness(100),
};

export default modalAnimation;
