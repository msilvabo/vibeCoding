'use client';

import React from 'react';
import Image from 'next/image';
import { Property } from '@/types/property';

interface PropertyCardProps {
  property: Property;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export default function PropertyCard({
  property,
  isFavorite = false,
  onToggleFavorite,
}: PropertyCardProps) {
  const isRent = property.listingType === 'rent';

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 group cursor-pointer h-full flex flex-col">
      {/* Property Image & Badges */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          alt={property.imageAlt || property.title}
          src={property.imageUrl}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />

        {/* Favorite Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite?.(property.id);
          }}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-colors cursor-pointer z-10 ${
            isFavorite
              ? 'bg-mosque text-white'
              : 'bg-white/90 text-nordic-dark hover:bg-mosque hover:text-white'
          }`}
        >
          <span className="material-icons text-lg">
            {isFavorite ? 'favorite' : 'favorite_border'}
          </span>
        </button>

        {/* Listing Type Tag (FOR SALE vs FOR RENT) */}
        <div
          className={`absolute bottom-3 left-3 text-white text-xs font-bold px-2 py-1 rounded z-10 ${
            isRent ? 'bg-mosque/90' : 'bg-nordic-dark/90'
          }`}
        >
          {isRent ? 'FOR RENT' : 'FOR SALE'}
        </div>
      </div>

      {/* Property Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="font-bold text-lg text-nordic-dark">
            {formattedPrice}
            {isRent && (
              <span className="text-sm font-normal text-nordic-muted">/mo</span>
            )}
          </h3>
        </div>

        <h4 className="text-nordic-dark font-medium truncate mb-1">
          {property.title}
        </h4>

        <p className="text-nordic-muted text-xs mb-4">
          {property.location.displayAddress}
        </p>

        {/* Specs footer */}
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-1 text-nordic-muted text-xs">
            <span className="material-icons text-sm text-mosque/80">king_bed</span>{' '}
            {property.specs.bedrooms}
          </div>
          <div className="flex items-center gap-1 text-nordic-muted text-xs">
            <span className="material-icons text-sm text-mosque/80">bathtub</span>{' '}
            {property.specs.bathrooms}
          </div>
          <div className="flex items-center gap-1 text-nordic-muted text-xs">
            <span className="material-icons text-sm text-mosque/80">square_foot</span>{' '}
            {property.specs.areaM2}m²
          </div>
        </div>
      </div>
    </article>
  );
}
