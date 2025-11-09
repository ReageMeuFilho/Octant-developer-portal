import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function SafeModule() {
  return <DiagramPage diagram={diagramsData['safe-module']} />;
}
