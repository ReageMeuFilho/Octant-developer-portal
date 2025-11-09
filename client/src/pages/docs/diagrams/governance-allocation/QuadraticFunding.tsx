import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function QuadraticFunding() {
  return <DiagramPage diagram={diagramsData['quadratic-funding']} />;
}
