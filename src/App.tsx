import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import ServicesGrid from "./components/ServicesGrid";
import AboutUs from "./components/AboutUs";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <ServicesGrid />
        <AboutUs />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
