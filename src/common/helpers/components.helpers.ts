import { useSelector } from "react-redux";
import { BiThemedComponent, ReduxStore } from "../interfaces/theme.interfaces";

interface ComponentProps extends BiThemedComponent {
  className?: string | undefined;
}

export function useClasses(
  basename: string,
  props: ComponentProps,
  biThemed = true
): [string, any] {
  let forceIsDark = false;
  try {
    forceIsDark = useSelector((state: ReduxStore) => state.theme);
  } catch {}
  const { isPrimary, isDark, dimension, className, ...inherit } = props;
  const classes = [];
  if (className) classes.push(className);
  if (biThemed) {
    if (isPrimary === undefined) classes.push(`${basename}-primary`);
    else {
      if (isPrimary) classes.push(`${basename}-primary`);
      else classes.push(`${basename}-secondary`);
    }
  } else classes.push(basename);
  if (isDark || forceIsDark) classes.push("dark");
  if (dimension) classes.push(dimension);
  else classes.push("medium");
  return [classes.join(" "), inherit];
}
