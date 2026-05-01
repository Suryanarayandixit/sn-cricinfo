import { getLiveMatches, getUpcomingMatches } from '@/lib/api';
import { mockLiveMatches, mockPointsTable } from '@/lib/mock';
import MatchCard from '@/components/MatchCard';
import PointsTable from '@/components/PointsTable';
import Link from 'next/link';

export default async function HomePage() {
  const liveData = await getLiveMatches();
  const upcomingData = await getUpcomingMatches();

  const liveMatches = liveData.all.length > 0 ? liveData.all : mockLiveMatches;
  const iplMatches = liveData.ipl;
  const upcomingMatches = upcomingData.all.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Hero Banner */}
      <div className="relative bg-pitch-gradient rounded-2xl p-6 mb-8 border border-gold/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="live-dot w-2 h-2 bg-red-500 rounded-full inline-block" />
            <span className="text-red-400 text-xs font-bold uppercase tracking-wider">Live Now</span>
          </div>
          <h1 className="font-display font-bold text-4xl text-white mb-1">
            IPL <span className="text-gold">2026</span>
          </h1>
          <p className="text-gray-400 text-sm">Live scores, commentary & fantasy</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">

          {/* IPL Matches */}
          {iplMatches.length > 0 && (
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display font-bold text-xl text-white flex items-center gap-2">
                  🏆 IPL 2026 Live
                </h2>
                <Link href="/matches" className="text-gold text-xs hover:underline">View all →</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {iplMatches.map((match: any, i: number) => (
                  <MatchCard key={i} match={match} isLive={true} />
                ))}
              </div>
            </section>
          )}

          {/* All Live Matches */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display font-bold text-xl text-white flex items-center gap-2">
                <span className="live-dot w-2 h-2 bg-red-500 rounded-full inline-block" />
                Live Matches
              </h2>
              <Link href="/matches" className="text-gold text-xs hover:underline">View all →</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {liveMatches.slice(0, 6).map((match: any, i: number) => (
                <MatchCard key={i} match={match} isLive={true} />
              ))}
            </div>
          </section>

          {/* Upcoming */}
          {upcomingMatches.length > 0 && (
            <section>
              <h2 className="font-display font-bold text-xl text-white mb-4">Upcoming</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {upcomingMatches.map((match: any, i: number) => (
                  <MatchCard key={i} match={match} isLive={false} />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">
          <PointsTable data={mockPointsTable} />
          <div className="bg-pitch-800 rounded-xl border border-white/10 p-4">
            <h3 className="font-display font-bold text-white mb-3">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: '🏆 Schedule', href: '/matches', id: 'schedule' },
                { label: '👤 Players', href: '/stats/players', id: 'players' },
                { label: '📊 Stats', href: '/stats', id: 'stats' },
                { label: '🎮 Fantasy', href: '/fantasy', id: 'fantasy' },
              ].map(link => (
                <Link key={link.id} href={link.href}
                  className="bg-pitch-700 hover:bg-pitch-600 text-gray-300 hover:text-gold text-xs p-3 rounded-lg text-center transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}