import { galleryItems } from "@/lib/data";

export default function GallerySection() {
  return (
    <section id="gallery" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-roboto font-bold mb-4">Our Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            View some of our recent installations and projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map(item => (
            <div key={item.id} className="relative overflow-hidden rounded-lg shadow-md group">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-white font-roboto font-bold">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
