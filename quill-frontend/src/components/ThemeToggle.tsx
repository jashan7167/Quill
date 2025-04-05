import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="flex items-center gap-2 p-1 rounded-full bg-white/70 dark:bg-slate-800/60 shadow-inner backdrop-blur-md transition-all">
      <Sun
        className={`w-5 h-5 transition-colors ${
          !isDark ? "text-blue-500" : "text-white/70"
        }`}
      />
      <div className="relative w-10 h-5">
        <Switch
          checked={isDark}
          onCheckedChange={toggleTheme}
          className="appearance-none w-full h-full rounded-full bg-zinc-300 dark:bg-zinc-600 focus:outline-none"
        />
        <div
          className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-350 ${
            isDark ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </div>
      <Moon
        className={`w-5 h-5 transition-colors ${
          isDark ? "text-blue-500" : "text-white/70"
        }`}
      />
    </div>
  );
}
