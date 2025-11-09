import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function YieldSkimming() {
  return <DiagramPage diagram={diagramsData['yield-skimming']} />;
}
