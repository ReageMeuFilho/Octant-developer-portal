import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function CloneDeployment() {
  return <DiagramPage diagram={diagramsData['clone-deployment']} />;
}
