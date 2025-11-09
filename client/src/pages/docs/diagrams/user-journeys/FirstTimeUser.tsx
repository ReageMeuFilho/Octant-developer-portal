import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function FirstTimeUser() {
  return <DiagramPage diagram={diagramsData['first-time-user']} />;
}
