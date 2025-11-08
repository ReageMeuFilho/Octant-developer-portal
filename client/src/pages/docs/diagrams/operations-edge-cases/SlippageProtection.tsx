import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function SlippageProtection() {
  return <DiagramPage diagram={diagramsData['slippage-protection']} />;
}
