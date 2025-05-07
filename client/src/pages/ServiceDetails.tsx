import { useParams, Link, useLocation } from "wouter";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";

export default function ServiceDetails() {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const service = services.find(s => s.id === id);
  
  useEffect(() => {
    if (service) {
      document.title = `${service.title} - Shree Enterprise`;
    } else {
      setLocation("/");
    }
  }, [service, setLocation]);
  
  if (!service) {
    return null;
  }
  
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <Link href="/#services" className="inline-flex items-center text-primary hover:text-red-700 mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Services
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img 
              src={service.imageUrl} 
              alt={service.title} 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          
          <div>
            <h1 className="text-3xl md:text-4xl font-roboto font-bold mb-6">{service.title}</h1>
            <p className="text-gray-600 mb-8">{service.description}</p>
            
            <div className="bg-light p-6 rounded-lg mb-8">
              <h2 className="font-roboto font-bold text-xl mb-4">Key Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Professional installation by certified experts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Compliance with all safety regulations and standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>High-quality equipment and components</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Regular maintenance and service available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Emergency support and quick response time</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-red-700 text-white font-roboto font-medium w-full sm:w-auto">
                  Request a Quote
                </Button>
              </Link>
              <a href={`tel:+917337196916`}>
                <Button variant="outline" className="w-full sm:w-auto">
                  Call for Enquiry
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
