import { globalCss } from "./stitches.config";

import { palette } from "./tokens/colors";
import { spaces } from "./tokens/spaces";
import { fonts, fontSizes, fontWeights } from "./tokens/typography";

const global = {
  "*": {
    "box-sizing": "border-box",
  },
  "*:before": {
    "box-sizing": "border-box",
  },
  "*:after": {
    "box-sizing": "border-box",
  },
};

export const globalStyles = globalCss({
  ":root": {
    ...palette,
    ...spaces,
    ...fonts,
    ...fontSizes,
    ...fontWeights,
  },
  ...global,
});
