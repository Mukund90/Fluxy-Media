import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components hamesha Capital letter se start honge (PascalCase)
// File paths hamesha small letters mein honge (lowercase)
import Index from "./pages/index";
import About from "./pages/about";
import Services from "./pages/services";
import Results from "./pages/results";
import Contact from "./pages/contact";
import NotFound from "./pages/notfound"; // Ye aapka custom error page hai

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/results" element={<Results />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Ye line sabse important hai custom error page ke liye */}
          {/* '*' ka matlab hai: agar upar wala koi bhi link match na ho, toh ye dikhao */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;