import clsx from "clsx";
import { tv } from "tailwind-variants";

const modalStyle = tv({
  base: clsx(
    "bg-primaryContainer rounded-xl p-5 overflow-hidden",
    "max-w-[360px] w-[90%] h-[220px]",
  ),
});

export default modalStyle;
