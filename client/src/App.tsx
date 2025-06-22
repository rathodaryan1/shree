import { Route, Switch } from "wouter";
import Home from "@/pages/Home";
import ServiceDetails from "@/pages/ServiceDetails";
import About from "@/pages/About";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Quote from "@/pages/Quote";
import Faq from "@/pages/Faq";
import Testimonials from "@/pages/Testimonials";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NotFound from "@/pages/not-found";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollToTopbutton from "@/components/ScrollToTopbutton";
import ScrollToHashElement from "@/components/ScrollToHashElement";
import ScrollToTop from "@/components/ScrollToTop";


function App() {
  // Replace with your actual Google Analytics Measurement ID when available
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

  return (<>
     <ScrollToHashElement />
  
      <div className="flex flex-col min-h-screen">
        {/* Google Analytics integration */}
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
        
        {/* Floating CTA buttons */}
        <FloatingCTA />
        
        <ScrollToTop />
        
        <Header />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/services/:id" component={ServiceDetails} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
            <Route path="/quote" component={Quote} />
            <Route path="/faq" component={Faq} />
            <Route path="/testimonials" component={Testimonials} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
      </>
  );
}

export default App;
