import Navbar from '@/components/common/Navbar';
import HomeView from '@/components/home/HomeView';
import Footer from '@/components/common/Footer';
import { getFeaturedProperties, getMarketProperties } from '@/lib/supabase/properties';
import { ListingType, PropertyType } from '@/types/property';

export const instant = false;

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function HomePage(props: PageProps) {
  const resolvedSearchParams = await props.searchParams;

  const rawPage = typeof resolvedSearchParams.page === 'string' ? resolvedSearchParams.page : '1';
  const page = Math.max(1, parseInt(rawPage, 10) || 1);

  const rawType = typeof resolvedSearchParams.type === 'string' ? resolvedSearchParams.type : 'all';
  const propertyType = (['all', 'house', 'apartment', 'villa', 'penthouse'].includes(rawType)
    ? rawType
    : 'all') as PropertyType;

  const rawListing = typeof resolvedSearchParams.listing === 'string' ? resolvedSearchParams.listing : 'all';
  const listingType = (['all', 'sale', 'rent'].includes(rawListing)
    ? rawListing
    : 'all') as ListingType;

  const searchQuery = typeof resolvedSearchParams.q === 'string' ? resolvedSearchParams.q : '';

  const [featuredProperties, marketData] = await Promise.all([
    getFeaturedProperties(),
    getMarketProperties({
      page,
      pageSize: 6,
      propertyType,
      listingType,
      searchQuery,
    }),
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-background-light">
      <Navbar />
      <div className="flex-1">
        <HomeView
          featuredProperties={featuredProperties}
          marketProperties={marketData.properties}
          pagination={marketData.pagination}
          currentFilters={{
            page,
            propertyType,
            listingType,
            searchQuery,
          }}
        />
      </div>
      <Footer />
    </div>
  );
}
