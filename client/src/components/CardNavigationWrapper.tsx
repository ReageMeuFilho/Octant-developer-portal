import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CardNavigationWrapperProps {
  children: ReactNode[];
  totalScenes: number;
}

export default function CardNavigationWrapper({ children, totalScenes }: CardNavigationWrapperProps) {
  const [currentScene, setCurrentScene] = useState(0);
  const [direction, setDirection] = useState(0);

  const progress = ((currentScene + 1) / totalScenes) * 100;

  const nextScene = () => {
    if (currentScene < totalScenes - 1) {
      setDirection(1);
      setCurrentScene(currentScene + 1);
    }
  };

  const prevScene = () => {
    if (currentScene > 0) {
      setDirection(-1);
      setCurrentScene(currentScene - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextScene();
      } else if (e.key === 'ArrowLeft') {
        prevScene();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentScene]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full" style={{ minHeight: '700px' }}>
      {/* Progress Bar at Top */}
      <div className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border mb-6">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium">
              Scene {currentScene + 1} of {totalScenes}
            </div>
            <div className="text-sm text-muted-foreground">
              Use arrow keys or click to navigate
            </div>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Card Container */}
      <div className="relative overflow-hidden" style={{ minHeight: '600px' }}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentScene}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full"
          >
            {children[currentScene]}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        {currentScene > 0 && (
          <button
            onClick={prevScene}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 border-2 border-primary/20 hover:border-primary/40 flex items-center justify-center transition-all shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
        )}

        {currentScene < totalScenes - 1 && (
          <button
            onClick={nextScene}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 border-2 border-primary/20 hover:border-primary/40 flex items-center justify-center transition-all shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        )}
      </div>

      {/* Scene Indicators (dots) */}
      <div className="flex justify-center gap-2 py-8">
        {Array.from({ length: totalScenes }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentScene ? 1 : -1);
              setCurrentScene(index);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentScene
                ? 'bg-primary w-8'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to scene ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
