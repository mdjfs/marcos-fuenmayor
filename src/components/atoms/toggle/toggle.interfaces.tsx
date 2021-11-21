import { BiThemedComponent } from "../../../common/interfaces/theme.interfaces";

export interface ToggleProps extends BiThemedComponent {
  left: string | JSX.Element;
  right: string | JSX.Element;
  defaultStatus?: boolean;
  onToggle?: (status: boolean) => void;
}
