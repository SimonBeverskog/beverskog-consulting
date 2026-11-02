import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Index from './pages/Index';
import ServicePage from './pages/ServicePage';
import ServicesPage from './pages/ServicesPage';
import CareerPage from './pages/CareerPage';
import NotFound from './pages/NotFound';
import CanonicalUrl from './components/CanonicalUrl';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg"
        >
          Hoppa till huvudinnehållet
        </a>
        <ScrollToTop />
        <CanonicalUrl />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/tjanster' element={<ServicesPage />} />
          <Route path='/tjanster/:slug' element={<ServicePage />} />
          <Route path='/karriar' element={<CareerPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
