const Hero = () => {
  return (
    <section
      className="
        min-h-screen flex flex-col items-center justify-center text-center
        bg-gradient-to-br 
        from-[#f8faff] via-[#edf1fd] to-[#e6ebff]
        dark:from-[#0f0f11] dark:via-[#1a1a1d] dark:to-[#2a2a2e]
        text-black dark:text-white
        transition-colors duration-500
      "
    >
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">
          Create Notes{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Effortlessly
          </span>
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
          Minimal, clean and fast — organize your thoughts with ease.
        </p>

        {/* Search-like Input */}
        <div className="relative w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search or create a note..."
            className="
              w-full px-5 py-3 rounded-full
              bg-white/60 dark:bg-zinc-800/60
              shadow-xl backdrop-blur-md
              placeholder:text-zinc-500 dark:placeholder:text-zinc-400
              border border-zinc-200 dark:border-zinc-700
              focus:outline-none focus:ring-2 focus:ring-blue-500
              transition-all duration-300
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
