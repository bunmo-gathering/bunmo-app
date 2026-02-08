import { LucideProps } from "lucide-react-native";
import { ReactElement } from "react";
import { GestureResponderEvent } from "react-native";

type IconButtonVariant = "primary" | "secondary";
type IconButtonSize = "sm" | "md" | "lg";

interface IconButtonProps {
  /**
   * 컴포넌트 스타일 설정
   */
  variant?: IconButtonVariant;
  /**
   * 컴포넌트 크기 설정
   */
  size?: IconButtonSize;
  /**
   * 컴포넌트의 자식 요소
   * - `LucideIcon` 컴포넌트를 children으로 받음
   */
  children: ReactElement<LucideProps>;
  /**
   * 컴포넌트 클릭 시 실행되는 함수
   */
  onTap?: (e: GestureResponderEvent) => void;
}

export type { IconButtonProps };
