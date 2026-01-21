interface ArticleTableProps {
  headers: string[]
  rows: string[][]
}

export default function ArticleTable({ headers, rows }: ArticleTableProps) {
  return (
    <div className="my-10 overflow-x-auto">
      <table
        className="w-full border-collapse rounded-xl overflow-hidden"
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
        }}
      >
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className="px-5 py-4 text-left font-mono text-xs font-semibold tracking-[0.1em] uppercase"
                style={{
                  background: 'rgba(0, 240, 255, 0.1)',
                  color: 'var(--accent-cyan)',
                  borderBottom: '1px solid var(--border-color)',
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="transition-colors duration-200 hover:bg-[rgba(0,240,255,0.03)]"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-5 py-4 text-base"
                  style={{
                    color: 'var(--text-secondary)',
                    borderBottom: rowIndex === rows.length - 1 ? 'none' : '1px solid var(--border-color)',
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <style>{`
        [data-theme="light"] table th {
          background: rgba(8, 145, 178, 0.1);
        }
      `}</style>
    </div>
  )
}
