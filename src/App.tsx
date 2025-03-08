import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ParallaxSection } from './components/ParallaxSection';
import { Stats } from './components/Stats';
import { InvestmentHighlights } from './components/InvestmentHighlights';
import { BusinessProjections } from './components/BusinessProjections';
import { TourismSection } from './components/TourismSection';
import { OperationalData } from './components/OperationalData';
import { MarketExpansion } from './components/MarketExpansion';
import { CommunityFranchise } from './components/CommunityFranchise';
import { SupplyChain } from './components/SupplyChain';
import { BrandMerchandise } from './components/BrandMerchandise';
import { Login } from './components/Login';
import { QingyuanChickenSection } from './components/QingyuanChickenSection';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Clear login status on app start
    localStorage.removeItem('isLoggedIn');
  }, []);

  // Show login page if not logged in
  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="overflow-hidden">
      {isLoggedIn && (
        <>
          <Hero />
          <QingyuanChickenSection />
          <MarketExpansion />
          <TourismSection />
          <SupplyChain />

          <CommunityFranchise />
         
          <BrandMerchandise />
          <Features />
          <ParallaxSection />
          <BusinessProjections />
          <InvestmentHighlights />
					 <OperationalData />
        </>
      )}
    </div>
  );
}

export default App;
