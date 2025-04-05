import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {


  return (
    <header
      className="
        fixed top-5 left-0 right-0 z-50
        backdrop-blur-md bg-background/70
      "
    >
      <div
        className="
    max-w-6xl mx-auto px-6 py-4
    flex items-center justify-between
    border rounded-xl shadow-md
    bg-white/60 dark:bg-slate-800/20
  "
      >
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold">Quill</h1>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button className="bg-white text-black dark:bg-blue-400" variant="outline">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
