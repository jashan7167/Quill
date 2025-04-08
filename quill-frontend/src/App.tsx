import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NoteGridWrapper from "./components/NoteGridWrapper";
import { PageBackground } from "./components/ui/PageBackground";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  return (
    <Router>
      <PageBackground>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route 
            path="/" 
            element={
              <>
                <Navbar />
                <Hero />
                <NoteGridWrapper />
              </>
            } 
          />
        </Routes>
      </PageBackground>
    </Router>
  );
}

export default App;
