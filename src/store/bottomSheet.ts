import { atom } from "jotai";
import { BottomSheetState } from "../types/bottomSheet";

const bottomSheetAtom = atom<BottomSheetState>({
  visible: false,
  variant: null,
  payload: null,
});

export default bottomSheetAtom;
