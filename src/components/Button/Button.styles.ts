import { styled } from "../../lib/stitches.config";

export const StyledButton = styled("button", {
  backgroundColor: "$--palette-blue-800",
  color: "$--palette-cool-grey-100",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "$--font-weight-3",

  "&:hover": {
    backgroundColor: "$--palette-purple-800",
    transition: "background-color 0.2s ease-in-out",
  },

  "&:disabled": {
    backgroundColor: "$--palette-cool-grey-500",
    cursor: "not-allowed",
  },

  variants: {
    size: {
      large: {
        padding: "$--space-3 $--space-8",
        fontSize: "18px",
      },
      medium: {
        padding: "$--space-3 $--space-7",
        fontSize: "15px",
      },
      small: {
        padding: "$--space-3 $--space-7",
        fontSize: "13px",
      },
    },
  },

  defaultVariants: {
    size: "large",
  },
});
