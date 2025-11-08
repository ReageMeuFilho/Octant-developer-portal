import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function OctantVsTraditional() {
  return <DiagramPage diagram={diagramsData['octant-vs-traditional']} />;
}
