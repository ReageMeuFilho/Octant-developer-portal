import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function PowerUser() {
  return <DiagramPage diagram={diagramsData['power-user']} />;
}
