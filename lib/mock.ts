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
  { pos: 1, team: 'Royal Challengers Bangalore', sName: 'RCB', p: 12, w: 9, l: 3, pts: 18, nrr: '+1.236' },
  { pos: 2, team: 'Punjab Kings', sName: 'PBKS', p: 12, w: 8, l: 4, pts: 16, nrr: '+0.812' },
  { pos: 3, team: 'Mumbai Indians', sName: 'MI', p: 12, w: 7, l: 5, pts: 14, nrr: '+0.543' },
  { pos: 4, team: 'Chennai Super Kings', sName: 'CSK', p: 12, w: 7, l: 5, pts: 14, nrr: '+0.321' },
  { pos: 5, team: 'Delhi Capitals', sName: 'DC', p: 12, w: 6, l: 6, pts: 12, nrr: '+0.123' },
  { pos: 6, team: 'Kolkata Knight Riders', sName: 'KKR', p: 12, w: 5, l: 7, pts: 10, nrr: '-0.234' },
  { pos: 7, team: 'Rajasthan Royals', sName: 'RR', p: 12, w: 5, l: 7, pts: 10, nrr: '-0.412' },
  { pos: 8, team: 'Sunrisers Hyderabad', sName: 'SRH', p: 12, w: 4, l: 8, pts: 8, nrr: '-0.634' },
  { pos: 9, team: 'Gujarat Titans', sName: 'GT', p: 12, w: 3, l: 9, pts: 6, nrr: '-0.821' },
  { pos: 10, team: 'Lucknow Super Giants', sName: 'LSG', p: 12, w: 2, l: 10, pts: 4, nrr: '-1.134' },
];
export const mockCommentary = [
  { over: '18.3', text: 'FOUR! Dhoni smashes it through covers. CSK closing in fast!' },
  { over: '18.1', text: 'Wide down the leg side. Pressure building on MI.' },
  { over: '17.6', text: 'SIX! Jadeja goes over long-on. What a shot!' },
  { over: '17.4', text: 'OUT! Bumrah bowls Conway for 55. Big wicket for MI.' },
  { over: '17.2', text: 'Dot ball. Bumrah on a hat-trick? No, he misses.' },
  { over: '16.5', text: 'FOUR! Edge flies through third slip. Lucky for CSK.' },
];