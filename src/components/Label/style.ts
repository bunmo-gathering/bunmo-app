import clsx from "clsx";
import { tv } from "tailwind-variants";

const labelStyle = tv({
  variants: {
    container: clsx("flex flex-row", "items-center", "gap-3 py-2.5"),

    variant: {
      default: clsx("text-onSurfaceVariant", "text-body2-medium"),
      destructive: clsx("text-error", "text-body2-medium"),
    },

    block: "w-fit",
  },
});

export default labelStyle;
