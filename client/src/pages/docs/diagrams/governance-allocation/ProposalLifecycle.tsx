import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function ProposalLifecycle() {
  return <DiagramPage diagram={diagramsData['proposal-lifecycle']} />;
}
