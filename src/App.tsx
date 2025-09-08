import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import ServicesGrid from "./components/ServicesGrid";
import Slideshow from "./components/Slideshow";
import AboutUs from "./components/AboutUs";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <Slideshow />
      <AboutUs />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
