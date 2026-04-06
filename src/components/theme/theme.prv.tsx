import { useEffect, useState, type ReactNode } from "react";
import { type Theme, ThemeContext } from "./theme.ctx";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("endea-theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    // This ensures light-dark() and color-scheme: light dark works perfectly
    // root.style.colorScheme = theme;
    localStorage.setItem("endea-theme", theme);
  }, [theme]);

  /**
   * Toggles the site theme
   * @returns {void}
   */
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
