import { Variant } from "./bridgeEvnet";

interface ModalState {
  visible: boolean;
  variant: Variant | null;
  content: any | null;
}

interface Confirm {
  title: string;
  message: string;
}

export type { Confirm, ModalState };
