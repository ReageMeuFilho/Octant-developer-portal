import DocsLayout from "@/components/DocsLayoutNew";

export default function WhatYoullBuild() {
  return (
    <DocsLayout>
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">What You'll Build</h1>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">🎯 In This Guide</h2>
        
        <p className="text-gray-300 mb-6">
          By the end of this tutorial, you'll have built and deployed:
        </p>

        <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-8">
          <li><strong>A Yield Strategy</strong> - Automatically generates returns from DeFi protocols</li>
          <li><strong>A Funding Vault</strong> - Accepts deposits and deploys them to your strategy</li>
          <li><strong>An Allocation System</strong> - Routes yield to your chosen projects</li>
          <li><strong>A Frontend Dashboard</strong> - Lets users interact with your vault</li>
        </ol>

        <p className="text-sm text-gray-400 mb-8">
          <strong>Time to Complete:</strong> 2-3 hours (first time) | 30 minutes (experienced)
        </p>

        <hr className="border-gray-700 my-8" />

        <h2 className="text-2xl font-semibold mt-8 mb-4">🎨 What It Looks Like</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">For End Users:</h3>
        <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm mb-6">
{`┌─────────────────────────────────────┐
│  💰 Your Vault Dashboard            │
├─────────────────────────────────────┤
│  Balance: $10,000                   │
│  Current APY: 5.7%                  │
│  Yield Donated: $47.50 (this month) │
│                                     │
│  [Deposit More]  [Withdraw]         │
│                                     │
│  📊 Where Your Money Works:         │
│  • Aave Lending: $6,000 (60%)      │
│  • Lido Staking: $4,000 (40%)      │
│                                     │
│  🌱 Where Yield Goes:                │
│  • Clean Water Project: $28.50     │
│  • Open Source Dev: $19.00         │
└─────────────────────────────────────┘`}
        </pre>

        <h3 className="text-xl font-semibold mt-6 mb-3">Under The Hood:</h3>
        <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm mb-8">
{`User Deposit ($10,000)
    ↓
Vault (Holds Shares)
    ↓
Strategy 1: Aave Lending ($6,000) → Earns $28.50/month
Strategy 2: Lido Staking ($4,000) → Earns $19.00/month
    ↓
Yield Router
    ↓
60% Compounds Back → Grows vault
40% Donated → Projects you choose`}
        </pre>

        <hr className="border-gray-700 my-8" />

        <h2 className="text-2xl font-semibold mt-8 mb-4">🎓 What You'll Learn</h2>

        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Beginner Track <span className="text-sm text-gray-400">(Start here if new to Web3)</span></h3>
            <ul className="list-none space-y-2 text-gray-300">
              <li>✅ How blockchain vaults work</li>
              <li>✅ Basic Solidity contract structure</li>
              <li>✅ Deploying to a test network</li>
              <li>✅ Building a simple React UI</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Intermediate Track <span className="text-sm text-gray-400">(DeFi experience)</span></h3>
            <ul className="list-none space-y-2 text-gray-300">
              <li>✅ ERC-4626 vault standard</li>
              <li>✅ Yield strategy patterns</li>
              <li>✅ Smart contract testing with Foundry</li>
              <li>✅ Multi-strategy allocation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Advanced Track <span className="text-sm text-gray-400">(Production-ready)</span></h3>
            <ul className="list-none space-y-2 text-gray-300">
              <li>✅ Security best practices</li>
              <li>✅ Gas optimization techniques</li>
              <li>✅ Monitoring and automation</li>
              <li>✅ Custom allocation mechanisms</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <h2 className="text-2xl font-semibold mt-8 mb-4">🚦 Choose Your Starting Point</h2>

        <div className="grid gap-4 mb-8">
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold mb-2">Path A: "Show Me Working Code" ⚡</h3>
            <p className="text-gray-300 mb-2">→ Jump to <a href="/docs/getting-started/environment-setup/clone-run-demo" className="text-blue-400 hover:text-blue-300">Clone & Run Demo</a> (5 minutes)</p>
            <p className="text-sm text-gray-400">Perfect if you learn by exploring running code first.</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold mb-2">Path B: "Explain First, Then Code" 📚</h3>
            <p className="text-gray-300 mb-2">→ Start with <a href="/docs/getting-started/core-concepts/octant-in-3-minutes" className="text-blue-400 hover:text-blue-300">Core Concepts</a> (15 minutes)</p>
            <p className="text-sm text-gray-400">Perfect if you want to understand architecture before coding.</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold mb-2">Path C: "I Just Need the Contracts" 🏗️</h3>
            <p className="text-gray-300 mb-2">→ Skip to <a href="/docs/getting-started/build-first-strategy/tutorial-simple-lending" className="text-blue-400 hover:text-blue-300">Build Your First Strategy</a> (30 minutes)</p>
            <p className="text-sm text-gray-400">Perfect if you're familiar with DeFi and want to dive in.</p>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <h2 className="text-2xl font-semibold mt-8 mb-4">📋 Prerequisites Check</h2>

        <p className="text-gray-300 mb-4">Before starting, make sure you have:</p>

        <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm mb-4">
{`# Check Node.js version (need 18+)
node --version
# Should show: v18.x.x or higher

# Check if Foundry is installed
forge --version
# Should show: forge 0.2.0 or similar

# Check Git
git --version
# Should show: git version 2.x.x`}
        </pre>

        <p className="text-gray-300 mb-8">
          <strong>Missing something?</strong> → Go to <a href="/docs/getting-started/environment-setup/install-prerequisites" className="text-blue-400 hover:text-blue-300">Install Tools</a><br />
          <strong>All set?</strong> → Continue to <a href="/docs/getting-started/core-concepts/octant-in-3-minutes" className="text-blue-400 hover:text-blue-300">Core Concepts</a> or <a href="/docs/getting-started/environment-setup/clone-run-demo" className="text-blue-400 hover:text-blue-300">Quick Demo</a>
        </p>

        <hr className="border-gray-700 my-8" />

        <h2 className="text-2xl font-semibold mt-8 mb-4">🎯 Real-World Use Cases</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">What People Build with Octant:</h3>

        <div className="space-y-4 mb-8">
          <div className="bg-gray-800/30 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold mb-2">1. Endowment Funds</h4>
            <blockquote className="text-gray-300 italic">
              "Our $50M university endowment earns 5% yield ($2.5M/year). We donate 40% ($1M) to student projects while growing the principal."
            </blockquote>
          </div>

          <div className="bg-gray-800/30 p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-semibold mb-2">2. DAO Treasuries</h4>
            <blockquote className="text-gray-300 italic">
              "Our gaming DAO put $10M idle USDC to work. Yield funds tournament prizes without touching the treasury."
            </blockquote>
          </div>

          <div className="bg-gray-800/30 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold mb-2">3. Public Goods Funding</h4>
            <blockquote className="text-gray-300 italic">
              "Community members deposit ETH. Yield supports open-source developers through quadratic funding votes."
            </blockquote>
          </div>

          <div className="bg-gray-800/30 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-semibold mb-2">4. Perpetual Grants</h4>
            <blockquote className="text-gray-300 italic">
              "Instead of one-time grants, we provide 'yield streams' - projects receive funding as long as our capital is deployed."
            </blockquote>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <h2 className="text-2xl font-semibold mt-8 mb-4">⏱️ Time Commitment</h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4">Section</th>
                <th className="text-left py-3 px-4">Time</th>
                <th className="text-left py-3 px-4">Difficulty</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4">Quick Demo</td>
                <td className="py-3 px-4">5 min</td>
                <td className="py-3 px-4">⭐ Easy</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4">Core Concepts</td>
                <td className="py-3 px-4">15 min</td>
                <td className="py-3 px-4">⭐ Easy</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4">Environment Setup</td>
                <td className="py-3 px-4">20 min</td>
                <td className="py-3 px-4">⭐⭐ Moderate</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4">First Strategy</td>
                <td className="py-3 px-4">45 min</td>
                <td className="py-3 px-4">⭐⭐ Moderate</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4">Testing</td>
                <td className="py-3 px-4">30 min</td>
                <td className="py-3 px-4">⭐⭐⭐ Advanced</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4">Deployment</td>
                <td className="py-3 px-4">30 min</td>
                <td className="py-3 px-4">⭐⭐⭐ Advanced</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4">Frontend</td>
                <td className="py-3 px-4">45 min</td>
                <td className="py-3 px-4">⭐⭐ Moderate</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-300 mb-8">
          <strong>Total: ~3 hours</strong> for complete beginner<br />
          <strong>Total: ~1 hour</strong> if you skip explanations and dive into code
        </p>

        <hr className="border-gray-700 my-8" />

        <h2 className="text-2xl font-semibold mt-8 mb-4">💬 Need Help?</h2>

        <ul className="list-none space-y-2 text-gray-300 mb-8">
          <li><strong>Stuck?</strong> → <a href="/docs/getting-started/troubleshooting/common-errors" className="text-blue-400 hover:text-blue-300">Troubleshooting Guide</a></li>
          <li><strong>Questions?</strong> → <a href="https://discord.gg/octant" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">Discord Community</a></li>
          <li><strong>Bug?</strong> → <a href="https://github.com/golemfoundation/octant-v2-core" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">GitHub Issues</a></li>
        </ul>

        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mt-8">
          <p className="text-lg font-semibold text-center">
            Ready to start? Pick your path above! 👆
          </p>
        </div>
      </div>
    </div>
    </DocsLayout>
  );
}
