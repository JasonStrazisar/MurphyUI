import React from "react";
import { AvatarProps } from "./Avatar.interface";
import { StyledAvatar, StyledAvatarImage } from "./Avatar.styles";
import { getInitials, useLoaded } from "../utils";

const Avatar = ({
  src,
  srcSet,
  imgProps,
  name,
  forceShowInitials,
  background = "blue-700",
  textColor = "light",
}: AvatarProps) => {
  const loaded = useLoaded({ ...imgProps, src, srcSet });
  const hasImg = src || srcSet;
  const hasImageNotFailing = hasImg && loaded !== "error";
  const initials = getInitials(name);
  const cssOverrides = {
    backgroundColor: `$--palette-${background}`,
    color:
      textColor === "light"
        ? "$--palette-cool-grey-100"
        : "$--palette-cool-grey-800",
  };

  let children: string | object = initials;

  if (hasImageNotFailing && !forceShowInitials) {
    children = <StyledAvatarImage alt={name} src={src} srcSet={srcSet} />;
  }

  return <StyledAvatar css={cssOverrides}>{children}</StyledAvatar>;
};

export default Avatar;
