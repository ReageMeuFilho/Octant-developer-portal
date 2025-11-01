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

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Landing} />
      <Route path="/docs" component={Docs} />
      <Route path="/docs/introduction" component={Introduction} />
      <Route path="/docs/quickstart" component={Quickstart} />
      <Route path="/docs/orientation" component={Orientation} />
      <Route path="/docs/tutorials/strategy-development" component={StrategyDevelopment} />
      <Route path="/docs/yield-donating" component={YieldDonating} />
      <Route path="/docs/yield-skimming" component={YieldSkimming} />
      <Route path="/docs/allocation-mechanisms" component={AllocationMechanisms} />
      <Route path="/docs/multi-strategy" component={MultiStrategy} />
      <Route path="/docs/tutorials/first-vault" component={FirstVault} />
      <Route path="/docs/tutorials/quadratic-funding" component={QuadraticFunding} />
      <Route path="/docs/tutorials/aave-integration" component={AaveIntegration} />
      <Route path="/docs/tutorials/lido-integration" component={LidoIntegration} />
      <Route path="/docs/tutorials/multi-strategy" component={MultiStrategyTutorial} />
      <Route path="/docs/resources/testnet" component={Testnet} />
      <Route path="/docs/resources/sdks" component={SDKs} />
      <Route path="/docs/resources/community" component={Community} />
      <Route path="/docs/resources/faq" component={FAQ} />
      <Route path="/docs/case-studies/octant" component={OctantCaseStudy} />
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
