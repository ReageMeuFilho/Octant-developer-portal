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
import TechnicalArchitecture from "@/pages/docs/tutorials/TechnicalArchitecture";
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

// TradFi Tutorial pages
import TradFiGettingStartedOverview from "./pages/tradfi-tutorials/GettingStartedOverview";
import TradFiAnalogies from "./pages/tradfi-tutorials/TradFiAnalogies";
import KeyConcepts from "./pages/tradfi-tutorials/KeyConcepts";
import AliceDay1 from "@/pages/tradfi-tutorials/AliceDay1";
import AliceDay2 from "@/pages/tradfi-tutorials/AliceDay2";
import AliceDay30 from "@/pages/tradfi-tutorials/AliceDay30";
import AliceDay40 from "@/pages/tradfi-tutorials/AliceDay40";
import AliceDay45 from "@/pages/tradfi-tutorials/AliceDay45";
import AliceDay90 from "@/pages/tradfi-tutorials/AliceDay90";
import VaultSystemSummary from "@/pages/tradfi-tutorials/VaultSystemSummary";
import SystemOverviewDiagram from "./pages/tradfi-tutorials/SystemOverviewDiagram";

// User Journeys pages
import FindYourPath from "@/pages/user-journeys/FindYourPath";
import SarahConservative from "@/pages/user-journeys/SarahConservative";
import MarcusCrypto from "@/pages/user-journeys/MarcusCrypto";
import DrChenSophisticated from "@/pages/user-journeys/DrChenSophisticated";
import ProtocolXDAO from "@/pages/user-journeys/ProtocolXDAO";
import DeFiMasterYield from "@/pages/user-journeys/DeFiMasterYield";
import EmmaGovernance from "@/pages/user-journeys/EmmaGovernance";
import HedgeFundInstitutional from "@/pages/user-journeys/HedgeFundInstitutional";

// Octant Wiki pages
import OctantWikiOverview from "@/pages/docs/octant-wiki/OctantWikiOverview";
import StakingIntroduction from "@/pages/docs/octant-wiki/StakingIntroduction";
import StakingDelegation from "@/pages/docs/octant-wiki/StakingDelegation";
import StakingEarningPower from "@/pages/docs/octant-wiki/StakingEarningPower";
import StakingRewardDistribution from "@/pages/docs/octant-wiki/StakingRewardDistribution";
import StakingAccessControl from "@/pages/docs/octant-wiki/StakingAccessControl";
import StakingAdvancedOps from "@/pages/docs/octant-wiki/StakingAdvancedOps";
import StakingStateManagement from "@/pages/docs/octant-wiki/StakingStateManagement";
import StakingIntegration from "@/pages/docs/octant-wiki/StakingIntegration";
import StakingReference from "@/pages/docs/octant-wiki/StakingReference";
import DiagramGallery from "@/pages/DiagramGallery";

import DiagramsHome from "@/pages/docs/diagrams/DiagramsHome";
import DiagramsStartHere from "@/pages/docs/diagrams/StartHere";
import DiagramsVisualGuide from "@/pages/docs/diagrams/VisualGuide";
import DiagramsDiagramIndex from "@/pages/docs/diagrams/DiagramIndex";
import DiagramsTableOfContents from "@/pages/docs/diagrams/TableOfContents";

import DepositWithdrawal from "@/pages/docs/diagrams/core-concepts/DepositWithdrawal";
import YieldGeneration from "@/pages/docs/diagrams/core-concepts/YieldGeneration";
import MultiStrategyVault from "@/pages/docs/diagrams/core-concepts/MultiStrategyVault";
import EmergencyShutdown from "@/pages/docs/diagrams/core-concepts/EmergencyShutdown";
import LossScenario from "@/pages/docs/diagrams/core-concepts/LossScenario";
import ShareMath from "@/pages/docs/diagrams/core-concepts/ShareMath";

