import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function YieldGeneration() {
  return <DiagramPage diagram={diagramsData['yield-generation']} />;
}
