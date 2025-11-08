interface FunctionInfo {
  signature: string;
  description: string;
  caller: string;
}

interface Category {
  category: string;
  functions: FunctionInfo[];
}

interface QuickReferenceTableProps {
  title: string;
  categories: Category[];
}

export function QuickReferenceTable({ title, categories }: QuickReferenceTableProps) {
  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      
      {categories.map((cat, idx) => (
        <div key={idx} className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-primary">
            {cat.category}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left font-semibold">Function</th>
                  <th className="border border-border p-3 text-left font-semibold">Description</th>
                  <th className="border border-border p-3 text-left font-semibold">Caller</th>
                </tr>
              </thead>
              <tbody>
                {cat.functions.map((fn, fnIdx) => (
                  <tr key={fnIdx} className="hover:bg-muted/50 transition-colors">
                    <td className="border border-border p-3 font-mono text-xs">{fn.signature}</td>
                    <td className="border border-border p-3 text-sm">{fn.description}</td>
                    <td className="border border-border p-3 text-sm">{fn.caller}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
