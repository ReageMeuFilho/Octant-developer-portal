import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function YieldDonating() {
  return <DiagramPage diagram={diagramsData['yield-donating']} />;
}
