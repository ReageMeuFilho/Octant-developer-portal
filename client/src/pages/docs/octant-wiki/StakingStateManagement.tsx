import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import DocsLayoutNew from "@/components/DocsLayoutNew";

export default function StakingStateManagement() {
  const [currentScene, setCurrentScene] = useState(1);
  const totalScenes = 2;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sceneHeight = windowHeight;

      const newScene = Math.min(
        totalScenes,
        Math.floor(scrollPosition / sceneHeight) + 1
      );
      setCurrentScene(newScene);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <DocsLayoutNew>
      <div className="max-w-4xl mx-auto space-y-16 py-8">

      {/* Scene 1: State Variables & Storage */}
      <section className="space-y-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              State Variables & Storage
            </h1>
            <h2 className="text-3xl font-semibold text-foreground">
              State Management
            </h2>
            <p className="text-xl text-muted-foreground">
              Detailed content for this scene will be added
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              This section will contain detailed explanations, diagrams, code examples, and interactive elements based on the JSON structure provided.
            </p>
          </div>

          <Card className="p-6 bg-yellow-500/10 border-yellow-500/30">
            <p className="text-sm">
              📝 <strong>Placeholder:</strong> Full content with Mermaid diagrams, comparison tables, code references, and detailed narratives will be implemented in the next phase.
            </p>
          </Card>

          <div className="flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
            <span className="text-sm">CONTINUE READING</span>
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>
      </section>
      {/* Scene 2: State Transitions */}
      <section className="min-h-screen flex flex-col justify-center py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              State Transitions
            </h1>
            <h2 className="text-3xl font-semibold text-foreground">
              State Management
            </h2>
            <p className="text-xl text-muted-foreground">
              Detailed content for this scene will be added
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              This section will contain detailed explanations, diagrams, code examples, and interactive elements based on the JSON structure provided.
            </p>
          </div>

          <Card className="p-6 bg-yellow-500/10 border-yellow-500/30">
            <p className="text-sm">
              📝 <strong>Placeholder:</strong> Full content with Mermaid diagrams, comparison tables, code references, and detailed narratives will be implemented in the next phase.
            </p>
          </Card>


        </div>
      </section>

    </div>
    </DocsLayoutNew>
  );
}
