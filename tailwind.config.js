/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        surfaceTint: "var(--surfaceTint)",
        onPrimary: "var(--onPrimary)",
        primaryContainer: "var(--primaryContainer)",
        onPrimaryContainer: "var(--onPrimaryContainer)",
        secondary: "var(--secondary)",
        onSecondary: "var(--onSecondary)",
        secondaryContainer: "var(--secondaryContainer)",
        onSecondaryContainer: "var(--onSecondaryContainer)",
        tertiary: "var(--tertiary)",
        onTertiary: "var(--onTertiary)",
        tertiaryContainer: "var(--tertiaryContainer)",
        onTertiaryContainer: "var(--onTertiaryContainer)",
        error: "var(--error)",
        onError: "var(--onError)",
        errorContainer: "var(--errorContainer)",
        onErrorContainer: "var(--onErrorContainer)",
        foreground: "var(--foreground)",
        background: "var(--background)",
        surface: "var(--surface)",
        onSurface: "var(--onSurface)",
        surfaceVariant: "var(--surfaceVariant)",
        onSurfaceVariant: "var(--onSurfaceVariant)",
        outline: "var(--outline)",
        outlineVariant: "var(--outlineVariant)",
        shadow: "var(--shadow)",
        scrim: "var(--scrim)",
        inverseSurface: "var(--inverseSurface)",
        inverseOnSurface: "var(--inverseOnSurface)",
        inversePrimary: "var(--inversePrimary)",
        primaryFixed: "var(--primaryFixed)",
        onPrimaryFixed: "var(--onPrimaryFixed)",
        primaryFixedDim: "var(--primaryFixedDim)",
        onPrimaryFixedVariant: "var(--onPrimaryFixedVariant)",
        secondaryFixed: "var(--secondaryFixed)",
        onSecondaryFixed: "var(--onSecondaryFixed)",
        secondaryFixedDim: "var(--secondaryFixedDim)",
        onSecondaryFixedVariant: "var(--onSecondaryFixedVariant)",
        tertiaryFixed: "var(--tertiaryFixed)",
        onTertiaryFixed: "var(--onTertiaryFixed)",
        tertiaryFixedDim: "var(--tertiaryFixedDim)",
        onTertiaryFixedVariant: "var(--onTertiaryFixedVariant)",
        surfaceDim: "var(--surfaceDim)",
        surfaceBright: "var(--surfaceBright)",
        surfaceContainerLowest: "var(--surfaceContainerLowest)",
        surfaceContainerLow: "var(--surfaceContainerLow)",
        surfaceContainer: "var(--surfaceContainer)",
        surfaceContainerHigh: "var(--surfaceContainerHigh)",
        surfaceContainerHighest: "var(--surfaceContainerHighest)",
      },

      padding: {
        4.5: `calc(var(--spacing) * 4.5)` /* 1.125rem = 18px */,
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        // Title1
        ".text-title1-bold": {
          fontSize: "72px",
          lineHeight: "90px",
          fontWeight: "700",
          letterSpacing: "-0.18px",
        },
        ".text-title1-medium": {
          fontSize: "72px",
          lineHeight: "90px",
          fontWeight: "500",
          letterSpacing: "-0.18px",
        },

        // Title2
        ".text-title2-bold": {
          fontSize: "48px",
          lineHeight: "60px",
          fontWeight: "700",
        },
        ".text-title2-medium": {
          fontSize: "48px",
          lineHeight: "60px",
          fontWeight: "500",
        },

        // Title3
        ".text-title3-bold": {
          fontSize: "30px",
          lineHeight: "36px",
          fontWeight: "700",
        },

        // Title4
        ".text-title4-semibold": {
          fontSize: "22px",
          lineHeight: "36px",
          fontWeight: "600",
        },

        // Title5
        ".text-title5-bold": {
          fontSize: "20px",
          lineHeight: "24px",
          fontWeight: "700",
        },

        // Body1
        ".text-body1-bold": {
          fontSize: "18px",
          lineHeight: "24px",
          fontWeight: "700",
        },
        ".text-body1-medium": {
          fontSize: "18px",
          lineHeight: "24px",
          fontWeight: "500",
        },

        // Body2
        ".text-body2-semibold": {
          fontSize: "15px",
          lineHeight: "20px",
          fontWeight: "600",
        },
        ".text-body2-medium": {
          fontSize: "15px",
          lineHeight: "20px",
          fontWeight: "500",
        },

        // Caption
        ".text-caption-regular": {
          fontSize: "12px",
          lineHeight: "18px",
          fontWeight: "400",
        },
        ".text-caption-medium": {
          fontSize: "12px",
          lineHeight: "18px",
          fontWeight: "500",
        },
        ".text-caption-semibold": {
          fontSize: "12px",
          lineHeight: "18px",
          fontWeight: "600",
        },
        ".text-caption-bold": {
          fontSize: "12px",
          lineHeight: "18px",
          fontWeight: "700",
        },
      });
    },
  ],
};
