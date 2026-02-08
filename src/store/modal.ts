import { atom } from "jotai";
import { ModalState } from "../types/modal";

const modalAtom = atom<ModalState>({
  visible: false,
  variant: null,
  payload: null,
});

export default modalAtom;
