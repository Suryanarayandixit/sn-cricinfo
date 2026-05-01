import { getLiveMatches } from '@/lib/api';
import { mockLiveMatches } from '@/lib/mock';

export default async function ScoreTicker() {
  const data = await getLiveMatches();
  const matches = data?.typeMatches?.[0]?.seriesMatches?.[0]?.seriesAdWrapper?.matches || mockLiveMatches;

  const items = matches.slice(0, 6).map((m: any) => {
    const info = m.matchInfo;
    const score = m.matchScore;
    const t1 = info?.team1?.teamSName || 'TBA';
    const t2 = info?.team2?.teamSName || 'TBA';
    const s1 = score?.team1Score?.inngs1;
    const s2 = score?.team2Score?.inngs1;
    const scoreStr = s1 ? `${t1} ${s1.runs}/${s1.wickets} (${s1.overs}) vs ${t2}${s2 ? ` ${s2.runs}/${s2.wickets} (${s2.overs})` : ''}` : `${t1} vs ${t2}`;
    return scoreStr;
  });

  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="bg-gold text-pitch-DEFAULT overflow-hidden h-8 flex items-center">
      <span className="bg-pitch text-gold font-display font-bold text-xs px-3 h-full flex items-center shrink-0 z-10">
        LIVE
      </span>
      <div className="flex-1 overflow-hidden">
        <div className="ticker-scroll flex gap-12 whitespace-nowrap">
          {doubled.map((item, i) => (
            <span key={i} className="text-xs font-semibold">
              🏏 {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}