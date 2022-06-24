type ColorName =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "teal"
  | "blue"
  | "purple"
  | "lavender"
  | "pink"
  | "tan"
  | "warm-grey"
  | "cool-grey";
type ColorValue = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800";
export type Color = `${ColorName}-${ColorValue}`;
