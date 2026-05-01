import { getLiveMatches, getRecentMatches, getUpcomingMatches } from '@/lib/api';
import { mockLiveMatches } from '@/lib/mock';
import MatchCard from '@/components/MatchCard';

export default async function MatchesPage() {
  const [live, recent, upcoming] = await Promise.all([
    getLiveMatches(),
    getRecentMatches(),
    getUpcomingMatches(),
  ]);

  const liveMatches = live?.typeMatches?.[0]?.seriesMatches?.[0]?.seriesAdWrapper?.matches || mockLiveMatches;
  const recentMatches = recent?.typeMatches?.[0]?.seriesMatches?.[0]?.seriesAdWrapper?.matches || [];
  const upcomingMatches = upcoming?.typeMatches?.[0]?.seriesMatches?.[0]?.seriesAdWrapper?.matches || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
      <h1 className="font-display font-bold text-3xl text-white">All Matches</h1>

      {/* Live */}
      <section>
        <h2 className="font-display font-bold text-xl text-white mb-4 flex items-center gap-2">
          <span className="live-dot w-2 h-2 bg-red-500 rounded-full inline-block" />
          Live
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {liveMatches.map((m: any, i: number) => <MatchCard key={i} match={m} isLive={true} />)}
        </div>
      </section>

      {/* Recent */}
      {recentMatches.length > 0 && (
        <section>
          <h2 className="font-display font-bold text-xl text-white mb-4">Recent</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {recentMatches.slice(0, 6).map((m: any, i: number) => <MatchCard key={i} match={m} isLive={false} />)}
          </div>
        </section>
      )}

      {/* Upcoming */}
      {upcomingMatches.length > 0 && (
        <section>
          <h2 className="font-display font-bold text-xl text-white mb-4">Upcoming</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {upcomingMatches.slice(0, 6).map((m: any, i: number) => <MatchCard key={i} match={m} isLive={false} />)}
          </div>
        </section>
      )}
    </div>
  );
}