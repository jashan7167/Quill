import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    //not working right now will fix in the future
    setTheme(isDark ? "dark" : "light");
   
  };

  return (
    <div className="flex items-center gap-2 p-1 rounded-full bg-white/70 dark:bg-slate-800/60 shadow-inner backdrop-blur-md transition-all">
      <Sun
        className={`w-5 h-5 transition-colors ${
          !isDark ? "text-blue-500" : "text-white/70"
        }`}
      />
      <button
        onClick={toggleTheme}
        className="relative w-10 h-5 rounded-full bg-zinc-300 dark:bg-zinc-600 transition-colors"
      >
        <span
          className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 ${
            isDark ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
      <Moon
        className={`w-5 h-5 transition-colors ${
          isDark ? "text-blue-500" : "text-white/70"
        }`}
      />
    </div>
  );
}
