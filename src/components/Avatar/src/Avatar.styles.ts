import { styled } from "../../../lib/stitches.config";
import { Box } from "../..";

export const StyledAvatar = styled(Box, {
  width: "$--space-10",
  height: "$--space-10",
  borderRadius: "50%",
  fontSize: "13px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "sans-serif",
  fontWeight: "$--font-weight-2",
});

export const StyledAvatarImage = styled("img", {
  width: "$--space-10",
  height: "$--space-10",
  borderRadius: "50%",
  textAlign: "center",
  objectFit: "cover",
  textIndent: 10000,
});
