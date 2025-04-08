import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[500px] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4">
        Create Notes{" "}
        <span className="block text-blue-500">Effortlessly</span>
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">
        Minimal, clean and fast — organize your thoughts with ease.
      </p>
      
      <div className="w-full max-w-xl relative">
        <input
          type="text"
          placeholder="Search or create a note..."
          className="
            w-full px-6 py-4 rounded-xl
            bg-white/10 dark:bg-zinc-800/50
            backdrop-blur-lg
            border border-white/10 dark:border-zinc-700/50
            text-black dark:text-white
            placeholder:text-zinc-500 dark:placeholder:text-zinc-400
            focus:outline-none focus:ring-2 focus:ring-blue-500/50
            transition-all duration-300
          "
        />
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 dark:text-zinc-400" />
      </div>
    </section>
  );
};

export default Hero;
