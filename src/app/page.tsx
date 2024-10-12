import AboutSection from "../_components/about-section";
import IntroSection from "../_components/intro-section";
import FeatureSection from "../_components/feature-section";
import ContactSection from "../_components/contact-section";
import FooterSection from "../_components/footer-section";

export default function Home() {
  return (
    <main className="">
      <IntroSection />

      <AboutSection /> 
      
      <FeatureSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
