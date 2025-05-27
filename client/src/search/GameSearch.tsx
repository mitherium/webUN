import { useState } from 'react';

export default function GameSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const search = async () => {
    const res = await fetch('http://localhost:5000/api/games/search?q=' + query);
    const games = await res.json();
    setResults(games);
  };

  return (
    <div className="p-4">
      <input value={query} onChange={e => setQuery(e.target.value)} className="text-black p-1 mr-2" />
      <button onClick={search} className="bg-blue-600 px-2 py-1 rounded">Поиск</button>
      <ul className="mt-4">
        {results.map((game, idx) => (
          <li key={idx}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
}