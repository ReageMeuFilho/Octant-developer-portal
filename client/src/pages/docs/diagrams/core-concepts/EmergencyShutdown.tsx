import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function EmergencyShutdown() {
  return <DiagramPage diagram={diagramsData['emergency-shutdown']} />;
}
