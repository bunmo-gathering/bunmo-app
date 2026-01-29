import { Check } from "lucide-react-native";
import { cssInterop } from "nativewind";

cssInterop(Check, {
  className: {
    target: "style",
    nativeStyleToProp: {
      color: true,
      opacity: true,
      width: "size",
      height: "size",
    },
  },
});
