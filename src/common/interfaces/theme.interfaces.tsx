export interface Theme {
  isDark?: boolean;
}

export interface ThemedComponent extends Theme {
  dimension?: "small" | "medium" | "large";
}

export interface BiThemedComponent extends ThemedComponent {
  isPrimary?: boolean;
}

export interface ReduxStore {
  theme: boolean;
}
