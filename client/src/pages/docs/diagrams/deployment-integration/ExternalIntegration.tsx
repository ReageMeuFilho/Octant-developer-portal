import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function ExternalIntegration() {
  return <DiagramPage diagram={diagramsData['external-integration']} />;
}
