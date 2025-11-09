import DiagramPage from '@/components/DiagramPage';
import { diagramsData } from '@/data/diagrams';

export default function VaultMigration() {
  return <DiagramPage diagram={diagramsData['vault-migration']} />;
}
