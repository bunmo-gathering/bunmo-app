import { tv } from "tailwind-variants";

const buttonGroupStyle = tv({
  base: "flex flex-row gap-3",

  variants: {
    type: {
      normal: "",
      action: "w-full",
    },
  },

  defaultVariants: {
    type: "normal",
  },
});

export default buttonGroupStyle;