import YieldDonatingDiagram from "@/pages/docs/diagrams/yield-mechanisms/YieldDonating";
import YieldSkimmingDiagram from "@/pages/docs/diagrams/yield-mechanisms/YieldSkimming";
import HarvestCycle from "@/pages/docs/diagrams/yield-mechanisms/HarvestCycle";
import DebtManagement from "@/pages/docs/diagrams/yield-mechanisms/DebtManagement";
import StrategyDecisionTree from "@/pages/docs/diagrams/yield-mechanisms/StrategyDecisionTree";

import DragonRouterDiagram from "@/pages/docs/diagrams/governance-allocation/DragonRouter";
import QuadraticFundingDiagram from "@/pages/docs/diagrams/governance-allocation/QuadraticFunding";
import ProposalLifecycleDiagram from "@/pages/docs/diagrams/governance-allocation/ProposalLifecycle";
import AccessControl from "@/pages/docs/diagrams/governance-allocation/AccessControl";
import PaymentSplitter from "@/pages/docs/diagrams/governance-allocation/PaymentSplitter";

import LockupRageQuit from "@/pages/docs/diagrams/advanced-features/LockupRageQuit";
import TraderDca from "@/pages/docs/diagrams/advanced-features/TraderDca";
import HatsProtocol from "@/pages/docs/diagrams/advanced-features/HatsProtocol";
import SafeModule from "@/pages/docs/diagrams/advanced-features/SafeModule";
import Passport from "@/pages/docs/diagrams/advanced-features/Passport";
import LinearAllowance from "@/pages/docs/diagrams/advanced-features/LinearAllowance";

import FactoryDeployment from "@/pages/docs/diagrams/deployment-integration/FactoryDeployment";
import CloneDeployment from "@/pages/docs/diagrams/deployment-integration/CloneDeployment";
import ExternalIntegration from "@/pages/docs/diagrams/deployment-integration/ExternalIntegration";
import CrossVaultAggregation from "@/pages/docs/diagrams/deployment-integration/CrossVaultAggregation";

// User Journeys Diagrams
import FirstTimeUser from "@/pages/docs/diagrams/user-journeys/FirstTimeUser";
import PowerUser from "@/pages/docs/diagrams/user-journeys/PowerUser";
import DaoTreasury from "@/pages/docs/diagrams/user-journeys/DaoTreasury";
import OctantVsTraditional from "@/pages/docs/diagrams/user-journeys/OctantVsTraditional";

import WithdrawalQueue from "@/pages/docs/diagrams/operations-edge-cases/WithdrawalQueue";
import VaultMigration from "@/pages/docs/diagrams/operations-edge-cases/VaultMigration";
import HealthMonitoring from "@/pages/docs/diagrams/operations-edge-cases/HealthMonitoring";
import FailedWithdrawal from "@/pages/docs/diagrams/operations-edge-cases/FailedWithdrawal";
import SlippageProtection from "@/pages/docs/diagrams/operations-edge-cases/SlippageProtection";

