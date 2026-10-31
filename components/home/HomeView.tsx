'use client';

import React, { useState, useMemo } from 'react';
import { ListingType, Property, PropertyType } from '@/types/property';
import HeroSection from './HeroSection';
import FeaturedSection from './FeaturedSection';
import MarketSection from './MarketSection';

interface HomeViewProps {
  initialFeaturedProperties: Property[];
  initialMarketProperties: Property[];
}

export default function HomeView({
  initialFeaturedProperties,
  initialMarketProperties,
}: HomeViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PropertyType>('all');
  const [activeListingType, setActiveListingType] = useState<ListingType>('all');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Toggle favorite property handler
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

  // Filter featured properties based on search query and category
  const filteredFeatured = useMemo(() => {
    return initialFeaturedProperties.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.propertyType !== selectedCategory) {
        return false;
      }
      // Listing type filter
      if (activeListingType !== 'all' && item.listingType !== activeListingType) {
        return false;
      }
      // Search text query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesLocation = item.location.displayAddress.toLowerCase().includes(query);
        if (!matchesTitle && !matchesLocation) return false;
      }
      return true;
    });
  }, [initialFeaturedProperties, selectedCategory, activeListingType, searchQuery]);

  // Filter market properties
  const filteredMarket = useMemo(() => {
    return initialMarketProperties.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.propertyType !== selectedCategory) {
        return false;
      }
      // Listing type filter
      if (activeListingType !== 'all' && item.listingType !== activeListingType) {
        return false;
      }
      // Search text query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesLocation = item.location.displayAddress.toLowerCase().includes(query);
        if (!matchesTitle && !matchesLocation) return false;
      }
      return true;
    });
  }, [initialMarketProperties, selectedCategory, activeListingType, searchQuery]);

  // Paginated visible properties for 'New in Market'
  const visibleMarketProperties = useMemo(() => {
    return filteredMarket.slice(0, visibleCount);
  }, [filteredMarket, visibleCount]);

  const hasMore = visibleCount < filteredMarket.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      {/* Hero Section with search & category pills */}
      <HeroSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Featured Collections Section */}
      <FeaturedSection
        properties={filteredFeatured}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
      />

      {/* New in Market Section */}
      <MarketSection
        properties={visibleMarketProperties}
        activeListingType={activeListingType}
        onListingTypeChange={setActiveListingType}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
        hasMore={hasMore}
        onLoadMore={handleLoadMore}
      />
    </main>
  );
}
