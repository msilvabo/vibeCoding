'use client';

import React, { useState, useTransition } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { ListingType, Property, PropertyType } from '@/types/property';
import { PaginationMetadata } from '@/lib/supabase/properties';
import HeroSection from './HeroSection';
import FeaturedSection from './FeaturedSection';
import MarketSection from './MarketSection';

interface HomeViewProps {
  featuredProperties: Property[];
  marketProperties: Property[];
  pagination: PaginationMetadata;
  currentFilters: {
    page: number;
    propertyType: PropertyType;
    listingType: ListingType;
    searchQuery: string;
  };
}

export default function HomeView({
  featuredProperties,
  marketProperties,
  pagination,
  currentFilters,
}: HomeViewProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const [searchQuery, setSearchQuery] = useState(currentFilters.searchQuery);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  // Helper to build URL with updated search parameters
  const updateQueryParams = (updates: {
    page?: number | null;
    type?: PropertyType | null;
    listing?: ListingType | null;
    q?: string | null;
  }) => {
    const params = new URLSearchParams();

    // Type filter
    const effectiveType = updates.type !== undefined ? updates.type : currentFilters.propertyType;
    if (effectiveType && effectiveType !== 'all') {
      params.set('type', effectiveType);
    }

    // Listing filter
    const effectiveListing = updates.listing !== undefined ? updates.listing : currentFilters.listingType;
    if (effectiveListing && effectiveListing !== 'all') {
      params.set('listing', effectiveListing);
    }

    // Search query
    const effectiveQuery = updates.q !== undefined ? updates.q : searchQuery;
    if (effectiveQuery && effectiveQuery.trim()) {
      params.set('q', effectiveQuery.trim());
    }

    // Page (reset to 1 if any filter changed, unless explicitly setting page)
    const effectivePage = updates.page !== undefined ? updates.page : 1;
    if (effectivePage && effectivePage > 1) {
      params.set('page', effectivePage.toString());
    }

    const qs = params.toString();
    const targetUrl = qs ? `${pathname}?${qs}` : pathname;

    startTransition(() => {
      router.push(targetUrl, { scroll: false });
    });
  };

  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleCategoryChange = (category: PropertyType) => {
    updateQueryParams({ type: category, page: 1 });
  };

  const handleListingTypeChange = (listing: ListingType) => {
    updateQueryParams({ listing, page: 1 });
  };

  const handleSearchSubmit = () => {
    updateQueryParams({ q: searchQuery, page: 1 });
  };

  return (
    <main className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 transition-opacity duration-200 ${isPending ? 'opacity-70' : 'opacity-100'}`}>
      {/* Hero Section with search & category pills */}
      <HeroSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={currentFilters.propertyType}
        onCategoryChange={handleCategoryChange}
        onSearchSubmit={handleSearchSubmit}
      />

      {/* Featured Collections Section (Only shown when not deeply searching/filtering or when featured exists) */}
      {featuredProperties.length > 0 && currentFilters.page === 1 && (
        <FeaturedSection
          properties={featuredProperties}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />
      )}

      {/* New in Market Section with Server Pagination */}
      <MarketSection
        properties={marketProperties}
        activeListingType={currentFilters.listingType}
        onListingTypeChange={handleListingTypeChange}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
        pagination={pagination}
        baseParams={{
          type: currentFilters.propertyType,
          listing: currentFilters.listingType,
          q: currentFilters.searchQuery,
        }}
      />
    </main>
  );
}