// Getting Started v2 pages
import GettingStartedOverview from "@/pages/docs/getting-started-v2/Overview";
import GettingStartedComponents from "@/pages/docs/getting-started-v2/Components";
import GettingStartedSecurity from "@/pages/docs/getting-started-v2/Security";
import GettingStartedDeveloperOrientation from "@/pages/docs/getting-started-v2/DeveloperOrientation";
import GettingStartedIntegrationGuides from "@/pages/docs/getting-started-v2/IntegrationGuides";
import GettingStartedYieldDonating from "@/pages/docs/getting-started-v2/YieldDonating";
import GettingStartedYieldSkimming from "@/pages/docs/getting-started-v2/YieldSkimming";
import GettingStartedRoutingSplitting from "@/pages/docs/getting-started-v2/RoutingSplitting";
import GettingStartedAllocationMechanisms from "@/pages/docs/getting-started-v2/AllocationMechanisms";
import GettingStartedGlossary from "@/pages/docs/getting-started-v2/Glossary";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Landing} />
      <Route path="/docs" component={Docs} />

      {/* Octant Wiki routes */}
      <Route path="/docs/octant-wiki/overview" component={OctantWikiOverview} />
      
      {/* Staking System (RegenStaker) routes */}
      <Route path="/docs/octant-wiki/staking/introduction" component={StakingIntroduction} />
      <Route path="/docs/octant-wiki/staking/delegation" component={StakingDelegation} />
      <Route path="/docs/octant-wiki/staking/earning-power" component={StakingEarningPower} />
      <Route path="/docs/octant-wiki/staking/reward-distribution" component={StakingRewardDistribution} />
      <Route path="/docs/octant-wiki/staking/access-control" component={StakingAccessControl} />
      <Route path="/docs/octant-wiki/staking/advanced-operations" component={StakingAdvancedOps} />
      <Route path="/docs/octant-wiki/staking/state-management" component={StakingStateManagement} />
      <Route path="/docs/octant-wiki/staking/integration" component={StakingIntegration} />
      <Route path="/docs/octant-wiki/staking/reference" component={StakingReference} />

      {/* Diagrams Section */}
      <Route path="/docs/diagrams/start-here" component={DiagramsStartHere} />
      <Route path="/docs/diagrams/visual-guide" component={DiagramsVisualGuide} />
      <Route path="/docs/diagrams/diagram-index" component={DiagramsDiagramIndex} />
      <Route path="/docs/diagrams/table-of-contents" component={DiagramsTableOfContents} />
      <Route path="/docs/diagrams/gallery" component={DiagramGallery} />
      
      {/* Core Concepts Diagrams */}
      <Route path="/docs/diagrams/core-concepts/deposit-withdrawal" component={DepositWithdrawal} />
      <Route path="/docs/diagrams/core-concepts/yield-generation" component={YieldGeneration} />
      <Route path="/docs/diagrams/core-concepts/multi-strategy-vault" component={MultiStrategyVault} />
      <Route path="/docs/diagrams/core-concepts/emergency-shutdown" component={EmergencyShutdown} />
      <Route path="/docs/diagrams/core-concepts/loss-scenario" component={LossScenario} />
      <Route path="/docs/diagrams/core-concepts/share-math" component={ShareMath} />
      
      {/* Yield Mechanisms Diagrams */}
      <Route path="/docs/diagrams/yield-mechanisms/yield-donating" component={YieldDonatingDiagram} />
      <Route path="/docs/diagrams/yield-mechanisms/yield-skimming" component={YieldSkimmingDiagram} />
      <Route path="/docs/diagrams/yield-mechanisms/harvest-cycle" component={HarvestCycle} />
      <Route path="/docs/diagrams/yield-mechanisms/debt-management" component={DebtManagement} />
      <Route path="/docs/diagrams/yield-mechanisms/strategy-decision-tree" component={StrategyDecisionTree} />
      
      {/* Governance & Allocation Diagrams */}
      <Route path="/docs/diagrams/governance-allocation/dragon-router" component={DragonRouterDiagram} />
      <Route path="/docs/diagrams/governance-allocation/quadratic-funding" component={QuadraticFundingDiagram} />
      <Route path="/docs/diagrams/governance-allocation/proposal-lifecycle" component={ProposalLifecycleDiagram} />
      <Route path="/docs/diagrams/governance-allocation/access-control" component={AccessControl} />
      <Route path="/docs/diagrams/governance-allocation/payment-splitter" component={PaymentSplitter} />
      
      {/* Advanced Features Diagrams */}
      <Route path="/docs/diagrams/advanced-features/lockup-rage-quit" component={LockupRageQuit} />
      <Route path="/docs/diagrams/advanced-features/trader-dca" component={TraderDca} />
      <Route path="/docs/diagrams/advanced-features/hats-protocol" component={HatsProtocol} />
      <Route path="/docs/diagrams/advanced-features/safe-module" component={SafeModule} />
      <Route path="/docs/diagrams/advanced-features/passport" component={Passport} />
      <Route path="/docs/diagrams/advanced-features/linear-allowance" component={LinearAllowance} />
      
      {/* Deployment & Integration Diagrams */}
      <Route path="/docs/diagrams/deployment-integration/factory-deployment" component={FactoryDeployment} />
      <Route path="/docs/diagrams/deployment-integration/clone-deployment" component={CloneDeployment} />
      <Route path="/docs/diagrams/deployment-integration/external-integration" component={ExternalIntegration} />
      <Route path="/docs/diagrams/deployment-integration/cross-vault-aggregation" component={CrossVaultAggregation} />
      
      {/* User Journeys Diagrams */}
      <Route path="/docs/diagrams/user-journeys/first-time-user" component={FirstTimeUser} />
      <Route path="/docs/diagrams/user-journeys/power-user" component={PowerUser} />
      <Route path="/docs/diagrams/user-journeys/dao-treasury" component={DaoTreasury} />
      <Route path="/docs/diagrams/user-journeys/octant-vs-traditional" component={OctantVsTraditional} />
      
      {/* Operations & Edge Cases Diagrams */}
      <Route path="/docs/diagrams/operations-edge-cases/withdrawal-queue" component={WithdrawalQueue} />
      <Route path="/docs/diagrams/operations-edge-cases/vault-migration" component={VaultMigration} />
      <Route path="/docs/diagrams/operations-edge-cases/health-monitoring" component={HealthMonitoring} />
      <Route path="/docs/diagrams/operations-edge-cases/failed-withdrawal" component={FailedWithdrawal} />
      <Route path="/docs/diagrams/operations-edge-cases/slippage-protection" component={SlippageProtection} />
      
      <Route path="/docs/diagrams" component={DiagramsHome} />

      {/* Getting Started v2 routes */}
      <Route path="/docs/getting-started/overview" component={GettingStartedOverview} />
      <Route path="/docs/getting-started/components" component={GettingStartedComponents} />
      <Route path="/docs/getting-started/security" component={GettingStartedSecurity} />
      <Route path="/docs/getting-started/developer-orientation" component={GettingStartedDeveloperOrientation} />
      <Route path="/docs/getting-started/integration-guides" component={GettingStartedIntegrationGuides} />
      <Route path="/docs/getting-started/yield-donating" component={GettingStartedYieldDonating} />
      <Route path="/docs/getting-started/yield-skimming" component={GettingStartedYieldSkimming} />
      <Route path="/docs/getting-started/routing-splitting" component={GettingStartedRoutingSplitting} />
      <Route path="/docs/getting-started/allocation-mechanisms" component={GettingStartedAllocationMechanisms} />
      <Route path="/docs/getting-started/glossary" component={GettingStartedGlossary} />

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
      <Route path="/docs/tutorials/technical" component={TechnicalArchitecture} />
      
      {/* TradFi Tutorial routes */}
      <Route path="/tradfi-tutorials/getting-started-overview" component={TradFiGettingStartedOverview} />
      <Route path="/tradfi-tutorials/tradfi-analogies" component={TradFiAnalogies} />
      <Route path="/tradfi-tutorials/key-concepts" component={KeyConcepts} />
      <Route path="/tradfi-tutorials/alice-day1" component={AliceDay1} />
      <Route path="/tradfi-tutorials/alice-day2" component={AliceDay2} />
      <Route path="/tradfi-tutorials/alice-day30" component={AliceDay30} />
      <Route path="/tradfi-tutorials/alice-day40" component={AliceDay40} />
      <Route path="/tradfi-tutorials/alice-day45" component={AliceDay45} />
      <Route path="/tradfi-tutorials/alice-day90" component={AliceDay90} />
      <Route path="/tradfi-tutorials/vault-system-summary" component={VaultSystemSummary} />
      <Route path="/tradfi-tutorials/system-overview-diagram" component={SystemOverviewDiagram} />
      
      {/* User Journeys routes */}
      <Route path="/user-journeys/find-your-path" component={FindYourPath} />
      <Route path="/user-journeys/sarah-conservative" component={SarahConservative} />
      <Route path="/user-journeys/marcus-crypto" component={MarcusCrypto} />
      <Route path="/user-journeys/dr-chen-sophisticated" component={DrChenSophisticated} />
      <Route path="/user-journeys/protocol-x-dao" component={ProtocolXDAO} />
      <Route path="/user-journeys/defimaster-yield" component={DeFiMasterYield} />
      <Route path="/user-journeys/emma-governance" component={EmmaGovernance} />
      <Route path="/user-journeys/hedge-fund-institutional" component={HedgeFundInstitutional} />
      
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
