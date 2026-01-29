interface ConfirmProps {
  title: string;
  message: string;

  buttonOprions?: {
    confirmText?: string;
    cancelText?: string;

    confirmCallback?: () => void;
    cancelCallback?: () => void;
  };
}

export type { ConfirmProps };
