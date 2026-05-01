import Link from 'next/link';

const teamColors: Record<string, string> = {
  CSK: '#f9c31c', MI: '#004ba0', RCB: '#d4161c',
  KKR: '#3a177c', RR: '#ea1f8a', SRH: '#f7810a',
  DC: '#0078bc', PBKS: '#c8102e', GT: '#1c1c1c', LSG: '#a0c4e2',
};

export default function MatchCard({ match, isLive }: { match: any; isLive: boolean }) {
  const info = match?.matchInfo;
  const score = match?.matchScore;
  const matchId = info?.matchId;

  const t1 = info?.team1?.teamSName || '???';
  const t2 = info?.team2?.teamSName || '???';
  const t1Full = info?.team1?.teamName || t1;
  const t2Full = info?.team2?.teamName || t2;

  const s1 = score?.team1Score?.inngs1;
  const s2 = score?.team2Score?.inngs1;

  const status = info?.status || info?.matchDesc || 'Match info unavailable';
  const venue = info?.venue?.city || '';

  const color1 = teamColors[t1] || '#f5a623';
  const color2 = teamColors[t2] || '#60a5fa';

  return (
    <Link href={`/match/${matchId}`}>
      <div className="card-hover bg-pitch-800 border border-white/10 hover:border-gold/40 rounded-xl p-4 cursor-pointer">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-400 text-xs">{info?.matchDesc}</span>
          {isLive ? (
            <span className="flex items-center gap-1 text-xs text-red-400 font-bold">
              <span className="live-dot w-1.5 h-1.5 bg-red-500 rounded-full inline-block" />
              LIVE
            </span>
          ) : (
            <span className="text-xs text-gray-500">Upcoming</span>
          )}
        </div>

        {/* Teams */}
        <div className="space-y-3">
          {/* Team 1 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: color1, color: '#000' }}>
                {t1[0]}
              </div>
              <span className="font-display font-semibold text-white text-base">{t1}</span>
              <span className="text-gray-500 text-xs hidden sm:inline">{t1Full}</span>
            </div>
            {s1 ? (
              <span className="font-display font-bold text-white text-lg">
                {s1.runs}/{s1.wickets}
                <span className="text-gray-400 text-sm ml-1">({s1.overs})</span>
              </span>
            ) : (
              <span className="text-gray-500 text-sm">Yet to bat</span>
            )}
          </div>

          {/* Team 2 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: color2, color: t2 === 'MI' ? '#fff' : '#000' }}>
                {t2[0]}
              </div>
              <span className="font-display font-semibold text-white text-base">{t2}</span>
              <span className="text-gray-500 text-xs hidden sm:inline">{t2Full}</span>
            </div>
            {s2 ? (
              <span className="font-display font-bold text-white text-lg">
                {s2.runs}/{s2.wickets}
                <span className="text-gray-400 text-sm ml-1">({s2.overs})</span>
              </span>
            ) : (
              <span className="text-gray-500 text-sm">Yet to bat</span>
            )}
          </div>
        </div>

        {/* Status */}
        <div className="mt-3 pt-3 border-t border-white/10">
          <p className="text-xs text-gold font-medium truncate">{status}</p>
          {venue && <p className="text-xs text-gray-500 mt-0.5">📍 {venue}</p>}
        </div>
      </div>
    </Link>
  );
}