import * as LucideIcons from "lucide-react-native";
import { cssInterop } from "nativewind";

const interopConfig = {
  className: {
    target: "style",
    nativeStyleToProp: {
      color: true,
      opacity: true,
      width: "size",
      height: "size",
    },
  },
} as const;

// 모든 Lucide 아이콘에 대해 cssInterop 적용
Object.values(LucideIcons).forEach((Icon) => {
  cssInterop(Icon as LucideIcons.LucideIcon, interopConfig);
});
