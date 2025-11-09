import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function FailedWithdrawal() {
  return <DiagramPage diagram={diagramsData['failed-withdrawal']} />;
}
