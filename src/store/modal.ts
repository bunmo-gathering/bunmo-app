import { atom } from "jotai";
import { ModalState } from "../types/modal";

const modalAtom = atom<ModalState>({
  visible: false,
  variant: null,
  content: null,
});

export default modalAtom;
