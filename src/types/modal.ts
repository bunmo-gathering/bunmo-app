import { Variant } from "./bridgeEvnet";

interface ModalData {
  title: string;
  message: string;

  buttonOptions?: ButtonOptions;
}

interface ButtonOptions {
  confirmText?: string;
  cancelText?: string;
}

interface ConfirmModalData extends ModalData {
  buttonOptions?: Pick<ButtonOptions, "confirmText" | "cancelText">;
}

interface AlertModalData extends ModalData {
  buttonOptions?: Pick<ButtonOptions, "confirmText">;
}

interface ModalState {
  visible: boolean;
  variant: Variant | null;
  payload: ConfirmModalData | AlertModalData | null;
}

export type { AlertModalData, ConfirmModalData, ModalState };
