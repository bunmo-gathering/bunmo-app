import { tv } from "tailwind-variants";

const bottomSheetStyle = tv({
  variants: {
    container: "absolute w-full h-full z-50 items-center justify-end",

    overlay: "absolute opacity-50 bg-black w-full h-full",

    sheet: "bg-surfaceContainer w-full pt-2 rounded-t-3xl",
  },
});

export default bottomSheetStyle;
