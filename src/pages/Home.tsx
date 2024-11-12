import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">
          Creative Portfolio
        </h1>
        <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
          Showcasing beautiful moments captured through my lens
        </p>
        <Link to="/gallery">
          <Button size="lg" className="font-semibold">
            View Gallery
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}