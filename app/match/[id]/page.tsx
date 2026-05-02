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
  const venue = matchHeader?.venue?.name || '';

  const batTeam = miniscore?.batTeam;
  const bowlTeam = miniscore?.bowlTeam;
  const batter1 = miniscore?.batsmanStriker;
  const batter2 = miniscore?.batsmanNonStriker;
  const bowler = miniscore?.bowlerStriker;
  const lastWkt = miniscore?.lastWicket;
  const partnership = miniscore?.partnerShip;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Link href="/" className="text-gray-400 hover:text-gold text-sm mb-4 inline-flex items-center gap-1">
        ← Back to Home
      </Link>

      {/* Header */}
      <div className="relative bg-pitch-gradient rounded-2xl border border-gold/20 p-6 mb-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="live-dot w-2 h-2 bg-red-500 rounded-full inline-block" />
            <span className="text-red-400 text-xs font-bold uppercase">Live</span>
            <span className="text-gray-500 text-xs">{matchDesc}</span>
            {venue && <span className="text-gray-500 text-xs">📍 {venue}</span>}
          </div>

          <div className="grid grid-cols-3 items-center gap-4">
            {/* Team 1 */}
            <div className="text-left">
              <div className="font-display font-bold text-4xl md:text-5xl text-white">{t1}</div>
              <div className="text-gray-400 text-sm mt-1">{t1Full}</div>
              {batTeam && (
                <div className="mt-3">
                  <div className="font-display font-bold text-3xl text-gold">
                    {batTeam.runs}/{batTeam.wickets}
                  </div>
                  <div className="text-gray-400 text-sm">({batTeam.overs} ov)</div>
                </div>
              )}
            </div>

            {/* VS */}
            <div className="text-center">
              <div className="text-gray-500 font-display text-2xl font-bold">VS</div>
              <div className="mt-2 text-gold text-xs font-medium text-center px-2">{status}</div>
            </div>

            {/* Team 2 */}
            <div className="text-right">
              <div className="font-display font-bold text-4xl md:text-5xl text-white">{t2}</div>
              <div className="text-gray-400 text-sm mt-1">{t2Full}</div>
              {bowlTeam && bowlTeam.runs !== undefined && (
                <div className="mt-3">
                  <div className="font-display font-bold text-3xl text-gold">
                    {bowlTeam.runs}/{bowlTeam.wickets}
                  </div>
                  <div className="text-gray-400 text-sm">({bowlTeam.overs} ov)</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">

          {/* Batting */}
          import Image from 'next/image';
import { getPlayerPhoto, getTeamLogo } from '@/lib/images';

// Match header mein team logos:
<div className="flex-1">
  <div className="flex items-center gap-3">
    <div className="relative w-20 h-20">
      {getTeamLogo(t1) ? (
        <Image src={getTeamLogo(t1)!} alt={t1} fill className="object-contain drop-shadow-xl" />
      ) : (
        <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center font-display font-bold text-gold text-3xl">{t1[0]}</div>
      )}
    </div>
    <div>
      <div className="font-display font-bold text-4xl text-white">{t1}</div>
      <div className="text-gray-400 text-sm">{t1Full}</div>
      {batTeam && (
        <div className="font-display font-bold text-3xl text-gold mt-1">
          {batTeam.runs}/{batTeam.wickets}
          <span className="text-gray-400 text-lg ml-1">({batTeam.overs} ov)</span>
        </div>
      )}
    </div>
  </div>
</div>

// Batting table mein player photo:
{[batter1, batter2].filter(Boolean).map((b: any, i: number) => {
  const photo = getPlayerPhoto(b?.batName);
  return (
    <tr key={i} className="border-b border-white/5 hover:bg-white/5">
      <td className="px-4 py-3">
        <div className="flex items-center gap-2">
          {photo ? (
            <Image src={photo} alt={b?.batName} width={32} height={32}
              className="rounded-full object-cover border border-white/20" />
          ) : (
            <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-xs font-bold text-gold">
              {b?.batName?.[0]}
            </div>
          )}
          <span className="text-white font-medium">{b?.batName}</span>
          {i === 0 && <span className="text-gold text-xs">*</span>}
        </div>
      </td>
      <td className="px-3 py-3 text-center text-white font-bold">{b?.batRuns ?? '-'}</td>
      <td className="px-3 py-3 text-center text-gray-400">{b?.batBalls ?? '-'}</td>
      <td className="px-3 py-3 text-center text-gray-400">{b?.batFours ?? '-'}</td>
      <td className="px-3 py-3 text-center text-gray-400">{b?.batSixes ?? '-'}</td>
      <td className="px-3 py-3 text-center text-gray-400">{b?.batStrikeRate ?? '-'}</td>
    </tr>
  );
})}

// Bowling table mein bowler photo:
<tr className="border-b border-white/5 hover:bg-white/5">
  <td className="px-4 py-3">
    <div className="flex items-center gap-2">
      {getPlayerPhoto(bowler?.bowlName) ? (
        <Image src={getPlayerPhoto(bowler?.bowlName)!} alt={bowler?.bowlName}
          width={32} height={32} className="rounded-full object-cover border border-white/20" />
      ) : (
        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-xs font-bold text-red-400">
          {bowler?.bowlName?.[0]}
        </div>
      )}
      <span className="text-white font-medium">{bowler?.bowlName}</span>
      <span className="text-gold text-xs">*</span>
    </div>
  </td>
  <td className="px-3 py-3 text-center text-white">{bowler?.bowlOvs ?? '-'}</td>
  <td className="px-3 py-3 text-center text-gray-400">{bowler?.bowlMaidens ?? '-'}</td>
  <td className="px-3 py-3 text-center text-gray-400">{bowler?.bowlRuns ?? '-'}</td>
  <td className="px-3 py-3 text-center font-bold text-gold">{bowler?.bowlWkts ?? '-'}</td>
  <td className="px-3 py-3 text-center text-gray-400">{bowler?.bowlEcon ?? '-'}</td>
</tr>

          {/* Bowling */}
          {bowler && (
            <div className="bg-pitch-800 rounded-xl border border-white/10 overflow-hidden">
              <div className="bg-pitch-700 px-4 py-3 border-b border-white/10">
                <h2 className="font-display font-bold text-white">Bowling — {bowlTeam?.bowlTeamName}</h2>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-500 text-xs border-b border-white/10">
                    <th className="text-left px-4 py-2">Bowler</th>
                    <th className="px-3 py-2 text-center">O</th>
                    <th className="px-3 py-2 text-center">M</th>
                    <th className="px-3 py-2 text-center">R</th>
                    <th className="px-3 py-2 text-center">W</th>
                    <th className="px-3 py-2 text-center">ER</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5 hover:bg-white/5">
                    <td className="px-4 py-3">
                      <span className="text-white font-medium">{bowler?.bowlName}</span>
                      <span className="text-gold text-xs ml-1">*</span>
                    </td>
                    <td className="px-3 py-3 text-center text-white">{bowler?.bowlOvs ?? '-'}</td>
                    <td className="px-3 py-3 text-center text-gray-400">{bowler?.bowlMaidens ?? '-'}</td>
                    <td className="px-3 py-3 text-center text-gray-400">{bowler?.bowlRuns ?? '-'}</td>
                    <td className="px-3 py-3 text-center font-bold text-gold">{bowler?.bowlWkts ?? '-'}</td>
                    <td className="px-3 py-3 text-center text-gray-400">{bowler?.bowlEcon ?? '-'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Partnership + Last Wicket */}
          <div className="grid grid-cols-2 gap-4">
            {partnership && (
              <div className="bg-pitch-800 rounded-xl border border-white/10 p-4">
                <h3 className="font-display font-bold text-white text-sm mb-2">Partnership</h3>
                <p className="text-gold font-bold text-2xl">{partnership.runs}
                  <span className="text-gray-400 text-sm font-normal ml-1">({partnership.balls} balls)</span>
                </p>
              </div>
            )}
            {lastWkt && (
              <div className="bg-pitch-800 rounded-xl border border-white/10 p-4">
                <h3 className="font-display font-bold text-white text-sm mb-2">Last Wicket</h3>
                <p className="text-red-400 font-bold text-sm">{lastWkt}</p>
              </div>
            )}
          </div>

          {/* No data fallback */}
          {!batter1 && !bowler && (
            <div className="bg-pitch-800 rounded-xl border border-white/10 p-8 text-center">
              <div className="text-5xl mb-3">🏏</div>
              <p className="text-gray-400">Match data loading...</p>
              <p className="text-gray-600 text-xs mt-1">Match ID: {params.id}</p>
            </div>
          )}
        </div>

        {/* Commentary */}
        <div className="bg-pitch-800 rounded-xl border border-white/10 overflow-hidden h-fit">
          <div className="bg-pitch-700 px-4 py-3 border-b border-white/10">
            <h3 className="font-display font-bold text-white">Live Commentary</h3>
          </div>
          <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto">
            {commentaryList.length > 0 ? commentaryList.slice(0, 30).map((item: any, i: number) => (
              <div key={i} className={`flex gap-3 border-b border-white/5 pb-3 rounded px-1 ${
                item.event === 'FOUR' ? 'bg-blue-500/5' :
                item.event === 'SIX' ? 'bg-gold/5' :
                item.event === 'WICKET' ? 'bg-red-500/5' : ''
              }`}>
                <span className="text-gold font-display font-bold text-xs shrink-0 w-10 pt-0.5">
                  {item.overNumber || '—'}
                </span>
                <div>
                  {item.event && item.event !== 'DEFAULT' && (
                    <span className={`text-xs font-bold mr-1 ${
                      item.event === 'FOUR' ? 'text-blue-400' :
                      item.event === 'SIX' ? 'text-gold' :
                      item.event === 'WICKET' ? 'text-red-400' : 'text-gray-400'
                    }`}>
                      {item.event}!
                    </span>
                  )}
                  <span className="text-gray-300 text-xs leading-relaxed">
                    {item.commText || ''}
                  </span>
                </div>
              </div>
            )) : (
              <p className="text-gray-500 text-sm text-center py-8">Commentary loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}