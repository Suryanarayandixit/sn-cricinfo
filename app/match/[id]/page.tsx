import { getMatchScorecard, getMatchCommentary } from '@/lib/api';
import { mockCommentary } from '@/lib/mock';
import Link from 'next/link';

export default async function MatchPage({ params }: { params: { id: string } }) {
  const [scorecard, commentary] = await Promise.all([
    getMatchScorecard(params.id),
    getMatchCommentary(params.id),
  ]);

  const matchHeader = scorecard?.matchHeader;
  const miniscore = scorecard?.miniscore;
  const commentaryList = commentary?.commentaryList || mockCommentary;

  const t1 = matchHeader?.team1?.shortName || 'Team 1';
  const t2 = matchHeader?.team2?.shortName || 'Team 2';
  const t1Full = matchHeader?.team1?.name || t1;
  const t2Full = matchHeader?.team2?.name || t2;
  const status = matchHeader?.status || 'Live';
  const matchDesc = matchHeader?.matchDescription || '';

  const bat = miniscore?.batTeam;
  const bowl = miniscore?.bowlTeam;
  const batters = miniscore?.batsmanStriker;
  const batters2 = miniscore?.batsmanNonStriker;
  const bowler = miniscore?.bowlerStriker;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Link href="/" className="text-gray-400 hover:text-gold text-sm mb-4 inline-flex items-center gap-1">
        ← Back to Home
      </Link>

      {/* Match Header */}
      <div className="relative bg-pitch-gradient rounded-2xl border border-gold/20 p-6 mb-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="live-dot w-2 h-2 bg-red-500 rounded-full inline-block" />
            <span className="text-red-400 text-xs font-bold uppercase">Live Match</span>
            <span className="text-gray-500 text-xs">• {matchDesc}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-left">
              <div className="font-display font-bold text-5xl text-white">{t1}</div>
              <div className="text-gray-400 text-sm mt-1">{t1Full}</div>
              {bat?.teamId === matchHeader?.team1?.id && (
                <div className="font-display font-bold text-3xl text-gold mt-2">
                  {bat?.score}/{bat?.wickets}
                  <span className="text-gray-400 text-lg ml-2">({bat?.overs})</span>
                </div>
              )}
            </div>

            <div className="text-center text-gray-400 font-display text-2xl font-bold">VS</div>

            <div className="text-right">
              <div className="font-display font-bold text-5xl text-white">{t2}</div>
              <div className="text-gray-400 text-sm mt-1">{t2Full}</div>
              {bowl?.teamId === matchHeader?.team2?.id && (
                <div className="font-display font-bold text-3xl text-gold mt-2">
                  {bowl?.score}/{bowl?.wickets}
                  <span className="text-gray-400 text-lg ml-2">({bowl?.overs})</span>
                </div>
              )}
            </div>
          </div>

          <p className="text-gold text-center mt-4 font-medium text-sm">{status}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Scorecard */}
        <div className="lg:col-span-2 space-y-4">

          {/* Current Batsmen */}
          {batters && (
            <div className="bg-pitch-800 rounded-xl border border-white/10 overflow-hidden">
              <div className="bg-pitch-700 px-4 py-3 border-b border-white/10">
                <h2 className="font-display font-bold text-white">Batting</h2>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-500 text-xs border-b border-white/10">
                    <th className="text-left px-4 py-2">Batter</th>
                    <th className="px-3 py-2">R</th>
                    <th className="px-3 py-2">B</th>
                    <th className="px-3 py-2">4s</th>
                    <th className="px-3 py-2">6s</th>
                    <th className="px-3 py-2">SR</th>
                  </tr>
                </thead>
                <tbody>
                  {[batters, batters2].filter(Boolean).map((b: any, i: number) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                      <td className="px-4 py-3">
                        <span className="text-white font-medium">{b?.batName}</span>
                        {i === 0 && <span className="text-gold text-xs ml-1">*</span>}
                      </td>
                      <td className="px-3 py-3 text-center text-white font-bold">{b?.batRuns}</td>
                      <td className="px-3 py-3 text-center text-gray-400">{b?.batBalls}</td>
                      <td className="px-3 py-3 text-center text-gray-400">{b?.batFours}</td>
                      <td className="px-3 py-3 text-center text-gray-400">{b?.batSixes}</td>
                      <td className="px-3 py-3 text-center text-gray-400">{b?.batStrikeRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Current Bowler */}
          {bowler && (
            <div className="bg-pitch-800 rounded-xl border border-white/10 overflow-hidden">
              <div className="bg-pitch-700 px-4 py-3 border-b border-white/10">
                <h2 className="font-display font-bold text-white">Bowling</h2>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-500 text-xs border-b border-white/10">
                    <th className="text-left px-4 py-2">Bowler</th>
                    <th className="px-3 py-2">O</th>
                    <th className="px-3 py-2">M</th>
                    <th className="px-3 py-2">R</th>
                    <th className="px-3 py-2">W</th>
                    <th className="px-3 py-2">ER</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="px-4 py-3">
                      <span className="text-white font-medium">{bowler?.bowlName}</span>
                      <span className="text-gold text-xs ml-1">*</span>
                    </td>
                    <td className="px-3 py-3 text-center text-white">{bowler?.bowlOvs}</td>
                    <td className="px-3 py-3 text-center text-gray-400">{bowler?.bowlMaidens}</td>
                    <td className="px-3 py-3 text-center text-gray-400">{bowler?.bowlRuns}</td>
                    <td className="px-3 py-3 text-center text-gold font-bold">{bowler?.bowlWkts}</td>
                    <td className="px-3 py-3 text-center text-gray-400">{bowler?.bowlEcon}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Partnership */}
          {miniscore?.partnerShip && (
            <div className="bg-pitch-800 rounded-xl border border-white/10 p-4">
              <h3 className="font-display font-bold text-white mb-2">Partnership</h3>
              <p className="text-gold font-bold text-xl">
                {miniscore.partnerShip.runs} runs
                <span className="text-gray-400 text-sm ml-2">({miniscore.partnerShip.balls} balls)</span>
              </p>
            </div>
          )}
        </div>

        {/* Live Commentary */}
        <div className="bg-pitch-800 rounded-xl border border-white/10 overflow-hidden h-fit">
          <div className="bg-pitch-700 px-4 py-3 border-b border-white/10">
            <h3 className="font-display font-bold text-white">Live Commentary</h3>
          </div>
          <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto">
            {commentaryList.slice(0, 30).map((item: any, i: number) => (
              <div key={i} className={`flex gap-3 border-b border-white/5 pb-3 ${
                item.event === 'FOUR' ? 'bg-blue-500/5 rounded' :
                item.event === 'SIX' ? 'bg-gold/5 rounded' :
                item.event === 'WICKET' ? 'bg-red-500/5 rounded' : ''
              }`}>
                <span className="text-gold font-display font-bold text-xs shrink-0 w-10">
                  {item.overNumber || '—'}
                </span>
                <div>
                  {item.event && item.event !== 'DEFAULT' && (
                    <span className={`text-xs font-bold mr-2 ${
                      item.event === 'FOUR' ? 'text-blue-400' :
                      item.event === 'SIX' ? 'text-gold' :
                      item.event === 'WICKET' ? 'text-red-400' : ''
                    }`}>
                      {item.event}!
                    </span>
                  )}
                  <span className="text-gray-300 text-xs leading-relaxed">
                    {item.commText || item.text || ''}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}