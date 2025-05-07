import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/data";
import { Check } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://pixabay.com/get/g139acf229493ba77c83b1afd628124b40d1f990a6aca2c2233851d5ff12b0d46a8b698fd1e1c1f4cbfdf25dd5d77b07772ef5aa00cf823bdc5910afb5ef4b00f_1280.jpg" 
              alt="Fire safety installation" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-roboto font-bold mb-6">About Shree Enterprise</h2>
            <p className="text-gray-600 mb-4">
              {companyInfo.about}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <Check className="text-primary mt-1 mr-3" />
                <div>
                  <h3 className="font-roboto font-bold text-lg mb-1">Expert Team</h3>
                  <p className="text-gray-600 text-sm">Certified fire safety professionals</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="text-primary mt-1 mr-3" />
                <div>
                  <h3 className="font-roboto font-bold text-lg mb-1">Quality Products</h3>
                  <p className="text-gray-600 text-sm">Industry-leading equipment</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="text-primary mt-1 mr-3" />
                <div>
                  <h3 className="font-roboto font-bold text-lg mb-1">Timely Service</h3>
                  <p className="text-gray-600 text-sm">Prompt response and execution</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="text-primary mt-1 mr-3" />
                <div>
                  <h3 className="font-roboto font-bold text-lg mb-1">Compliance</h3>
                  <p className="text-gray-600 text-sm">All systems meet safety standards</p>
                </div>
              </div>
            </div>
            
            <Link href="/contact">
              <Button className="bg-primary hover:bg-red-700 text-white font-roboto font-medium">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
