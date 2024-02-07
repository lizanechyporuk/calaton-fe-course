import Layout from "../../../modules/Layout/index";
import Banner from "../../../components/Banner/index";
import HeroSection from "../../../modules/HeroSection";
import SpeedArticleSection from "../../../modules/SpeedArticleSection";
import EfficientArticleSection from "../../../modules/EfficientArticleSection";
import MainInfoSection from "../../../modules/MainInfoSection";
import CommentsSection from "../../../modules/CommentsSection";
import BlogsSection from "../../../modules/BlogsSection";
import PricingSection from "../../../modules/PricingSection";
import ContactsSection from "../../../modules/ContactSection";

function HomePage() {
  return (
    <>
      <Banner />
      <Layout>
        <HeroSection />
        <SpeedArticleSection />
        <MainInfoSection />
        <EfficientArticleSection />
        <CommentsSection />
        <PricingSection />
        <BlogsSection />
        <ContactsSection />
      </Layout>
    </>
  );
}

export default HomePage;
