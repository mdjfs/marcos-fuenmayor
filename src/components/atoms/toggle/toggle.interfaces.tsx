export interface ToggleProps {
  dimension?: "small" | "medium" | "large";
  isPrimary?: boolean;
  isDark?: boolean;
  left: string;
  right: string;
  onToggle: (status: boolean) => void;
}
