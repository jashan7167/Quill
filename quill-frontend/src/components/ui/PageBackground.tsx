import { cn } from "@/lib/utils";

interface PageBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export const PageBackground = ({ children, className }: PageBackgroundProps) => {
  return (
    <div
      className={cn(
        "min-h-screen w-full",
        "bg-gradient-to-br",
        "from-zinc-900 via-zinc-900 to-zinc-800",
        "text-white",
        "transition-all duration-500",
        className
      )}
    >
      {children}
    </div>
  );
};