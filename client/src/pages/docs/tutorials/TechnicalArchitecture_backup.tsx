import DocsLayoutNew from '@/components/DocsLayoutNew';
import CardNavigationWrapper from '@/components/CardNavigationWrapper';
import Scene01MeetSarah from './technical/Scene01MeetSarah';
import Scene02FactoryPattern from './technical/Scene02FactoryPattern';
import Scene03StrategyInterface from './technical/Scene03StrategyInterface';
import Scene04DragonProtocol from './technical/Scene04DragonProtocol';
import Scene05CompleteSystem from './technical/Scene05CompleteSystem';

export default function TechnicalArchitecture() {
  return (
    <DocsLayoutNew>
      <CardNavigationWrapper totalScenes={5}>
        <Scene01MeetSarah />
        <Scene02FactoryPattern />
        <Scene03StrategyInterface />
        <Scene04DragonProtocol />
        <Scene05CompleteSystem />
      </CardNavigationWrapper>
    </DocsLayoutNew>
  );
}
