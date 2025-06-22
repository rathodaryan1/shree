import { testimonials } from "@/lib/data";
import { Star, StarHalf, Quote, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const renderRating = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`star-${i}`} className="fill-yellow-400 text-yellow-400 w-5 h-5" />);
  }
  
  if (hasHalfStar) {
    stars.push(<StarHalf key="half-star" className="fill-yellow-400 text-yellow-400 w-5 h-5" />);
  }
  
  return (
    <div className="flex">
      {stars}
    </div>
  );
};

export default function TestimonialsSection() {
  // Show only 3 testimonials on the home page
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-roboto font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients about their experience with our fire safety solutions.
          </p>
        </div>
        
        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {featuredTestimonials.map(testimonial => (
                <CarouselItem key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static mx-2" />
              <CarouselNext className="relative static mx-2" />
            </div>
          </Carousel>
        </div>
        
        {/* Desktop View - Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {featuredTestimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/testimonials">
            <Button variant="outline" className="font-medium">
              View All Testimonials <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    position: string;
    company: string;
    content: string;
    rating: number;
  };
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col relative">
      <Quote className="text-primary/10 w-12 h-12 absolute top-4 right-4" />
      
      <div className="flex items-center mb-4">
        <div className="text-secondary flex">
          {renderRating(testimonial.rating)}
        </div>
      </div>
      
      <p className="text-gray-600 mb-6 italic flex-grow">"{testimonial.content}"</p>
      
      <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
        <div className="w-12 h-12 bg-gray-100 rounded-full mr-4 flex items-center justify-center text-primary font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-roboto font-bold">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">
            {testimonial.position}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
