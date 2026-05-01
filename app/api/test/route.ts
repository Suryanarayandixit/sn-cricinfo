export async function GET() {
  const res = await fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live', {
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY!,
      'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com',
    },
  });
  const data = await res.json();
  return Response.json(data);
}
