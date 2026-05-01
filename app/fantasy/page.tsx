'use client';
import { useState } from 'react';

const players = [
  { id: 1, name: 'MS Dhoni', team: 'CSK', role: 'WK', pts: 456, price: 9.5 },
  { id: 2, name: 'Rohit Sharma', team: 'MI', role: 'BAT', pts: 412, price: 9.0 },
  { id: 3, name: 'Virat Kohli', team: 'RCB', role: 'BAT', pts: 498, price: 10.5 },
  { id: 4, name: 'Jasprit Bumrah', team: 'MI', role: 'BOWL', pts: 389, price: 9.0 },
  { id: 5, name: 'Ravindra Jadeja', team: 'CSK', role: 'ALL', pts: 445, price: 9.5 },
  { id: 6, name: 'KL Rahul', team: 'LSG', role: 'WK', pts: 378, price: 9.0 },
  { id: 7, name: 'Rashid Khan', team: 'GT', role: 'BOWL', pts: 401, price: 9.5 },
  { id: 8, name: 'Shubman Gill', team: 'GT', role: 'BAT', pts: 367, price: 8.5 },
];

const roleColors: Record<string, string> = {
  WK: 'bg-yellow-500/20 text-yellow-400',
  BAT: 'bg-blue-500/20 text-blue-400',
  BOWL: 'bg-red-500/20 text-red-400',
  ALL: 'bg-green-500/20 text-green-400',
};

export default function FantasyPage() {
  const [selected, setSelected] = useState<number[]>([]);
  const budget = 100;
  const spent = selected.reduce((acc, id) => {
    const p = players.find(p => p.id === id);
    return acc + (p?.price || 0);
  }, 0);

  const toggle = (id: number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(s => s !== id));
    } else if (selected.length < 11 && spent + (players.find(p => p.id === id)?.price || 0) <= budget) {
      setSelected([...selected, id]);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="font-display font-bold text-3xl text-white mb-2">Fantasy Central</h1>

      {/* Budget bar */}
      <div className="bg-pitch-800 rounded-xl border border-white/10 p-4 mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Budget Used: <span className="text-gold font-bold">₹{spent.toFixed(1)} Cr</span></span>
          <span className="text-gray-400">Remaining: <span className="text-green-400 font-bold">₹{(budget - spent).toFixed(1)} Cr</span></span>
          <span className="text-gray-400">Players: <span className="text-white font-bold">{selected.length}/11</span></span>
        </div>
        <div className="h-2 bg-pitch-700 rounded-full overflow-hidden">
          <div className="h-full bg-gold-gradient rounded-full transition-all"
            style={{ width: `${(spent / budget) * 100}%` }} />
        </div>
      </div>

      {/* Players */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {players.map(player => {
          const isSelected = selected.includes(player.id);
          return (
            <button key={player.id} onClick={() => toggle(player.id)}
              className={`card-hover text-left p-4 rounded-xl border transition-all ${
                isSelected
                  ? 'bg-gold/10 border-gold'
                  : 'bg-pitch-800 border-white/10 hover:border-gold/40'
              }`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-white text-base">{player.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-400">{player.team}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${roleColors[player.role]}`}>
                      {player.role}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gold font-bold">₹{player.price} Cr</p>
                  <p className="text-xs text-gray-400">{player.pts} pts</p>
                </div>
              </div>
              {isSelected && (
                <div className="mt-2 text-xs text-gold flex items-center gap-1">
                  ✓ Selected
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Submit */}
      {selected.length === 11 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
          <button className="bg-gold-gradient text-pitch font-display font-bold text-lg px-8 py-3 rounded-full shadow-2xl">
            🏆 Create Team
          </button>
        </div>
      )}
    </div>
  );
}