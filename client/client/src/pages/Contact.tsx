import ContactSection from "@/components/home/ContactSection";
import { useEffect } from "react";

export default function Contact() {
  // Set the page title
  useEffect(() => {
    document.title = "Contact Us - Shree Enterprise";
  }, []);

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-roboto font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have questions or need a quote? Our team is here to help with all your fire safety needs.
          </p>
        </div>
      </div>
      
      <ContactSection />
    </div>
  );
}
