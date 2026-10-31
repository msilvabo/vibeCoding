'use client';

import React from 'react';
import Image from 'next/image';
import { Property } from '@/types/property';
import { formatPrice } from '@/data/mockProperties';

interface FeaturedPropertyCardProps {
  property: Property;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export default function FeaturedPropertyCard({
  property,
  isFavorite = false,
  onToggleFavorite,
}: FeaturedPropertyCardProps) {
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-soft bg-white cursor-pointer transition-all duration-300">
      {/* Property Image Container */}
      <div className="aspect-[4/3] w-full overflow-hidden relative">
        <Image
          alt={property.imageAlt || property.title}
          src={property.imageUrl}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {/* Badge */}
        {property.badge && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-nordic-dark shadow-sm z-10">
            {property.badge}
          </div>
        )}

        {/* Favorite Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite?.(property.id);
          }}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer z-10 ${
            isFavorite
              ? 'bg-mosque text-white'
              : 'bg-white/90 text-nordic-dark hover:bg-mosque hover:text-white'
          }`}
        >
          <span className="material-icons text-xl">
            {isFavorite ? 'favorite' : 'favorite_border'}
          </span>
        </button>

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-60 pointer-events-none z-[1]"></div>
      </div>

      {/* Property Details */}
      <div className="p-6 relative">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-medium text-nordic-dark group-hover:text-mosque transition-colors">
              {property.title}
            </h3>
            <p className="text-nordic-muted text-sm flex items-center gap-1 mt-1">
              <span className="material-icons text-sm">place</span>
              {property.location.displayAddress}
            </p>
          </div>
          <span className="text-xl font-semibold text-mosque whitespace-nowrap ml-4">
            {formatPrice(property.price, property.listingType)}
          </span>
        </div>

        {/* Specs Bar */}
        <div className="flex items-center gap-6 mt-6 pt-6 border-t border-nordic-dark/5">
          <div className="flex items-center gap-2 text-nordic-muted text-sm">
            <span className="material-icons text-lg">king_bed</span>
            {property.specs.bedrooms} Beds
          </div>
          <div className="flex items-center gap-2 text-nordic-muted text-sm">
            <span className="material-icons text-lg">bathtub</span>
            {property.specs.bathrooms} Baths
          </div>
          <div className="flex items-center gap-2 text-nordic-muted text-sm">
            <span className="material-icons text-lg">square_foot</span>
            {new Intl.NumberFormat('en-US').format(property.specs.areaM2)} m²
          </div>
        </div>
      </div>
    </div>
  );
}
