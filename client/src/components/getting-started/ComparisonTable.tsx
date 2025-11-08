interface ComparisonTableProps {
  columns: string[];
  rows: string[][];
}

export function ComparisonTable({ columns, rows }: ComparisonTableProps) {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-muted">
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="border border-border p-3 text-left font-semibold"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className="hover:bg-muted/50 transition-colors"
            >
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className="border border-border p-3 text-sm"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
