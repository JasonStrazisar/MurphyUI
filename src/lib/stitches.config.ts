import { createStitches, CSS as StitchesCSS } from "@stitches/react";
import { palette } from "./tokens/colors";
import { spaces } from "./tokens/spaces";
import { fonts, fontSizes, fontWeights } from "./tokens/typography";
import { shadows } from "./tokens/shadows";

const { config, css, getCssText, globalCss, keyframes, styled, theme } =
  createStitches({
    theme: {
      colors: palette,
      space: spaces,
      fonts: fonts,
      fontSizes: fontSizes,
      fontWeights: fontWeights,
      shadows: shadows,
      sizes: spaces,
    },
  });

export type CSS = StitchesCSS<typeof config>;
export type { VariantProps } from "@stitches/react";

export { shadows } from "./tokens/shadows";
export { config, css, getCssText, globalCss, keyframes, styled, theme };
