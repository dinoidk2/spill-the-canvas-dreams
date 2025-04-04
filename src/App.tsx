
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import CursorTrail from "./components/CursorTrail";
import BrushStrokes from "./components/BrushStrokes";
import AnimatedPageTransition from "./components/AnimatedPageTransition";
import FloatingBlobs from "./components/FloatingBlobs";

const queryClient = new QueryClient();

// Check if we're running in the browser environment
const isBrowser = typeof window !== 'undefined';

// Define the App component
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="app-container">
          <BrushStrokes />
          <CursorTrail />
          <FloatingBlobs />
          <Navigation />
          <AnimatedPageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/hobbies" element={<Hobbies />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatedPageTransition>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Export the App component for normal React rendering
export default App;

// If we're running in a static HTML environment, don't render the React app
if (isBrowser && window.location.pathname.endsWith('.html')) {
  console.log('Running in static HTML mode, not initializing React app');
}
