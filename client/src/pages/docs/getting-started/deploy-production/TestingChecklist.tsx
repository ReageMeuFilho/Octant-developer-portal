export default function TestingChecklist() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Testing Checklist</h1>

      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-8 mb-8">
        <div className="flex items-start gap-4">
          <div className="text-4xl">📝</div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Content Coming Soon</h2>
            <p className="text-gray-300">
              This page is part of the comprehensive "Getting Started with Octant v2" section.
              Full content will be added shortly.
            </p>
          </div>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">What to Expect</h2>
        <p className="text-gray-300 mb-6">
          This page will cover essential information about <strong>testing checklist</strong> in the context
          of building with Octant v2.
        </p>

        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 mb-8">
          <h3 className="text-lg font-semibold mb-3">Section: Deploy Production</h3>
          <p className="text-sm text-gray-400">
            Part of the structured learning path designed to take you from beginner to advanced Octant v2 developer.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">💬 Need Help?</h2>
        <ul className="list-none space-y-2 text-gray-300">
          <li><strong>Questions?</strong> → <a href="https://discord.gg/octant" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">Discord Community</a></li>
          <li><strong>Bug?</strong> → <a href="https://github.com/golemfoundation/octant-v2-core" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">GitHub Issues</a></li>
        </ul>
      </div>
    </div>
  );
}
