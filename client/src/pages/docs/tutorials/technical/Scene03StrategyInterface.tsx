import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Scene03StrategyInterface() {
  return (
    <div className="flex items-center justify-center w-full h-full px-4">
      <div className="max-w-5xl w-full space-y-8">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Strategy Interface
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-center text-muted-foreground max-w-3xl mx-auto"
        >
          Standardized interface for all yield strategies
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Tabs defaultValue="interface" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="interface">Interface</TabsTrigger>
              <TabsTrigger value="aave">Aave Example</TabsTrigger>
              <TabsTrigger value="lido">Lido Example</TabsTrigger>
            </TabsList>
            <TabsContent value="interface" className="mt-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <pre className="text-sm font-mono overflow-x-auto">
{`interface IStrategy {
    function deposit(uint256 amount) external;
    function withdraw(uint256 amount) external;
    function harvest() external returns (uint256);
    function totalAssets() external view returns (uint256);
}`}
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="aave" className="mt-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <pre className="text-sm font-mono overflow-x-auto">
{`contract AaveStrategy is IStrategy {
    function deposit(uint256 amount) external {
        IERC20(asset).approve(aavePool, amount);
        aavePool.supply(asset, amount, address(this), 0);
    }
}`}
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="lido" className="mt-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <pre className="text-sm font-mono overflow-x-auto">
{`contract LidoStrategy is IStrategy {
    function deposit(uint256 amount) external {
        stETH.submit{value: amount}(address(0));
    }
}`}
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
