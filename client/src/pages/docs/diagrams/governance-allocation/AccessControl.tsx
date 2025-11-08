import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function AccessControl() {
  return <DiagramPage diagram={diagramsData['access-control']} />;
}
