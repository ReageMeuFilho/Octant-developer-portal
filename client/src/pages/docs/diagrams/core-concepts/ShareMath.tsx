import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function ShareMath() {
  return <DiagramPage diagram={diagramsData['share-math']} />;
}
