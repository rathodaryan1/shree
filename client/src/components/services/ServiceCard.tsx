import { Link } from "wouter";
import { Service } from "@/lib/data";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div 
      id={service.id}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105"
    >
      <img 
        src={service.imageUrl} 
        alt={service.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="font-roboto font-bold text-xl mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.shortDescription}</p>
        <Link 
          href={`/services/${service.id}`}
          className="inline-block text-primary font-medium hover:text-red-700"
        >
          Learn more <ArrowRight className="inline ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
