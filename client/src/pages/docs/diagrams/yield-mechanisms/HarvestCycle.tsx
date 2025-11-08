import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function HarvestCycle() {
  return <DiagramPage diagram={diagramsData['harvest-cycle']} />;
}
