import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function Passport() {
  return <DiagramPage diagram={diagramsData['passport']} />;
}
