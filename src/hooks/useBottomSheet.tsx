import { useAtom } from "jotai";
import bottomSheetAtom from "../store/bottomSheet";

const useBottomSheet = () => {
  const [bottomSheet, setBottomSheet] = useAtom(bottomSheetAtom);

  const openBottomSheet = () => {
    setBottomSheet({
      ...bottomSheet,
      visible: true,
    });
  };

  const closeBottomSheet = () => {
    setBottomSheet({
      ...bottomSheet,
      visible: false,
      variant: null,
      payload: null,
    });
  };

  const isOpen = bottomSheet.visible;

  return { openBottomSheet, closeBottomSheet, isOpen };
};

export default useBottomSheet;
