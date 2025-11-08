import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function WithdrawalQueue() {
  return <DiagramPage diagram={diagramsData['withdrawal-queue']} />;
}
