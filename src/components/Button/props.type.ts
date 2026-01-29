import { GestureResponderEvent } from "react-native";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "disabled"
  | "destructive"
  | "border";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  flex?: boolean;

  children: string;

  onTap?: (e: GestureResponderEvent) => void;
}

export type { ButtonProps, ButtonSize };
