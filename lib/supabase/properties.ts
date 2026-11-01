import { supabase } from './client';
import { Database } from '@/types/database.types';
import { ListingType, Property, PropertyType } from '@/types/property';

export type PropertyRow = Database['public']['Tables']['properties']['Row'];

export interface PaginationMetadata {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  hasPrev: boolean;
  hasNext: boolean;
}

export interface GetMarketPropertiesParams {
  page?: number;
  pageSize?: number;
  propertyType?: PropertyType;
  listingType?: ListingType;
  searchQuery?: string;
}

export interface MarketPropertiesResult {
  properties: Property[];
  pagination: PaginationMetadata;
}

export function mapRowToProperty(row: PropertyRow): Property {
  return {
    id: row.id,
    title: row.title,
    price: Number(row.price),
    listingType: row.listing_type as 'sale' | 'rent',
    propertyType: row.property_type as 'house' | 'apartment' | 'villa' | 'penthouse',
    location: {
      address: row.address,
      city: row.city,
      state: row.state ?? undefined,
      country: row.country ?? undefined,
      displayAddress: row.display_address,
    },
    specs: {
      bedrooms: row.bedrooms,
      bathrooms: Number(row.bathrooms),
      areaM2: Number(row.area_m2),
    },
    imageUrl: row.image_url,
    imageAlt: row.image_alt,
    isFeatured: row.is_featured,
    badge: (row.badge as Property['badge']) ?? undefined,
    createdAt: row.created_at,
  };
}

export async function getFeaturedProperties(): Promise<Property[]> {
  try {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .eq('is_featured', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching featured properties from Supabase:', error);
      return [];
    }

    return (data || []).map(mapRowToProperty);
  } catch (err) {
    console.error('Unexpected error fetching featured properties:', err);
    return [];
  }
}

export async function getMarketProperties({
  page = 1,
  pageSize = 6,
  propertyType = 'all',
  listingType = 'all',
  searchQuery = '',
}: GetMarketPropertiesParams = {}): Promise<MarketPropertiesResult> {
  const safePage = Math.max(1, page);
  const safePageSize = Math.max(1, pageSize);
  const from = (safePage - 1) * safePageSize;
  const to = from + safePageSize - 1;

  try {
    let query = supabase
      .from('properties')
      .select('*', { count: 'exact' })
      .eq('is_featured', false);

    if (propertyType && propertyType !== 'all') {
      query = query.eq('property_type', propertyType);
    }

    if (listingType && listingType !== 'all') {
      query = query.eq('listing_type', listingType);
    }

    if (searchQuery && searchQuery.trim().length > 0) {
      const cleanQuery = searchQuery.trim();
      query = query.or(
        `title.ilike.%${cleanQuery}%,display_address.ilike.%${cleanQuery}%,city.ilike.%${cleanQuery}%`
      );
    }

    query = query
      .order('created_at', { ascending: false })
      .range(from, to);

    const { data, count, error } = await query;

    if (error) {
      console.error('Error querying market properties from Supabase:', error);
      return {
        properties: [],
        pagination: {
          page: safePage,
          pageSize: safePageSize,
          total: 0,
          totalPages: 1,
          hasPrev: false,
          hasNext: false,
        },
      };
    }

    const total = count ?? 0;
    const totalPages = Math.max(1, Math.ceil(total / safePageSize));
    const properties = (data || []).map(mapRowToProperty);

    return {
      properties,
      pagination: {
        page: safePage,
        pageSize: safePageSize,
        total,
        totalPages,
        hasPrev: safePage > 1,
        hasNext: safePage < totalPages,
      },
    };
  } catch (err) {
    console.error('Unexpected error in getMarketProperties:', err);
    return {
      properties: [],
      pagination: {
        page: safePage,
        pageSize: safePageSize,
        total: 0,
        totalPages: 1,
        hasPrev: false,
        hasNext: false,
      },
    };
  }
}
