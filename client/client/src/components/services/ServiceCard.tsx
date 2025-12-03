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
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105 border border-gray-100"
    >
      <img 
        src={service.imageUrl} 
        alt={service.title} 
        className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
      />
      <div className="p-6">
        <h3 className="font-roboto font-bold text-xl mb-3 text-gray-800">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.shortDescription}</p>
        <Link 
          href={`/services/${service.id}`}
          className="inline-flex items-center text-primary font-medium hover:text-red-700 transition-colors group"
        >
          Learn more 
          <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
