'use client';

import React from 'react';
import { ListingType, Property } from '@/types/property';
import PropertyCard from '@/components/properties/PropertyCard';

interface MarketSectionProps {
  properties: Property[];
  activeListingType: ListingType;
  onListingTypeChange: (type: ListingType) => void;
  favorites: Set<string>;
  onToggleFavorite: (id: string) => void;
  hasMore: boolean;
  onLoadMore: () => void;
}

const LISTING_TABS: Array<{ id: ListingType; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'sale', label: 'Buy' },
  { id: 'rent', label: 'Rent' },
];

export default function MarketSection({
  properties,
  activeListingType,
  onListingTypeChange,
  favorites,
  onToggleFavorite,
  hasMore,
  onLoadMore,
}: MarketSectionProps) {
  return (
    <section>
      {/* Header and Filter Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-light text-nordic-dark">
            New in Market
          </h2>
          <p className="text-nordic-muted mt-1 text-sm">
            Fresh opportunities added this week.
          </p>
        </div>

        {/* Listing Type Tabs (All / Buy / Rent) */}
        <div className="flex bg-white p-1 rounded-lg border border-nordic-dark/5 self-start sm:self-auto">
          {LISTING_TABS.map((tab) => {
            const isActive = activeListingType === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onListingTypeChange(tab.id)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-nordic-dark text-white shadow-sm'
                    : 'text-nordic-muted hover:text-nordic-dark'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of properties */}
      {properties.length === 0 ? (
        <div className="text-center py-16 bg-white/60 rounded-2xl border border-nordic-dark/5">
          <span className="material-icons text-4xl text-nordic-muted mb-2">
            search_off
          </span>
          <p className="text-nordic-dark font-medium">
            No properties found
          </p>
          <p className="text-nordic-muted text-sm mt-1">
            Try adjusting your search criteria or category filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              isFavorite={favorites.has(property.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}

      {/* Load More Button */}
      {hasMore && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onLoadMore}
            className="px-8 py-3 bg-white border border-nordic-dark/10 hover:border-mosque hover:text-mosque text-nordic-dark font-medium rounded-lg transition-all hover:shadow-md cursor-pointer"
          >
            Load more properties
          </button>
        </div>
      )}
    </section>
  );
}
