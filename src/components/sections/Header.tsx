import { NavLink } from "react-router-dom";
import { MainHeaderLinks } from "../../consts/links";
import { ThemeToggle } from "../UI/ThemeToggle";

export default function Header() {
  const linkClass =
    "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const activeClass = "bg-[var(--accent-bg)] text-[var(--accent)]";
  const inactiveClass =
    "text-[var(--text)] hover:bg-[var(--code-bg)] hover:text-[var(--text-h)]";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-281.5 items-center justify-between px-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center text-white font-bold">
          <img src="/logo.png" alt="Endea logo" />
          </div>
          <span className="text-lg font-semibold text-text-h tracking-tight">
            Endea
          </span>
        </div>
        <ThemeToggle />

        {/* Navigation */}
        <nav className="flex items-center gap-1">
          {MainHeaderLinks.map((link) =>
            link.external ? (
              /* External Link (Standard Anchor) */
              <a
                title={link.target}
                key={link.label}
                href={link.path}
                target={link.target || "_blank"}
                className={`${linkClass} ${inactiveClass}`}
              >
                {link.icon}
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            ) : (
              /* Internal Link (React Router) */
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : inactiveClass}`
                }
              >
                {link.icon}
                <span className="hidden sm:inline">{link.label}</span>
              </NavLink>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
