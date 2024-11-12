import { Toaster } from '@/components/ui/sonner';
import { Layout } from '@/components/Layout';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Toaster />
    </BrowserRouter>
  );
}