import { galleryItems } from "@/lib/data";
import { useEffect } from "react";

export default function Gallery() {
  // Set the page title
  useEffect(() => {
    document.title = "Project Gallery - Shree Enterprise";
  }, []);

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-roboto font-bold mb-4">Our Project Gallery</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our completed fire safety installations and projects across various commercial, industrial, and residential properties.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map(item => (
            <div key={item.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-md mb-4">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-72 object-cover transition duration-500 group-hover:scale-110" 
                />
              </div>
              <h3 className="font-roboto font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-light p-8 rounded-lg">
          <h2 className="text-2xl font-roboto font-bold mb-6 text-center">Our Installation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  1
                </div>
                <div className="hidden md:block absolute top-8 w-full h-1 bg-primary/20"></div>
              </div>
              <h3 className="font-roboto font-bold text-lg mb-2">Consultation</h3>
              <p className="text-gray-600">Initial assessment of your requirements and site evaluation</p>
            </div>
            <div className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  2
                </div>
                <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-primary/20"></div>
              </div>
              <h3 className="font-roboto font-bold text-lg mb-2">Design</h3>
              <p className="text-gray-600">Custom system design as per regulations and your specific needs</p>
            </div>
            <div className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  3
                </div>
                <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-primary/20"></div>
              </div>
              <h3 className="font-roboto font-bold text-lg mb-2">Installation</h3>
              <p className="text-gray-600">Professional installation by our trained technicians</p>
            </div>
            <div className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  4
                </div>
              </div>
              <h3 className="font-roboto font-bold text-lg mb-2">Testing & Maintenance</h3>
              <p className="text-gray-600">Thorough testing and ongoing maintenance services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
