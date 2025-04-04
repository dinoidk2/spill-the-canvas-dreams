import { Route, Routes, HashRouter, Navigate } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

import Home from './pages/Home';
import Profile from './pages/Profile';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';
import AnimatedPageTransition from './components/AnimatedPageTransition';
import CursorTrail from './components/CursorTrail';

function App() {

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light">
        <HashRouter>
          <CursorTrail /> {/* Add cursor trail to the entire app */}
          <Toaster />
          <AnimatedPageTransition>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/hobbies" element={<Hobbies />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatedPageTransition>
        </HashRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
