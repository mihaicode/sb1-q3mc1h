import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';

interface Image {
  id: number;
  url: string;
  title: string;
  description: string;
  category: string;
}

const images: Image[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
    title: 'Mountain Lake',
    description: 'Serene mountain lake at sunset',
    category: 'Nature',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1682687221038-404670f2f7ed',
    title: 'Urban Architecture',
    description: 'Modern architectural masterpiece',
    category: 'Architecture',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538',
    title: 'Desert Landscape',
    description: 'Vast desert landscape at dawn',
    category: 'Nature',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1',
    title: 'City Lights',
    description: 'Vibrant cityscape at night',
    category: 'Urban',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1682695797221-8164ff1fafc9',
    title: 'Forest Path',
    description: 'Mystical path through ancient forest',
    category: 'Nature',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f',
    title: 'Modern Interior',
    description: 'Contemporary minimalist design',
    category: 'Architecture',
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...new Set(images.map(img => img.category))];
  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="py-12">
      <div className="mb-12 flex flex-col items-center space-y-6">
        <div className="text-center">
          <h1 className="mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
            Photography Portfolio
          </h1>
          <p className="text-lg text-muted-foreground">
            A curated collection of captivating moments
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium shadow-sm transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-primary/20'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      <motion.div 
        className="grid grid-cols-1 gap-8"
        layout
      >
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            layout
          >
            <div
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md transition-shadow hover:shadow-xl"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="h-72 w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-full flex-col items-center justify-end p-6 text-center">
                  <h3 className="text-2xl font-semibold text-white">
                    {image.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/90">
                    {image.description}
                  </p>
                  <span className="mt-3 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        {selectedImage && (
          <DialogContent className="max-w-[90vw] sm:max-w-[80vw] md:max-w-[1200px]">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedImage.title}</DialogTitle>
              <DialogDescription className="text-base">
                {selectedImage.description}
              </DialogDescription>
            </DialogHeader>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full rounded-lg shadow-lg"
            />
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}