export const mockLiveMatches = [
  {
    matchInfo: {
      matchId: '1001',
      team1: { teamName: 'Chennai Super Kings', teamSName: 'CSK' },
      team2: { teamName: 'Mumbai Indians', teamSName: 'MI' },
      matchDesc: 'Match 24, IPL 2024',
      venue: { city: 'Chennai' },
      state: 'In Progress',
      status: 'CSK need 45 runs in 32 balls',
    },
    matchScore: {
      team1Score: { inngs1: { runs: 186, wickets: 5, overs: 20 } },
      team2Score: { inngs1: { runs: 142, wickets: 4, overs: 14.2 } },
    },
  },
  {
    matchInfo: {
      matchId: '1002',
      team1: { teamName: 'Royal Challengers Bangalore', teamSName: 'RCB' },
      team2: { teamName: 'Kolkata Knight Riders', teamSName: 'KKR' },
      matchDesc: 'Match 25, IPL 2024',
      venue: { city: 'Bangalore' },
      state: 'In Progress',
      status: 'KKR won the toss and elected to field',
    },
    matchScore: {
      team1Score: { inngs1: { runs: 201, wickets: 3, overs: 20 } },
      team2Score: { inngs1: { runs: 89, wickets: 2, overs: 9.4 } },
    },
  },
];

export const mockPointsTable = [
  { pos: 1, team: 'Rajasthan Royals', sName: 'RR', p: 10, w: 7, l: 3, pts: 14, nrr: '+0.923' },
  { pos: 2, team: 'Kolkata Knight Riders', sName: 'KKR', p: 10, w: 7, l: 3, pts: 14, nrr: '+0.631' },
  { pos: 3, team: 'Sunrisers Hyderabad', sName: 'SRH', p: 10, w: 6, l: 4, pts: 12, nrr: '+0.411' },
  { pos: 4, team: 'Chennai Super Kings', sName: 'CSK', p: 10, w: 6, l: 4, pts: 12, nrr: '+0.212' },
  { pos: 5, team: 'Delhi Capitals', sName: 'DC', p: 10, w: 5, l: 5, pts: 10, nrr: '-0.132' },
  { pos: 6, team: 'Royal Challengers Bangalore', sName: 'RCB', p: 10, w: 4, l: 6, pts: 8, nrr: '+0.098' },
  { pos: 7, team: 'Lucknow Super Giants', sName: 'LSG', p: 10, w: 4, l: 6, pts: 8, nrr: '-0.293' },
  { pos: 8, team: 'Gujarat Titans', sName: 'GT', p: 10, w: 4, l: 6, pts: 8, nrr: '-0.387' },
  { pos: 9, team: 'Punjab Kings', sName: 'PBKS', p: 10, w: 3, l: 7, pts: 6, nrr: '-0.512' },
  { pos: 10, team: 'Mumbai Indians', sName: 'MI', p: 10, w: 2, l: 8, pts: 4, nrr: '-0.871' },
];

export const mockCommentary = [
  { over: '18.3', text: 'FOUR! Dhoni smashes it through covers. CSK closing in fast!' },
  { over: '18.1', text: 'Wide down the leg side. Pressure building on MI.' },
  { over: '17.6', text: 'SIX! Jadeja goes over long-on. What a shot!' },
  { over: '17.4', text: 'OUT! Bumrah bowls Conway for 55. Big wicket for MI.' },
  { over: '17.2', text: 'Dot ball. Bumrah on a hat-trick? No, he misses.' },
  { over: '16.5', text: 'FOUR! Edge flies through third slip. Lucky for CSK.' },
];