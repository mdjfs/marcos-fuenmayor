import { useSelector } from "react-redux";
import {
  BiThemedComponent,
  ReduxStore,
  ThemedComponent,
} from "../common/interfaces/theme.interfaces";

export const isGlobalDark = () => {
  try {
    return useSelector((state: ReduxStore) => state.theme);
  } catch {
    return false;
  }
};

export const useThemedClasses = (
  { isDark, dimension }: ThemedComponent,
  name: string = ""
): string => {
  let className = name ? [name] : [];
  if (isDark || isGlobalDark()) className.push("dark");
  if (dimension) className.push(dimension);
  else className.push("medium");
  return className.join(" ");
};

export const useBiThemedClasses = (
  { isDark, isPrimary, dimension }: BiThemedComponent,
  name: string
): string => {
  let className = [];
  if (isPrimary) className.push(`${name}-primary`);
  else className.push(`${name}-secondary`);
  const themedClasses = useThemedClasses({ isDark, dimension });
  className.push(themedClasses);
  return className.join(" ");
};
