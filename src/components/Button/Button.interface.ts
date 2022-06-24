export interface ButtonProps {
  label: string;
  description: string;
  size: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: () => void;
  loading?: boolean;
}
