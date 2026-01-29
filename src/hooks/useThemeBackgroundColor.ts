import { useColorScheme } from "react-native";

/**
 * `className`으로 배경색을 지정할 수 없는 경우, 혹은  Native Component(View, Text ...)가 아닌 곳에서 배경색을 사용해야 할 때 사용합니다. (예: WebView)
 *
 * ---
 *
 * ```tsx
 * const backgroundColor = useThemeBackgroundColor();
 * <WebView style={{ backgroundColor }} />
 * ```
 *
 * ---
 *
 * @returns {string} 배경색 값 반환 (다크모드: #17130b, 라이트모드: #fff8f3)
 */

const useThemeBackgroundColor = () => {
  const colorScheme = useColorScheme();

  return colorScheme === "dark" ? "#17130b" : "#fff8f3";
};

export default useThemeBackgroundColor;
