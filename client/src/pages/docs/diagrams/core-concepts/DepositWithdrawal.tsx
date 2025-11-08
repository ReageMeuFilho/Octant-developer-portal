import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function DepositWithdrawal() {
  return <DiagramPage diagram={diagramsData['deposit-withdrawal']} />;
}
