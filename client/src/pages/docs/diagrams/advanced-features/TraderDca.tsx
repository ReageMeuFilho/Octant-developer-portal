import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function TraderDca() {
  return <DiagramPage diagram={diagramsData['trader-dca']} />;
}
