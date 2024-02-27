import Layout from "../../../modules/Layout/index";
import HeroSection from "../../../modules/HeroSection";
import TripsSection from "../../../modules/TripsSection";
import QuoteSection from "../../../modules/QuoteSection";

function HomePage() {
  return (
    <>
      <Layout>
        <HeroSection />
        <TripsSection />
        <QuoteSection />
      </Layout>
    </>
  );
}

export default HomePage;
