import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function HatsProtocol() {
  return <DiagramPage diagram={diagramsData['hats-protocol']} />;
}
