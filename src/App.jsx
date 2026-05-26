import React, { useState, useMemo } from 'react';
import { platforms } from './data/platforms';
import PlatformCard from './components/PlatformCard';
import FilterBar from './components/FilterBar';

export default function App() {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [search, setSearch] = useState('');

  const filteredPlatforms = useMemo(() => {
    let result = platforms;

    // Search filter
    if (search) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Tier filter
    if (filter !== 'all') {
      result = result.filter(p => 
        p.tier.toLowerCase() === filter ||
        (filter === 'free' && p.id === 'lichess')
      );
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'tier') return a.tier.localeCompare(b.tier);
      return 0;
    });

    return result;
  }, [filter, sortBy, search]);

  return (
    <div className="min-h-screen bg-chess-dark">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-chess-card to-chess-dark py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ♟️ Chess Platform Comparison
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the best free online chess platforms. Compare features, 
            game limits, and more to find your perfect chess companion.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <FilterBar 
          filter={filter}
          setFilter={setFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          search={search}
          setSearch={setSearch}
        />

        {/* Results count */}
        <p className="text-gray-400 mb-6">
          Showing {filteredPlatforms.length} platform{filteredPlatforms.length !== 1 ? 's' : ''}
        </p>

        {/* Platform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlatforms.map(platform => (
            <PlatformCard key={platform.id} platform={platform} />
          ))}
        </div>

        {/* No results */}
        {filteredPlatforms.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No platforms found matching your criteria.</p>
            <button 
              onClick={() => { setFilter('all'); setSearch(''); }}
              className="mt-4 text-chess-accent hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-chess-card py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            Data sourced from public information. Always verify current offerings on each platform's website.
          </p>
        </div>
      </footer>
    </div>
  );
}
