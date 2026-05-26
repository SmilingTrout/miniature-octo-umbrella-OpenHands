import React from 'react';

export default function FilterBar({ filter, setFilter, sortBy, setSortBy, search, setSearch }) {
  return (
    <div className="bg-chess-card/50 backdrop-blur-sm rounded-xl p-4 mb-8 flex flex-wrap gap-4 items-center">
      {/* Search */}
      <div className="flex-1 min-w-[200px]">
        <input
          type="text"
          placeholder="Search platforms..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-chess-dark border border-gray-600 rounded-lg px-4 py-2 text-chess-text placeholder-gray-500 focus:outline-none focus:border-chess-accent"
        />
      </div>

      {/* Filter by tier */}
      <div className="flex items-center gap-2">
        <label className="text-chess-text text-sm">Filter:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-chess-dark border border-gray-600 rounded-lg px-4 py-2 text-chess-text focus:outline-none focus:border-chess-accent"
        >
          <option value="all">All Platforms</option>
          <option value="free">Free Only</option>
          <option value="freemium">Freemium</option>
          <option value="kids">For Kids</option>
          <option value="premium">Premium</option>
        </select>
      </div>

      {/* Sort by */}
      <div className="flex items-center gap-2">
        <label className="text-chess-text text-sm">Sort:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-chess-dark border border-gray-600 rounded-lg px-4 py-2 text-chess-text focus:outline-none focus:border-chess-accent"
        >
          <option value="name">Name</option>
          <option value="tier">Tier</option>
        </select>
      </div>
    </div>
  );
}
