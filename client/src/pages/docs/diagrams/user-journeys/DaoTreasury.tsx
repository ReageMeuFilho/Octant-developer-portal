import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function DaoTreasury() {
  return <DiagramPage diagram={diagramsData['dao-treasury']} />;
}
