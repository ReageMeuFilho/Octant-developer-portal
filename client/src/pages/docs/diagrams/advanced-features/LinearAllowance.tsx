import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function LinearAllowance() {
  return <DiagramPage diagram={diagramsData['linear-allowance']} />;
}
