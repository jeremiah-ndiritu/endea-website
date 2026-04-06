import { useLayoutEffect, useState, type ReactNode } from "react";
import { type Theme, ThemeContext } from "./theme.ctx";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Initial check: matches the blocking script in index.html
    const saved = localStorage.getItem("endea-theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // useLayoutEffect runs BEFORE the browser paints, preventing the "flash"
  useLayoutEffect(() => {
    const root = window.document.documentElement;

    // 1. Update Classes
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    // 2. Update CSS Property (Critical for light-dark() function)
    root.style.setProperty("color-scheme", theme);

    // 3. Persist
    localStorage.setItem("endea-theme", theme);

    console.log(`Theme synced to DOM: ${theme}`); // Debugging line
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
