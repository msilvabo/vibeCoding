import Navbar from '@/components/common/Navbar';
import HomeView from '@/components/home/HomeView';
import Footer from '@/components/common/Footer';
import { FEATURED_PROPERTIES, MARKET_PROPERTIES } from '@/data/mockProperties';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background-light">
      <Navbar />
      <div className="flex-1">
        <HomeView
          initialFeaturedProperties={FEATURED_PROPERTIES}
          initialMarketProperties={MARKET_PROPERTIES}
        />
      </div>
      <Footer />
    </div>
  );
}
