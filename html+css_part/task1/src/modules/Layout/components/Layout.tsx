import Header from "../../../components/Header/index";
import Footer from "../../../components/Footer/index";
import BlogsSection from "../../BlogsSection/index";
import CommentsSection from "../../CommentsSection/index";
import HeroSection from "../../HeroSection/index";
import SpeedArticleSection from "../../SpeedArticleSection/index";
import MainInfoSection from "../../MainInfoSection/index";
import EfficientArticleSection from "../../EfficientArticleSection/index";
import PricingSection from "../../PricingSection/index";
import ContactsSection from "../../ContactSection/index";

interface LayoutProps {
  sections: JSX.Element[];
}

function Layout(): JSX.Element {
  const sections = [
    <HeroSection />,
    <SpeedArticleSection />,
    <MainInfoSection />,
    <EfficientArticleSection />,
    <CommentsSection />,
    <PricingSection />,
    <BlogsSection />,
    <ContactsSection />,
  ];
  return (
    <>
      <Header />
      <main>
        {sections.map((section, index) => (
          <section key={index}>{section}</section>
        ))}
      </main>
      <Footer />
    </>
  );
}
export default Layout;
