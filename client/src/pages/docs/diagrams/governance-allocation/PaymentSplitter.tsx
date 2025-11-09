import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function PaymentSplitter() {
  return <DiagramPage diagram={diagramsData['payment-splitter']} />;
}
