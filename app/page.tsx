import Image from 'next/image';
import { getLiveMatches, getUpcomingMatches } from '@/lib/api';
import { mockLiveMatches, mockPointsTable, mockCommentary } from '@/lib/mock';
import { getTeamLogo } from '@/lib/images';
import Link from 'next/link';

export default async function HomePage() {
  const liveData = await getLiveMatches();
  const upcomingData = await getUpcomingMatches();

  const liveMatches = liveData.ipl.length > 0 ? liveData.ipl : mockLiveMatches;
  const upcomingMatches = upcomingData.ipl.length > 0 ? upcomingData.ipl : [];
  const featured = liveMatches[0];
  const featuredInfo = featured?.matchInfo;
  const featuredScore = featured?.matchScore;

  const t1 = featuredInfo?.team1?.teamName || 'Chennai Super Kings';
  const t1s = featuredInfo?.team1?.teamSName || 'CSK';
  const t2 = featuredInfo?.team2?.teamName || 'Mumbai Indians';
  const t2s = featuredInfo?.team2?.teamSName || 'MI';
  const s1 = featuredScore?.team1Score?.inngs1;
  const s2 = featuredScore?.team2Score?.inngs1;
  const status = featuredInfo?.status || 'CSK need 45 runs in 32 balls';

  const t1Logo = getTeamLogo(t1s);
  const t2Logo = getTeamLogo(t2s);

  return (
    <div className="min-h-screen bg-pitch text-white">
      <div className="max-w-[1400px] mx-auto px-4 py-4">
        <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr_300px] gap-4">

          {/* LEFT SIDEBAR */}
          <div className="hidden xl:flex flex-col gap-3">
            <div className="bg-pitch-800 rounded-xl border border-white/10 p-3">
              <p className="text-gray-400 text-xs mb-2 uppercase tracking-wider">Upcoming</p>
              {(upcomingMatches.length > 0 ? upcomingMatches : mockLiveMatches).slice(0, 3).map((m: any, i: number) => {
                const info = m?.matchInfo;
                const a = info?.team1?.teamSName || 'CSK';
                const b = info?.team2?.teamSName || 'MI';
                const aLogo = getTeamLogo(a);
                const bLogo = getTeamLogo(b);
                return (
                  <Link href={`/match/${info?.matchId}`} key={i}>
                    <div className="flex items-center justify-between py-2 border-b border-white/5 hover:bg-white/5 rounded px-2 transition-colors">
                      <div className="flex items-center gap-2">
                        {aLogo ? (
                          <Image src={aLogo} alt={a} width={24} height={24} className="object-contain" />
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-xs font-bold text-gold">{a[0]}</div>
                        )}
                        <span className="text-white text-xs font-bold">{a}</span>
                      </div>
                      <span className="text-gray-500 text-xs">vs</span>
                      <div className="flex items-center gap-2">
                        <span className="text-white text-xs font-bold">{b}</span>
                        {bLogo ? (
                          <Image src={bLogo} alt={b} width={24} height={24} className="object-contain" />
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400">{b[0]}</div>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Video Highlights */}
            <div className="bg-pitch-800 rounded-xl border border-white/10 overflow-hidden">
              <div className="bg-pitch-700 px-3 py-2 border-b border-white/10">
                <p className="text-xs font-bold text-white uppercase tracking-wider">🎬 Video Highlights</p>
              </div>
              {[
                { title: 'Dhoni last over blitz', views: '2.4M', time: '3:24' },
                { title: 'Bumrah hat-trick', views: '1.8M', time: '2:11' },
                { title: 'Kohli century', views: '3.1M', time: '4:05' },
              ].map((v, i) => (
                <div key={i} className="flex gap-2 p-2 border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors">
                  <div className="w-16 h-10 bg-pitch-600 rounded flex items-center justify-center shrink-0 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent" />
                    <span className="text-white text-lg">▶</span>
                  </div>
                  <div>
                    <p className="text-white text-xs font-medium leading-tight">{v.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{v.views} views • {v.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Poll */}
            <div className="bg-pitch-800 rounded-xl border border-white/10 p-3">
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-3">🗳️ Fan Poll</p>
              <p className="text-gray-300 text-xs mb-3">Who will win today?</p>
              {[
                { team: t1s, pct: 67 },
                { team: t2s, pct: 33 },
              ].map((opt, i) => (
                <div key={i} className="mb-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-300">{opt.team}</span>
                    <span className="text-gold font-bold">{opt.pct}%</span>
                  </div>
                  <div className="h-2 bg-pitch-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gold-gradient rounded-full" style={{ width: `${opt.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Ball by Ball */}
            <div className="bg-pitch-800 rounded-xl border border-white/10 overflow-hidden">
              <div className="bg-pitch-700 px-3 py-2 border-b border-white/10">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Ball by Ball</p>
              </div>
              <div className="p-2 space-y-1 max-h-48 overflow-y-auto">
                {mockCommentary.map((c, i) => (
                  <div key={i} className="flex gap-2 text-xs py-1 border-b border-white/5">
                    <span className="text-gold font-bold w-8 shrink-0">{c.over}</span>
                    <span className="text-gray-300">{c.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER */}
          <div className="flex flex-col gap-4">
            {/* Featured Live Match */}
            <div className="bg-pitch-gradient rounded-2xl border border-gold/30 overflow-hidden">
              <div className="bg-pitch-700/80 px-4 py-2 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="live-dot w-2 h-2 bg-red-500 rounded-full inline-block" />
                  <span className="text-red-400 text-xs font-bold uppercase">LIVE: Match Hub</span>
                </div>
                <span className="text-gray-400 text-xs">{t1s} vs {t2s} | {featuredInfo?.venue?.city || 'Chennai'}</span>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between gap-4">
                  {/* Team 1 */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className="relative w-16 h-16 shrink-0">
                        {t1Logo ? (
                          <Image src={t1Logo} alt={t1s} fill className="object-contain drop-shadow-lg" />
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center font-display font-bold text-gold text-2xl">{t1s[0]}</div>
                        )}
                      </div>
                      <div>
                        <p className="font-display font-bold text-white text-lg">{t1}</p>
                        {s1 && (
                          <p className="font-display font-bold text-3xl text-gold">
                            {s1.runs}/{s1.wickets}
                            <span className="text-gray-400 text-base ml-1">({s1.overs} Ov)</span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* VS */}
                  <div className="text-center px-2">
                    <div className="w-10 h-10 rounded-full bg-pitch-700 border border-white/20 flex items-center justify-center">
                      <span className="text-gray-400 font-display font-bold text-sm">VS</span>
                    </div>
                  </div>

                  {/* Team 2 */}
                  <div className="flex-1 text-right">
                    <div className="flex items-center gap-3 justify-end">
                      <div>
                        <p className="font-display font-bold text-white text-lg">{t2}</p>
                        {s2 && (
                          <p className="font-display font-bold text-3xl text-blue-400">
                            {s2.runs}/{s2.wickets}
                            <span className="text-gray-400 text-base ml-1">({s2.overs} Ov)</span>
                          </p>
                        )}
                      </div>
                      <div className="relative w-16 h-16 shrink-0">
                        {t2Logo ? (
                          <Image src={t2Logo} alt={t2s} fill className="object-contain drop-shadow-lg" />
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center font-display font-bold text-blue-400 text-2xl">{t2s[0]}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 bg-pitch-700/50 rounded-lg px-4 py-2 flex items-center justify-between">
                  <span className="text-gold text-sm font-medium">{status}</span>
                  {s1 && <span className="text-gray-400 text-xs">CRR: {s1.runs && s1.overs ? (s1.runs / parseFloat(String(s1.overs))).toFixed(2) : '—'}</span>}
                </div>

                <div className="flex gap-3 mt-3">
                  <Link href={`/match/${featuredInfo?.matchId}`}
                    className="flex-1 bg-gold-gradient text-pitch font-display font-bold text-sm py-2.5 rounded-lg text-center hover:opacity-90 transition-opacity">
                    WATCH MATCH
                  </Link>
                  <Link href={`/match/${featuredInfo?.matchId}`}
                    className="flex-1 border border-gold/40 text-gold font-display font-bold text-sm py-2.5 rounded-lg text-center hover:bg-gold/10 transition-colors">
                    VIEW DETAILED STATS
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom 4 cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Upcoming */}
              <div className="bg-pitch-800 rounded-xl border border-white/10 overflow-hidden">
                <div className="bg-pitch-700 px-3 py-2 border-b border-white/10">
                  <p className="font-display font-bold text-white text-sm">Upcoming Matches</p>
                </div>
                <div className="p-3 space-y-2">
                  {(upcomingMatches.length > 0 ? upcomingMatches : mockLiveMatches).slice(0, 2).map((m: any, i: number) => {
                    const info = m?.matchInfo;
                    const a = info?.team1?.teamSName || 'CSK';
                    const b = info?.team2?.teamSName || 'MI';
                    const aLogo = getTeamLogo(a);
                    const bLogo = getTeamLogo(b);
                    return (
                      <Link href={`/match/${info?.matchId}`} key={i}>
                        <div className="flex items-center justify-between bg-pitch-700/50 rounded-lg p-2 hover:bg-pitch-600 transition-colors">
                          <div className="text-center">
                            {aLogo ? (
                              <Image src={aLogo} alt={a} width={32} height={32} className="object-contain mx-auto" />
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-xs font-bold text-gold mx-auto">{a[0]}</div>
                            )}
                            <p className="text-white text-xs font-bold mt-1">{a}</p>
                          </div>
                          <p className="text-gold text-xs font-bold">Upcoming</p>
                          <div className="text-center">
                            {bLogo ? (
                              <Image src={bLogo} alt={b} width={32} height={32} className="object-contain mx-auto" />
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400 mx-auto">{b[0]}</div>
                            )}
                            <p className="text-white text-xs font-bold mt-1">{b}</p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Recent Highlights */}
              <div className="bg-pitch-800 rounded-xl border border-white/10 overflow-hidden">
                <div className="bg-pitch-700 px-3 py-2 border-b border-white/10">
                  <p className="font-display font-bold text-white text-sm">Recent Highlights</p>
                </div>
                <div className="p-3 grid grid-cols-2 gap-2">
                  {[
                    { title: 'RCB vs KKR Thriller', tag: 'THRILLER' },
                    { title: 'MI vs CSK Classic', tag: 'CLASSIC' },
                  ].map((h, i) => (
                    <div key={i} className="bg-pitch-700/50 rounded-lg overflow-hidden cursor-pointer hover:bg-pitch-600 transition-colors">
                      <div className="h-14 bg-gradient-to-br from-gold/20 to-pitch-600 flex items-center justify-center relative">
                        <span className="text-2xl">▶</span>
                        <span className="absolute top-1 right-1 bg-gold text-pitch text-xs font-bold px-1 rounded">{h.tag}</span>
                      </div>
                      <p className="text-white text-xs p-1.5 font-medium">{h.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Points Table */}
              <div className="bg-pitch-800 rounded-xl border border-white/10 overflow-hidden">
                <div className="bg-pitch-700 px-3 py-2 border-b border-white/10">
                  <p className="font-display font-bold text-white text-sm">IPL 2026 Points Table</p>
                </div>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="text-gray-500 border-b border-white/10">
                      <th className="text-left px-3 py-1.5">Team</th>
                      <th className="px-2 py-1.5 text-center">Pts</th>
                      <th className="px-2 py-1.5 text-center">NRR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockPointsTable.slice(0, 5).map((row, i) => (
                      <tr key={i} className={`border-b border-white/5 ${i < 4 ? 'bg-gold/5' : ''}`}>
                        <td className="px-3 py-1.5">
                          <div className="flex items-center gap-1.5">
                            <span className="text-gray-500 text-xs">{row.pos}</span>
                            {getTeamLogo(row.sName) && (
                              <Image src={getTeamLogo(row.sName)!} alt={row.sName} width={16} height={16} className="object-contain" />
                            )}
                            <span className="text-white font-semibold">{row.sName}</span>
                          </div>
                        </td>
                        <td className="px-2 py-1.5 text-center text-gold font-bold">{row.pts}</td>
                        <td className={`px-2 py-1.5 text-center ${row.nrr.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{row.nrr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Fantasy */}
              <div className="bg-pitch-800 rounded-xl border border-white/10 overflow-hidden">
                <div className="bg-pitch-700 px-3 py-2 border-b border-white/10">
                  <p className="font-display font-bold text-white text-sm">Fantasy Central</p>
                </div>
                <div className="p-4 flex flex-col items-center justify-center gap-3 h-36">
                  <p className="text-gray-400 text-xs text-center">Join current contests and win big prizes!</p>
                  <div className="text-3xl">🏆</div>
                  <Link href="/fantasy" className="bg-gold-gradient text-pitch font-display font-bold text-sm px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                    Create Your Team
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="hidden xl:flex flex-col gap-3">
            <div className="bg-pitch-800 rounded-xl border border-white/10 overflow-hidden">
              <div className="bg-red-600/20 border-b border-red-500/30 px-3 py-2 flex items-center gap-2">
                <span className="live-dot w-1.5 h-1.5 bg-red-500 rounded-full inline-block" />
                <p className="text-xs font-bold text-red-400 uppercase">Score Ticker</p>
              </div>
              <div className="p-2 space-y-2">
                {liveMatches.slice(0, 4).map((m: any, i: number) => {
                  const info = m?.matchInfo;
                  const score = m?.matchScore;
                  const a = info?.team1?.teamSName || 'CSK';
                  const b = info?.team2?.teamSName || 'MI';
                  const sc1 = score?.team1Score?.inngs1;
                  const sc2 = score?.team2Score?.inngs1;
                  const aLogo = getTeamLogo(a);
                  const bLogo = getTeamLogo(b);
                  return (
                    <Link href={`/match/${info?.matchId}`} key={i}>
                      <div className="bg-pitch-700/50 rounded-lg p-2 hover:bg-pitch-600 transition-colors">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1.5">
                            {aLogo && <Image src={aLogo} alt={a} width={16} height={16} className="object-contain" />}
                            <span className="text-white text-xs font-bold">{a}</span>
                          </div>
                          <span className="text-gold text-xs font-bold">{sc1 ? `${sc1.runs}/${sc1.wickets}` : 'TBD'}</span>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <div className="flex items-center gap-1.5">
                            {bLogo && <Image src={bLogo} alt={b} width={16} height={16} className="object-contain" />}
                            <span className="text-gray-400 text-xs">{b}</span>
                          </div>
                          <span className="text-gray-400 text-xs">{sc2 ? `${sc2.runs}/${sc2.wickets}` : 'Yet to bat'}</span>
                        </div>
                        <p className="text-gold/70 text-xs mt-1 truncate">{info?.status || 'Live'}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Fantasy Right */}
            <div className="bg-pitch-800 rounded-xl border border-white/10 overflow-hidden">
              <div className="bg-pitch-700 px-3 py-2 border-b border-white/10">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Fantasy Central</p>
              </div>
              <div className="p-3">
                <div className="flex gap-2 mb-3">
                  {[t1s, t2s].map((t, i) => (
                    <button key={i} className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-colors ${i === 0 ? 'bg-gold text-pitch' : 'bg-pitch-700 text-gray-400'}`}>
                      {t}
                    </button>
                  ))}
                </div>
                {[
                  { name: 'MS Dhoni', role: 'WK', pts: 456, price: '9.5' },
                  { name: 'Rohit Sharma', role: 'BAT', pts: 412, price: '9.0' },
                  { name: 'Jasprit Bumrah', role: 'BOWL', pts: 389, price: '9.0' },
                  { name: 'R Jadeja', role: 'ALL', pts: 445, price: '9.5' },
                ].map((p, i) => (
                  <div key={i} className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-xs font-bold text-gold">{p.name[0]}</div>
                      <div>
                        <p className="text-white text-xs font-medium">{p.name}</p>
                        <p className="text-gray-500 text-xs">{p.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gold text-xs font-bold">₹{p.price}Cr</p>
                      <p className="text-gray-500 text-xs">{p.pts}pts</p>
                    </div>
                  </div>
                ))}
                <Link href="/fantasy" className="mt-3 w-full bg-gold-gradient text-pitch font-display font-bold text-xs py-2 rounded-lg text-center block">
                  + Add Players
                </Link>
              </div>
            </div>

            {/* Live Feed */}
            <div className="bg-pitch-800 rounded-xl border border-white/10 overflow-hidden">
              <div className="bg-pitch-700 px-3 py-2 border-b border-white/10">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Live Feed</p>
              </div>
              <div className="p-2 space-y-2 max-h-52 overflow-y-auto">
                {mockCommentary.map((c, i) => (
                  <div key={i} className="flex gap-2 bg-pitch-700/30 rounded p-2">
                    <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center text-xs text-gold shrink-0">B</div>
                    <p className="text-gray-300 text-xs leading-relaxed">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}