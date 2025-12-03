import { useEffect } from "react";
import { testimonials } from "@/lib/data";
import { TestimonialCard } from "@/components/home/TestimonialsSection";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function Testimonials() {
  useEffect(() => {
    document.title = "Client Testimonials - Shree Enterprise";
  }, []);

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-primary hover:text-red-700 mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-roboto font-bold mb-4">Client Testimonials</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Read what our clients have to say about our fire safety services. We take pride in delivering quality solutions that meet and exceed expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        {/* Add your own testimonial CTA */}
        <div className="bg-light rounded-lg p-8 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-roboto font-bold mb-4">Happy with our services?</h2>
          <p className="text-gray-600 mb-6">
            If you've worked with us and would like to share your experience, we'd love to hear from you.
            Your feedback helps us improve and helps others make informed decisions.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-red-700 text-white font-medium">
              Share Your Experience
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}