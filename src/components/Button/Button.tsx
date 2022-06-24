import React from "react";
import { ButtonProps } from "./Button.interface";
import { StyledButton } from "./Button.styles";

const Button = ({
  label,
  description,
  size,
  disabled,
  onClick,
  loading,
}: ButtonProps) => (
  <StyledButton
    size={size}
    disabled={disabled}
    onClick={onClick}
    aria-label={description}
  >
    {label}
  </StyledButton>
);

export default Button;
