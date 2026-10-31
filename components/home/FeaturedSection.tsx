'use client';

import React from 'react';
import Link from 'next/link';
import { Property } from '@/types/property';
import FeaturedPropertyCard from '@/components/properties/FeaturedPropertyCard';

interface FeaturedSectionProps {
  properties: Property[];
  favorites: Set<string>;
  onToggleFavorite: (id: string) => void;
}

export default function FeaturedSection({
  properties,
  favorites,
  onToggleFavorite,
}: FeaturedSectionProps) {
  if (properties.length === 0) return null;

  return (
    <section className="mb-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl font-light text-nordic-dark">
            Featured Collections
          </h2>
          <p className="text-nordic-muted mt-1 text-sm">
            Curated properties for the discerning eye.
          </p>
        </div>
        <Link
          href="#"
          className="hidden sm:flex items-center gap-1 text-sm font-medium text-mosque hover:opacity-70 transition-opacity"
        >
          View all <span className="material-icons text-sm">arrow_forward</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {properties.map((property) => (
          <FeaturedPropertyCard
            key={property.id}
            property={property}
            isFavorite={favorites.has(property.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </section>
  );
}
