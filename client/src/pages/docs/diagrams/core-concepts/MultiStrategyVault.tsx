import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function MultiStrategyVault() {
  return <DiagramPage diagram={diagramsData['multi-strategy-vault']} />;
}
