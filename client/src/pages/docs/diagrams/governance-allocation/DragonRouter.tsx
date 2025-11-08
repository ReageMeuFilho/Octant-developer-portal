import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function DragonRouter() {
  return <DiagramPage diagram={diagramsData['dragon-router']} />;
}
