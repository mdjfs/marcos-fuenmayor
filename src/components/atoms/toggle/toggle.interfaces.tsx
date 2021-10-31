import { BiThemedComponent } from "../../../common/interfaces/theme.interfaces";

export interface ToggleProps extends BiThemedComponent {
  left: string;
  right: string;
  onToggle: (status: boolean) => void;
}
