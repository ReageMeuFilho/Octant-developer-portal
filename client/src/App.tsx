import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Docs from "./pages/Docs";
import Introduction from "./pages/docs/Introduction";
import Quickstart from "./pages/docs/Quickstart";
import Orientation from "./pages/docs/Orientation";
import StrategyDevelopment from "./pages/docs/tutorials/StrategyDevelopment";
import YieldDonating from "./pages/docs/YieldDonating";
import YieldSkimming from "./pages/docs/YieldSkimming";
import AllocationMechanisms from "./pages/docs/AllocationMechanisms";
import MultiStrategy from "./pages/docs/MultiStrategy";
import FirstVault from "./pages/docs/tutorials/FirstVault";
import QuadraticFunding from "./pages/docs/tutorials/QuadraticFunding";
import AaveIntegration from "./pages/docs/tutorials/AaveIntegration";
import LidoIntegration from "./pages/docs/tutorials/LidoIntegration";
import MultiStrategyTutorial from "./pages/docs/tutorials/MultiStrategyTutorial";
import Testnet from "./pages/docs/resources/Testnet";
import SDKs from "./pages/docs/resources/SDKs";
import Community from "./pages/docs/resources/Community";
import FAQ from "./pages/docs/resources/FAQ";
import OctantCaseStudy from "./pages/docs/case-studies/Octant";
import Tutorials from "./pages/docs/Tutorials";
import ArchitectureTutorial from "./pages/docs/tutorials/ArchitectureTutorial";
import WhatIsOctant from "./pages/docs/WhatIsOctant";
import HowItWorks from "./pages/docs/HowItWorks";
import Architecture from "./pages/docs/Architecture";
import Glossary from "./pages/docs/Glossary";
import FAQPage from "./pages/docs/FAQ";
import EndowmentYieldToImpact from "./pages/use-cases/EndowmentYieldToImpact";
import FoundationStreamingGrants from "./pages/use-cases/FoundationStreamingGrants";
import DAOProgrammableTreasury from "./pages/use-cases/DAOProgrammableTreasury";

// Getting Started pages
import GSWhatYoullBuild from "./pages/docs/getting-started/quick-start/WhatYoullBuild";
import GSChooseYourPath from "./pages/docs/getting-started/quick-start/ChooseYourPath";
import GSPrerequisitesCheck from "./pages/docs/getting-started/quick-start/PrerequisitesCheck";
import GSOctantIn3Minutes from "./pages/docs/getting-started/core-concepts/OctantIn3Minutes";
import GSArchitectureDiagram from "./pages/docs/getting-started/core-concepts/ArchitectureDiagram";
import GSKeyComponentsExplained from "./pages/docs/getting-started/core-concepts/KeyComponentsExplained";
import GSYieldTypesVisualGuide from "./pages/docs/getting-started/core-concepts/YieldTypesVisualGuide";
import GSInstallPrerequisites from "./pages/docs/getting-started/environment-setup/InstallPrerequisites";
import GSCloneRunDemo from "./pages/docs/getting-started/environment-setup/CloneRunDemo";
import GSConnectYourWallet from "./pages/docs/getting-started/environment-setup/ConnectYourWallet";
import GSGetTestTokens from "./pages/docs/getting-started/environment-setup/GetTestTokens";
import GSTutorialSimpleLending from "./pages/docs/getting-started/build-first-strategy/TutorialSimpleLending";
import GSTutorialStakingStrategy from "./pages/docs/getting-started/build-first-strategy/TutorialStakingStrategy";
import GSUnderstandingDonationsVsSkimming from "./pages/docs/getting-started/build-first-strategy/UnderstandingDonationsVsSkimming";
import GSTestingYourStrategy from "./pages/docs/getting-started/build-first-strategy/TestingYourStrategy";
import GSTestingChecklist from "./pages/docs/getting-started/deploy-production/TestingChecklist";
import GSDeployOnTestnet from "./pages/docs/getting-started/deploy-production/DeployOnTestnet";
import GSDeployMultiStrategyVault from "./pages/docs/getting-started/deploy-production/DeployMultiStrategyVault";
import GSMonitoringMaintenance from "./pages/docs/getting-started/deploy-production/MonitoringMaintenance";
import GSConnectBoilerplate from "./pages/docs/getting-started/frontend-integration/ConnectBoilerplate";
import GSBuildDepositWithdrawUI from "./pages/docs/getting-started/frontend-integration/BuildDepositWithdrawUI";
import GSRealTimeUpdates from "./pages/docs/getting-started/frontend-integration/RealTimeUpdates";
import GSProductionBestPractices from "./pages/docs/getting-started/frontend-integration/ProductionBestPractices";
import GSAllocationMechanisms from "./pages/docs/getting-started/advanced-topics/AllocationMechanisms";
import GSCommunityStaking from "./pages/docs/getting-started/advanced-topics/CommunityStaking";
import GSSuperfluidStreaming from "./pages/docs/getting-started/advanced-topics/SuperfluidStreaming";
import GSMultiStrategyRebalancing from "./pages/docs/getting-started/advanced-topics/MultiStrategyRebalancing";
import GSCommonErrors from "./pages/docs/getting-started/troubleshooting/CommonErrors";
import GSDebuggingGuide from "./pages/docs/getting-started/troubleshooting/DebuggingGuide";
import GSFAQs from "./pages/docs/getting-started/troubleshooting/FAQs";
import GSGetHelpFromCommunity from "./pages/docs/getting-started/troubleshooting/GetHelpFromCommunity";

