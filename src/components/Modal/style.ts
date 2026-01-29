import clsx from "clsx";
import { tv } from "tailwind-variants";

const modalStyle = tv({
  base: clsx(
    "bg-primaryContainer rounded-xl p-5 overflow-hidden",
    // "absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[50%]",
    "max-w-[360px] w-[90%] h-[220px]",
  ),
});

export default modalStyle;
