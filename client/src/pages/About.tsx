import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/data";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";

export default function About() {
  // Set the page title
  useEffect(() => {
    document.title = "About Us - Shree Enterprise";
  }, []);

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-roboto font-bold mb-4">About Shree Enterprise</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Leading provider of fire safety solutions in Bhavnagar and surrounding areas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src="/shreelogo-finalv23.jpg" 
              alt="Fire safety installation" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-roboto font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Shree Enterprise was founded with a mission to provide comprehensive fire safety solutions to businesses and residents in Bhavnagar and surrounding areas. We began as a small team of fire safety professionals and have since grown into a trusted provider of complete fire protection services.
            </p>
            <p className="text-gray-600 mb-6">
              {companyInfo.about}
            </p>
            
            <h3 className="font-roboto font-bold text-xl mb-4">Our Core Values</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <CheckCircle className="text-primary mt-1 mr-3 h-5 w-5" />
                <div>
                  <p className="font-medium">Safety First</p>
                  <p className="text-gray-600 text-sm">We prioritize safety in every decision we make</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mt-1 mr-3 h-5 w-5" />
                <div>
                  <p className="font-medium">Quality Excellence</p>
                  <p className="text-gray-600 text-sm">We never compromise on the quality of our products and services</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mt-1 mr-3 h-5 w-5" />
                <div>
                  <p className="font-medium">Customer Satisfaction</p>
                  <p className="text-gray-600 text-sm">Our clients' needs and satisfaction are at the heart of our operations</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mt-1 mr-3 h-5 w-5" />
                <div>
                  <p className="font-medium">Continuous Improvement</p>
                  <p className="text-gray-600 text-sm">We constantly strive to enhance our services and stay updated with the latest technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-light p-8 rounded-lg mb-16">
          <h2 className="text-2xl md:text-3xl font-roboto font-bold mb-6 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-roboto font-bold text-lg mb-2">2+ Years Experience</h3>
              <p className="text-gray-600">Over a decade of expertise in fire safety solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-roboto font-bold text-lg mb-2">Expert Team</h3>
              <p className="text-gray-600">Certified professionals dedicated to your safety</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-roboto font-bold text-lg mb-2">Diverse Clientele</h3>
              <p className="text-gray-600">Serving commercial, industrial and residential properties</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-roboto font-bold text-lg mb-2">100% Compliance</h3>
              <p className="text-gray-600">All installations meet safety regulations and standards</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-roboto font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your fire safety requirements and how we can help protect your property and people.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-red-700 text-white font-roboto font-medium">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
