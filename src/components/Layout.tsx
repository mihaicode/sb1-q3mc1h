import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Gallery } from '@/pages/Gallery';
import { About } from '@/pages/About';

export function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Navigation isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <main className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <div className="mx-auto max-w-[600px] px-6 py-8">
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}