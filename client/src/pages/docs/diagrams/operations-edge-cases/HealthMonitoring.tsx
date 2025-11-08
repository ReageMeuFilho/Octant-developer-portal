import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function HealthMonitoring() {
  return <DiagramPage diagram={diagramsData['health-monitoring']} />;
}
