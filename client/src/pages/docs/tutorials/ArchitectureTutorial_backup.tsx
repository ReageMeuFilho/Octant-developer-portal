import DocsLayoutNew from '@/components/DocsLayoutNew';
import CardNavigationWrapper from '@/components/CardNavigationWrapper';
import Scene01MeetSarah from './architecture/Scene01MeetSarah';
import Scene02TheDilemma from './architecture/Scene02TheDilemma';
import Scene03ThreeSystems from './architecture/Scene03ThreeSystems';
import { useState } from 'react';
import { AskAIButton } from '@/components/AskAIButton';
import { AIChatPanel } from '@/components/AIChatPanel';
import { useChatPanel } from '@/hooks/useChatPanel';

export default function ArchitectureTutorial() {
  const { isOpen, openChat, closeChat } = useChatPanel();

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
