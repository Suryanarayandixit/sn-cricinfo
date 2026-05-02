export default function PointsTable({ data }: { data: any[] }) {
  return (
    <div className="bg-pitch-800 rounded-xl border border-white/10 overflow-hidden">
      <div className="bg-pitch-700 px-4 py-3 border-b border-white/10">
        <h3 className="font-display font-bold text-white text-base">IPL 2026 Points Table</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="text-gray-500 border-b border-white/10">
              <th className="text-left px-3 py-2">#</th>
              <th className="text-left px-3 py-2">Team</th>
              <th className="px-2 py-2">P</th>
              <th className="px-2 py-2">W</th>
              <th className="px-2 py-2">L</th>
              <th className="px-2 py-2 text-gold font-bold">Pts</th>
              <th className="px-2 py-2">NRR</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}
                className={`border-b border-white/5 hover:bg-white/5 transition-colors ${i < 4 ? 'bg-gold/5' : ''}`}>
                <td className="px-3 py-2.5 text-gray-400">{row.pos}</td>
                <td className="px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    {i < 4 && <span className="w-1 h-4 bg-gold rounded-full inline-block" />}
                    <span className="text-white font-semibold">{row.sName}</span>
                  </div>
                </td>
                <td className="px-2 py-2.5 text-center text-gray-400">{row.p}</td>
                <td className="px-2 py-2.5 text-center text-green-400">{row.w}</td>
                <td className="px-2 py-2.5 text-center text-red-400">{row.l}</td>
                <td className="px-2 py-2.5 text-center text-gold font-bold">{row.pts}</td>
                <td className={`px-2 py-2.5 text-center ${row.nrr.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {row.nrr}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-2 text-xs text-gray-500 flex items-center gap-1">
        <span className="w-1 h-3 bg-gold rounded-full inline-block" />
        Qualified for playoffs
      </div>
    </div>
  );
}