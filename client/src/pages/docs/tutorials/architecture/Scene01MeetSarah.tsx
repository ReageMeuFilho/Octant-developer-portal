import { motion } from 'framer-motion';

export default function Scene01MeetSarah() {
  return (
    <div className="flex items-center justify-center w-full h-full px-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Portrait */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex justify-center mb-8"
        >
          <div className="w-64 h-64 rounded-full overflow-hidden bg-primary/10 border-4 border-primary/20 shadow-2xl">
            <img
              src="/sarah-chen-portrait.png"
              alt="Sarah Chen"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Meet Sarah Chen
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground"
        >
          Head of Endowment, Global Water Initiative
        </motion.p>

        {/* Key Fact */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-2xl md:text-3xl"
        >
          She manages a{' '}
          <span className="text-primary font-bold bg-primary/10 px-4 py-2 rounded-lg">
            $50 million
          </span>{' '}
          endowment.
        </motion.div>

        {/* Mission */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Her mission: Provide clean water to 10 million people by 2030.
        </motion.p>

        {/* Navigation Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="pt-8"
        >
          <p className="text-sm text-muted-foreground">
            Click the arrow or press → to see her challenge
          </p>
        </motion.div>
      </div>
    </div>
  );
}
