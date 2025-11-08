import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function LossScenario() {
  return <DiagramPage diagram={diagramsData['loss-scenario']} />;
}
