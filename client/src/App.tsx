import { Route, Switch } from "wouter";
import Home from "@/pages/Home";
import ServiceDetails from "@/pages/ServiceDetails";
import About from "@/pages/About";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Quote from "@/pages/Quote";
import Faq from "@/pages/Faq";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NotFound from "@/pages/not-found";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  return (
    <TooltipProvider>
      <div className="flex flex-col min-h-screen">
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
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
}

export default App;
