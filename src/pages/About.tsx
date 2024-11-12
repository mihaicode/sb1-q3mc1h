import { motion } from 'framer-motion';
import { Camera, Award, Users } from 'lucide-react';

export function About() {
  const stats = [
    {
      icon: Camera,
      value: '1000+',
      label: 'Photos Taken',
    },
    {
      icon: Award,
      value: '15+',
      label: 'Awards Won',
    },
    {
      icon: Users,
      value: '200+',
      label: 'Happy Clients',
    },
  ];

  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-8 text-3xl font-bold">About Me</h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              I'm a professional photographer with over 10 years of experience
              capturing life's most beautiful moments. My passion lies in creating
              stunning visual narratives that tell unique stories.
            </p>
            <p className="text-lg text-muted-foreground">
              Through my lens, I strive to capture the essence of every moment,
              whether it's a breathtaking landscape, an intimate portrait, or a
              lively event.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center justify-center rounded-lg bg-card p-6 text-center"
                >
                  <Icon className="mb-2 h-8 w-8" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}