// Getting Started pages
import WhatYoullBuild from "./pages/docs/getting-started/quick-start/WhatYoullBuild";
import ChooseYourPath from "./pages/docs/getting-started/quick-start/ChooseYourPath";
import PrerequisitesCheck from "./pages/docs/getting-started/quick-start/PrerequisitesCheck";
import OctantIn3Minutes from "./pages/docs/getting-started/core-concepts/OctantIn3Minutes";
import ArchitectureDiagram from "./pages/docs/getting-started/core-concepts/ArchitectureDiagram";
import KeyComponentsExplained from "./pages/docs/getting-started/core-concepts/KeyComponentsExplained";
import YieldTypesVisualGuide from "./pages/docs/getting-started/core-concepts/YieldTypesVisualGuide";
import InstallPrerequisites from "./pages/docs/getting-started/environment-setup/InstallPrerequisites";
import CloneRunDemo from "./pages/docs/getting-started/environment-setup/CloneRunDemo";
import ConnectYourWallet from "./pages/docs/getting-started/environment-setup/ConnectYourWallet";
import GetTestTokens from "./pages/docs/getting-started/environment-setup/GetTestTokens";
import TutorialSimpleLending from "./pages/docs/getting-started/build-first-strategy/TutorialSimpleLending";
import TutorialStakingStrategy from "./pages/docs/getting-started/build-first-strategy/TutorialStakingStrategy";
import UnderstandingDonationsVsSkimming from "./pages/docs/getting-started/build-first-strategy/UnderstandingDonationsVsSkimming";
import TestingYourStrategy from "./pages/docs/getting-started/build-first-strategy/TestingYourStrategy";
import TestingChecklist from "./pages/docs/getting-started/deploy-production/TestingChecklist";
import DeployOnTestnet from "./pages/docs/getting-started/deploy-production/DeployOnTestnet";
import DeployMultiStrategyVault from "./pages/docs/getting-started/deploy-production/DeployMultiStrategyVault";
import MonitoringMaintenance from "./pages/docs/getting-started/deploy-production/MonitoringMaintenance";
import ConnectBoilerplate from "./pages/docs/getting-started/frontend-integration/ConnectBoilerplate";
import BuildDepositWithdrawUI from "./pages/docs/getting-started/frontend-integration/BuildDepositWithdrawUI";
import RealTimeUpdates from "./pages/docs/getting-started/frontend-integration/RealTimeUpdates";
import ProductionBestPractices from "./pages/docs/getting-started/frontend-integration/ProductionBestPractices";
import CommunityStaking from "./pages/docs/getting-started/advanced-topics/CommunityStaking";
import SuperfluidStreaming from "./pages/docs/getting-started/advanced-topics/SuperfluidStreaming";
import MultiStrategyRebalancing from "./pages/docs/getting-started/advanced-topics/MultiStrategyRebalancing";
import CommonErrors from "./pages/docs/getting-started/troubleshooting/CommonErrors";
import DebuggingGuide from "./pages/docs/getting-started/troubleshooting/DebuggingGuide";
import FAQs from "./pages/docs/getting-started/troubleshooting/FAQs";
import GetHelpFromCommunity from "./pages/docs/getting-started/troubleshooting/GetHelpFromCommunity";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Landing} />
      <Route path="/docs" component={Docs} />

      {/* Getting Started routes */}
      <Route path="/docs/getting-started/quick-start/what-youll-build" component={GSWhatYoullBuild} />
      <Route path="/docs/getting-started/quick-start/choose-your-path" component={GSChooseYourPath} />
      <Route path="/docs/getting-started/quick-start/prerequisites-check" component={GSPrerequisitesCheck} />
      <Route path="/docs/getting-started/core-concepts/octant-in-3-minutes" component={GSOctantIn3Minutes} />
      <Route path="/docs/getting-started/core-concepts/architecture-diagram" component={GSArchitectureDiagram} />
      <Route path="/docs/getting-started/core-concepts/key-components" component={GSKeyComponentsExplained} />
      <Route path="/docs/getting-started/core-concepts/yield-types" component={GSYieldTypesVisualGuide} />
      <Route path="/docs/getting-started/environment-setup/install-prerequisites" component={GSInstallPrerequisites} />
      <Route path="/docs/getting-started/environment-setup/clone-run-demo" component={GSCloneRunDemo} />
      <Route path="/docs/getting-started/environment-setup/connect-wallet" component={GSConnectYourWallet} />
      <Route path="/docs/getting-started/environment-setup/get-test-tokens" component={GSGetTestTokens} />
      <Route path="/docs/getting-started/build-first-strategy/tutorial-simple-lending" component={GSTutorialSimpleLending} />
      <Route path="/docs/getting-started/build-first-strategy/tutorial-staking" component={GSTutorialStakingStrategy} />
      <Route path="/docs/getting-started/build-first-strategy/donations-vs-skimming" component={GSUnderstandingDonationsVsSkimming} />
      <Route path="/docs/getting-started/build-first-strategy/testing-strategy" component={GSTestingYourStrategy} />
      <Route path="/docs/getting-started/deploy-production/testing-checklist" component={GSTestingChecklist} />
      <Route path="/docs/getting-started/deploy-production/deploy-testnet" component={GSDeployOnTestnet} />
      <Route path="/docs/getting-started/deploy-production/deploy-multi-strategy" component={GSDeployMultiStrategyVault} />
      <Route path="/docs/getting-started/deploy-production/monitoring-maintenance" component={GSMonitoringMaintenance} />
      <Route path="/docs/getting-started/frontend-integration/connect-boilerplate" component={GSConnectBoilerplate} />
      <Route path="/docs/getting-started/frontend-integration/deposit-withdraw-ui" component={GSBuildDepositWithdrawUI} />
      <Route path="/docs/getting-started/frontend-integration/real-time-updates" component={GSRealTimeUpdates} />
      <Route path="/docs/getting-started/frontend-integration/production-best-practices" component={GSProductionBestPractices} />
      <Route path="/docs/getting-started/advanced-topics/allocation-mechanisms" component={GSAllocationMechanisms} />
      <Route path="/docs/getting-started/advanced-topics/community-staking" component={GSCommunityStaking} />
      <Route path="/docs/getting-started/advanced-topics/superfluid-streaming" component={GSSuperfluidStreaming} />
      <Route path="/docs/getting-started/advanced-topics/multi-strategy-rebalancing" component={GSMultiStrategyRebalancing} />
      <Route path="/docs/getting-started/troubleshooting/common-errors" component={GSCommonErrors} />
      <Route path="/docs/getting-started/troubleshooting/debugging-guide" component={GSDebuggingGuide} />
      <Route path="/docs/getting-started/troubleshooting/faqs" component={GSFAQs} />
      <Route path="/docs/getting-started/troubleshooting/get-help" component={GSGetHelpFromCommunity} />

      {/* Getting Started routes */}
      <Route path="/docs/getting-started/quick-start/what-youll-build" component={WhatYoullBuild} />
      <Route path="/docs/getting-started/quick-start/choose-your-path" component={ChooseYourPath} />
      <Route path="/docs/getting-started/quick-start/prerequisites-check" component={PrerequisitesCheck} />
      <Route path="/docs/getting-started/core-concepts/octant-in-3-minutes" component={OctantIn3Minutes} />
      <Route path="/docs/getting-started/core-concepts/architecture-diagram" component={ArchitectureDiagram} />
      <Route path="/docs/getting-started/core-concepts/key-components" component={KeyComponentsExplained} />
      <Route path="/docs/getting-started/core-concepts/yield-types" component={YieldTypesVisualGuide} />
      <Route path="/docs/getting-started/environment-setup/install-prerequisites" component={InstallPrerequisites} />
      <Route path="/docs/getting-started/environment-setup/clone-run-demo" component={CloneRunDemo} />
      <Route path="/docs/getting-started/environment-setup/connect-wallet" component={ConnectYourWallet} />
      <Route path="/docs/getting-started/environment-setup/get-test-tokens" component={GetTestTokens} />
      <Route path="/docs/getting-started/build-first-strategy/tutorial-simple-lending" component={TutorialSimpleLending} />
      <Route path="/docs/getting-started/build-first-strategy/tutorial-staking" component={TutorialStakingStrategy} />
      <Route path="/docs/getting-started/build-first-strategy/donations-vs-skimming" component={UnderstandingDonationsVsSkimming} />
      <Route path="/docs/getting-started/build-first-strategy/testing-strategy" component={TestingYourStrategy} />
      <Route path="/docs/getting-started/deploy-production/testing-checklist" component={TestingChecklist} />
      <Route path="/docs/getting-started/deploy-production/deploy-testnet" component={DeployOnTestnet} />
      <Route path="/docs/getting-started/deploy-production/deploy-multi-strategy" component={DeployMultiStrategyVault} />
      <Route path="/docs/getting-started/deploy-production/monitoring-maintenance" component={MonitoringMaintenance} />
      <Route path="/docs/getting-started/frontend-integration/connect-boilerplate" component={ConnectBoilerplate} />
      <Route path="/docs/getting-started/frontend-integration/deposit-withdraw-ui" component={BuildDepositWithdrawUI} />
      <Route path="/docs/getting-started/frontend-integration/real-time-updates" component={RealTimeUpdates} />
      <Route path="/docs/getting-started/frontend-integration/production-best-practices" component={ProductionBestPractices} />
      <Route path="/docs/getting-started/advanced-topics/community-staking" component={CommunityStaking} />
      <Route path="/docs/getting-started/advanced-topics/superfluid-streaming" component={SuperfluidStreaming} />
      <Route path="/docs/getting-started/advanced-topics/multi-strategy-rebalancing" component={MultiStrategyRebalancing} />
      <Route path="/docs/getting-started/troubleshooting/common-errors" component={CommonErrors} />
      <Route path="/docs/getting-started/troubleshooting/debugging-guide" component={DebuggingGuide} />
      <Route path="/docs/getting-started/troubleshooting/faqs" component={FAQs} />
      <Route path="/docs/getting-started/troubleshooting/get-help" component={GetHelpFromCommunity} />
      <Route path="/docs/introduction" component={Introduction} />
      <Route path="/docs/what-is-octant" component={WhatIsOctant} />
      <Route path="/docs/how-it-works" component={HowItWorks} />
      <Route path="/docs/architecture" component={Architecture} />
      <Route path="/docs/glossary" component={Glossary} />
      <Route path="/docs/faq" component={FAQPage} />
      <Route path="/docs/quickstart" component={Quickstart} />
      <Route path="/docs/orientation" component={Orientation} />
      <Route path="/docs/tutorials" component={Tutorials} />
      <Route path="/docs/tutorials/strategy-development" component={StrategyDevelopment} />
      <Route path="/docs/yield-donating" component={YieldDonating} />
      <Route path="/docs/yield-skimming" component={YieldSkimming} />
      <Route path="/docs/allocation-mechanisms" component={AllocationMechanisms} />
      <Route path="/docs/multi-strategy" component={MultiStrategy} />
      <Route path="/docs/tutorials/first-vault" component={FirstVault} />
            <Route path="/docs/tutorials/architecture" component={ArchitectureTutorial} />
      <Route path="/docs/tutorials/quadratic-funding" component={QuadraticFunding} />
      <Route path="/docs/tutorials/aave-integration" component={AaveIntegration} />
      <Route path="/docs/tutorials/lido-integration" component={LidoIntegration} />
      <Route path="/docs/tutorials/multi-strategy" component={MultiStrategyTutorial} />
      <Route path="/docs/resources/testnet" component={Testnet} />
      <Route path="/docs/resources/sdks" component={SDKs} />
      <Route path="/docs/resources/community" component={Community} />
      <Route path="/docs/resources/faq" component={FAQ} />
      <Route path="/docs/case-studies/octant" component={OctantCaseStudy} />
      <Route path="/use-cases/endowment-yield-to-impact" component={EndowmentYieldToImpact} />
      <Route path="/use-cases/foundation-streaming-grants" component={FoundationStreamingGrants} />
      <Route path="/use-cases/dao-programmable-treasury" component={DAOProgrammableTreasury} />
      <Route path={"/home"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
