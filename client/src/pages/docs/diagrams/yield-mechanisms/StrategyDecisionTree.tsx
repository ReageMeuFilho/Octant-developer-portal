import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function StrategyDecisionTree() {
  return <DiagramPage diagram={diagramsData['strategy-decision-tree']} />;
}
