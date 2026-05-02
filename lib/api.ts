const BASE_URL = 'https://cricbuzz-cricket.p.rapidapi.com';

const headers = {
  'X-RapidAPI-Key': process.env.RAPIDAPI_KEY!,
  'X-RapidAPI-Host': process.env.RAPIDAPI_HOST!,
};

function extractMatches(data: any) {
  if (!data?.typeMatches) return [];
  const all: any[] = [];
  for (const type of data.typeMatches) {
    for (const series of type.seriesMatches || []) {
      const matches = series?.seriesAdWrapper?.matches || [];
      all.push(...matches);
    }
  }
  return all;
}

function extractIPLMatches(data: any) {
  if (!data?.typeMatches) return [];
  for (const type of data.typeMatches) {
    for (const series of type.seriesMatches || []) {
      const name = series?.seriesAdWrapper?.seriesName || '';
      if (name.toLowerCase().includes('indian premier league') || name.toLowerCase().includes('ipl')) {
        return series?.seriesAdWrapper?.matches || [];
      }
    }
  }
  return [];
}

export async function getLiveMatches() {
  try {
    const res = await fetch(`${BASE_URL}/matches/v1/live`, {
      headers,
      next: { revalidate: 30 },
    });
    if (!res.ok) throw new Error('API error');
    const data = await res.json();
    return { all: extractMatches(data), ipl: extractIPLMatches(data) };
  } catch {
    return { all: [], ipl: [] };
  }
}

export async function getRecentMatches() {
  try {
    const res = await fetch(`${BASE_URL}/matches/v1/recent`, {
      headers,
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error('API error');
    const data = await res.json();
    return { all: extractMatches(data), ipl: extractIPLMatches(data) };
  } catch {
    return { all: [], ipl: [] };
  }
}

export async function getUpcomingMatches() {
  try {
    const res = await fetch(`${BASE_URL}/matches/v1/upcoming`, {
      headers,
      next: { revalidate: 300 },
    });
    if (!res.ok) throw new Error('API error');
    const data = await res.json();
    return { all: extractMatches(data), ipl: extractIPLMatches(data) };
  } catch {
    return { all: [], ipl: [] };
  }
}

export async function getMatchScorecard(matchId: string) {
  try {
    const res = await fetch(`${BASE_URL}/mcenter/v1/${matchId}`, {
      headers,
      next: { revalidate: 15 },
    });
    if (!res.ok) throw new Error('API error');
    return await res.json();
  } catch {
    return null;
  }
}

export async function getMatchCommentary(matchId: string) {
  try {
    const res = await fetch(`${BASE_URL}/mcenter/v1/${matchId}/comm`, {
      headers,
      next: { revalidate: 15 },
    });
    if (!res.ok) throw new Error('API error');
    return await res.json();
  } catch {
    return null;
  }
}

export async function getIPLPointsTable() {
  try {
    // IPL 2026 series ID
    const seriesRes = await fetch(`${BASE_URL}/series/v1/9241`, {
      headers,
      next: { revalidate: 300 },
    });
    if (!seriesRes.ok) throw new Error('API error');
    const data = await seriesRes.json();
    const standings = data?.pointsTable?.[0]?.pointsTableInfo || [];
    return standings.map((t: any, i: number) => ({
      pos: i + 1,
      team: t.teamName,
      sName: t.teamSName,
      p: t.matchesPlayed,
      w: t.matchesWon,
      l: t.matchesLost,
      pts: t.points,
      nrr: t.nrrDisplay || t.nrr || '0.000',
    }));
  } catch {
    return null;
  }
}