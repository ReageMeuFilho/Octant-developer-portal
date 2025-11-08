import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function FactoryDeployment() {
  return <DiagramPage diagram={diagramsData['factory-deployment']} />;
}
