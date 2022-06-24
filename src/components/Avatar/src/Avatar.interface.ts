import { Color } from "../../../lib/tokens/tokens.types";

export interface AvatarProps {
  name: string;
  src?: string;
  srcSet?: string;
  imgProps?: object;
  forceShowInitials?: boolean;
  background?: Color;
  textColor?: "light" | "dark";
}

export interface ImageLoadedProps {
  src?: string;
  srcSet?: string;
}
