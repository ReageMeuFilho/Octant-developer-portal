import DocsLayout from "@/components/DocsLayoutNew";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Scene01Challenge from "./architecture/components/scenes/Scene01Challenge";
import Scene02ThreeSystems from "./architecture/components/scenes/Scene02ThreeSystems";
import Scene03VaultEngine from "./architecture/components/scenes/Scene03VaultEngine";
import Scene13DataFlow from "./architecture/components/scenes/Scene13DataFlow";
import Scene17CallToAction from "./architecture/components/scenes/Scene17CallToAction";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function ArchitectureTutorial() {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setProgress(latest * 100);
    });
  }, [scrollYProgress]);

  return (
    <DocsLayout>
      <div className="relative">
        {/* Fixed Progress Bar */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between mb-2">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Module 2: Interactive Architecture
              </Badge>
              <span className="text-sm text-muted-foreground">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-1" />
          </div>
        </div>

        {/* Hero Section */}
        <div className="pt-20 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Octant Architecture
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              An interactive journey through the system that turns treasury assets
              into continuous ecosystem funding while preserving capital.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>⏱️ 15 min read</span>
              <span>•</span>
              <span>📊 5 Interactive Scenes</span>
              <span>•</span>
              <span>🎓 Beginner Friendly</span>
            </div>
          </motion.div>
        </div>

        {/* Scenes */}
        <div className="space-y-0">
          <Scene01Challenge />
          <Scene02ThreeSystems />
          <Scene03VaultEngine />
          <Scene13DataFlow />
          <Scene17CallToAction />
        </div>

        {/* Coming Soon Notice */}
        <div className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">More Scenes Coming Soon</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              This interactive tutorial will expand to include 18 comprehensive scenes
              covering Dragon Protocol, Staking, Quadratic Funding, Security, Developer
              Experience, and more. Stay tuned!
            </p>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
