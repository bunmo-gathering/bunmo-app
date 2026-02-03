import { useAtom } from "jotai";
import modalAtom from "../store/modal";

const useModal = () => {
  const [modal, setModal] = useAtom(modalAtom);

  const openModal = () => {};

  const closeModal = () => {
    setModal({
      ...modal,
      visible: false,
      variant: null,
      payload: null,
    });
  };

  const isOpen = modal.visible;

  return { closeModal, isOpen };
};

export default useModal;
