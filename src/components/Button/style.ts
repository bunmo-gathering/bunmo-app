import { tv } from "tailwind-variants/lite";

const buttonStyle = tv({
  base: "rounded-lg items-center justify-center",
  variants: {
    variant: {
      primary: "bg-primary",
      secondary: "bg-secondary",
      disabled: "bg-surfaceContainer",
      destructive: "bg-error",
      border: "bg-surface border border-outline",
    },

    size: {
      sm: "px-3.5 py-2",
      md: "px-4.5 py-2.5",
      lg: "px-4.5 py-3",
      xl: "px-7 py-4",
    },

    flex: {
      true: "flex-1",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
    fontSize: "md",
    flex: false,
  },
});

const textStyle = tv({
  variants: {
    variant: {
      primary: "text-onPrimary",
      secondary: "text-onSecondary",
      disabled: "text-onSurface",
      destructive: "text-onError",
      border: "text-onSurface",
    },

    size: {
      sm: "text-body2-medium",
      md: "text-body1-bold",
      lg: "text-title5-bold",
      xl: "text-title4-semibold",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export { buttonStyle, textStyle };
