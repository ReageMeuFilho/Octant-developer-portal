import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function CrossVaultAggregation() {
  return <DiagramPage diagram={diagramsData['cross-vault-aggregation']} />;
}
