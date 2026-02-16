import { SlideOutDown, SlideOutUp } from "react-native-reanimated";

const bottomSheetAnimation = {
  entering: SlideOutUp.duration(200),

  exiting: SlideOutDown.duration(200),
};

export default bottomSheetAnimation;
