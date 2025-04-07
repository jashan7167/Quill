import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
function App() {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <div className="w-full h-20 bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
          This box should change color on toggle
        </div>
      </div>
    </>
  );
}

export default App;
