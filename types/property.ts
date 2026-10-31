export type PropertyType = 'all' | 'house' | 'apartment' | 'villa' | 'penthouse';

export type ListingType = 'all' | 'sale' | 'rent';

export type PropertyBadge = 'Exclusive' | 'New Arrival' | 'Featured';

export interface PropertyLocation {
  address: string;
  city: string;
  state?: string;
  country?: string;
  displayAddress: string;
}

export interface PropertySpecs {
  bedrooms: number;
  bathrooms: number;
  areaM2: number;
}

export interface Property {
  id: string;
  title: string;
  price: number;
  listingType: 'sale' | 'rent';
  propertyType: 'house' | 'apartment' | 'villa' | 'penthouse';
  location: PropertyLocation;
  specs: PropertySpecs;
  imageUrl: string;
  imageAlt: string;
  isFeatured?: boolean;
  badge?: PropertyBadge;
  isFavorite?: boolean;
  createdAt: string;
}

export interface PropertyFilters {
  searchQuery: string;
  propertyType: PropertyType;
  listingType: ListingType;
}
