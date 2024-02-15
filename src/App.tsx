import { About } from "./components/About";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
// import { Newsletter } from "./components/Newsletter";
// import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import "./App.css";
import Video from './components/Video'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Video/>
      <About />
      {/* <HowItWorks /> */}
      <Features />
      {/* <Cta /> */}
      <Testimonials />
      <Team />
      {/* <Pricing /> */}
      {/* <Newsletter /> */}
      {/* <FAQ /> */}
      <Sponsors />
      <Services />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
