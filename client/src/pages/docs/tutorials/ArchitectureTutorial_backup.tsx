import DocsLayoutNew from '@/components/DocsLayoutNew';
import CardNavigationWrapper from '@/components/CardNavigationWrapper';
import Scene01MeetSarah from './architecture/Scene01MeetSarah';
import Scene02TheDilemma from './architecture/Scene02TheDilemma';
import Scene03ThreeSystems from './architecture/Scene03ThreeSystems';

export default function ArchitectureTutorial() {
  return (
    <DocsLayoutNew>
      <CardNavigationWrapper totalScenes={3}>
        <Scene01MeetSarah />
        <Scene02TheDilemma />
        <Scene03ThreeSystems />
      </CardNavigationWrapper>
    </DocsLayoutNew>
  );
}
