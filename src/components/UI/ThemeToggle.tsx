import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl border border-border bg-social-bg text-text hover:text-accent transition-all active:scale-90 shadow-shadow"
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon: Visible in Light Mode */}
        <Sun 
          className={`absolute inset-0 transition-transform duration-500 ${
            theme === 'dark' ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`} 
          size={20} 
        />
        
        {/* Moon Icon: Visible in Dark Mode */}
        <Moon 
          className={`absolute inset-0 transition-transform duration-500 ${
            theme === 'light' ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`} 
          size={20} 
        />
      </div>
    </button>
  );
};