import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/data";
import { Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-12 md:py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className="text-2xl md:text-3xl font-roboto font-bold text-white mb-2">
              Ready to enhance your fire safety?
            </h2>
            <p className="text-white/80">
              Get in touch with our experts for a consultation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`tel:+91${companyInfo.phone1}`} 
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-primary font-roboto font-medium px-6 py-3 rounded-md text-center transition"
            >
              <Phone className="mr-2 h-4 w-4" /> Call Now
            </a>
            <Link href="/contact">
              <Button 
                variant="outline" 
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-roboto font-medium w-full"
              >
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
