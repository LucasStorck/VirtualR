import "./App.css";
import FeatureSection from "./components/FeatureSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import ScrollButton from "./components/ScrollButton";
import TestimonialsSection from "./components/TestimonialsSection";
import WorkflowSection from "./components/WorkflowSection";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="py-60">
        <HeroSection></HeroSection>
      </div>
      <FeatureSection></FeatureSection>
      <WorkflowSection></WorkflowSection>
      <PricingSection></PricingSection>
      <TestimonialsSection></TestimonialsSection>
      <FooterSection></FooterSection>
      <ScrollButton></ScrollButton>
    </>
  );
}

export default App;
