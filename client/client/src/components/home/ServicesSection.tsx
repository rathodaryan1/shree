import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/lib/data";

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-roboto font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive fire safety solutions for businesses of all sizes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/contact">
            <Button 
              className="bg-primary hover:bg-red-700 text-white font-roboto font-medium px-8 py-3"
            >
              Request a Service
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
