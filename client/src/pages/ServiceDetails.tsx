import { useParams, Link, useLocation } from "wouter";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Phone, FileText, Calendar, CheckCircle, Shield } from "lucide-react";
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Get service-specific FAQ content
const getServiceFaqs = (serviceId: string) => {
  const commonFaqs = [
    {
      question: "How often should this system be maintained?",
      answer: "We recommend professional inspection and maintenance at least once annually. For high-usage areas or critical installations, bi-annual checks may be advisable."
    },
    {
      question: "Do you provide emergency services?",
      answer: "Yes, we offer 24/7 emergency service for all our clients. Our team is ready to respond quickly to ensure your safety systems are operational."
    }
  ];

  const serviceFaqs: Record<string, Array<{question: string, answer: string}>> = {
    "fire-hydrant": [
      {
        question: "What type of buildings require fire hydrant systems?",
        answer: "Fire hydrant systems are typically required in commercial, industrial, and multi-story residential buildings as specified by local fire safety regulations. The specific requirements vary based on building size, occupancy, and usage."
      },
      {
        question: "What are the components of a fire hydrant system?",
        answer: "A typical fire hydrant system includes pumps, water tanks, piping network, valves, hydrant points, and hose reels. The system is designed to provide a reliable water supply for firefighting operations."
      }
    ],
    "fire-alarm": [
      {
        question: "What types of fire detection systems do you install?",
        answer: "We install various detection systems including smoke detectors, heat detectors, flame detectors, and multi-sensor detectors. We also install addressable systems that can pinpoint the exact location of a fire."
      },
      {
        question: "Can your systems be integrated with existing security systems?",
        answer: "Yes, our fire alarm systems can be integrated with your existing security and building management systems for comprehensive protection and central monitoring."
      }
    ],
    "fire-extinguisher": [
      {
        question: "What types of fire extinguishers do you supply?",
        answer: "We supply all major types including ABC powder, CO2, foam, water, and specialized extinguishers for different classes of fires (A, B, C, D, and K)."
      },
      {
        question: "How often do fire extinguishers need to be serviced?",
        answer: "Fire extinguishers should be visually inspected monthly and undergo professional maintenance annually. They typically need to be refilled or replaced every 5-6 years depending on the type."
      }
    ],
    "fire-sprinkler": [
      {
        question: "What types of sprinkler systems do you install?",
        answer: "We install wet pipe, dry pipe, pre-action, and deluge sprinkler systems, each designed for specific environments and fire protection requirements."
      },
      {
        question: "Will sprinklers damage my property when activated?",
        answer: "Modern sprinkler systems are designed to activate only in the immediate area of a fire, minimizing water damage. The water damage from sprinklers is significantly less than what would result from firefighting hoses."
      }
    ],
    "designing": [
      {
        question: "What is the design process for fire safety systems?",
        answer: "Our design process includes site assessment, risk analysis, conceptual design, detailed engineering, compliance verification, and project documentation, all tailored to your specific requirements."
      },
      {
        question: "Do your designs comply with local regulations?",
        answer: "Yes, all our designs comply with local fire safety codes, building regulations, and national standards. We stay updated with the latest requirements to ensure full compliance."
      }
    ],
    "amc": [
      {
        question: "What does your Annual Maintenance Contract include?",
        answer: "Our AMC includes scheduled inspections, preventive maintenance, functional testing, minor repairs, emergency call-outs, and detailed documentation for compliance purposes."
      },
      {
        question: "How does an AMC benefit my business?",
        answer: "An AMC ensures your fire safety systems remain reliable, extends equipment life, reduces unexpected repair costs, ensures compliance with regulations, and provides peace of mind through regular professional attention."
      }
    ]
  };

  return [...(serviceFaqs[serviceId] || []), ...commonFaqs];
};

// Get compliance information based on service type
const getComplianceInfo = (serviceId: string) => {
  const commonCompliance = "All our installations comply with National Building Code (NBC) requirements and relevant Bureau of Indian Standards (BIS) specifications.";
  
  const serviceCompliance: Record<string, string> = {
    "fire-hydrant": "Our fire hydrant systems comply with IS 13039, IS 5290, and other applicable standards for hydrant systems. We ensure proper pressure ratings, flow capacity, and strategic placement according to regulatory requirements.",
    "fire-alarm": "Our fire alarm systems comply with IS 2189 for installation and maintenance, NFPA 72 guidelines, and local fire department regulations for alarm monitoring and reporting.",
    "fire-extinguisher": "We adhere to IS 15683 for portable fire extinguishers, ensuring proper selection, placement, and maintenance according to BIS specifications and occupancy requirements.",
    "fire-sprinkler": "Our sprinkler systems comply with IS 15105, NFPA 13 standards, and FM Global requirements where applicable, ensuring proper coverage, water supply requirements, and system reliability.",
    "designing": "Our design services follow IS 7896 for consultancy, NFPA design standards, and incorporate internationally recognized best practices while meeting all local regulatory requirements.",
    "amc": "Our maintenance contracts fulfill the requirements of IS 2190 for maintenance of fire extinguishers and relevant standards for other fire protection systems, ensuring proper documentation and testing procedures."
  };
  
  return serviceCompliance[serviceId] ? `${serviceCompliance[serviceId]} ${commonCompliance}` : commonCompliance;
};

export default function ServiceDetails() {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const service = services.find(s => s.id === id);
  
  useEffect(() => {
    if (service) {
      document.title = `${service.title} - Shree Enterprise`;
    } else {
      setLocation("/");
    }
  }, [service, setLocation]);
  
  if (!service) {
    return null;
  }
  
  const faqs = getServiceFaqs(service.id);
  const complianceInfo = getComplianceInfo(service.id);
  
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <Link href="/#services" className="inline-flex items-center text-primary hover:text-red-700 mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Services
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src={service.imageUrl} 
              alt={service.title} 
              className="rounded-lg shadow-md w-full h-auto"
            />
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Link href="/quote">
                <Button className="bg-primary hover:bg-red-700 text-white font-medium w-full flex items-center justify-center">
                  <FileText className="mr-2 h-4 w-4" /> Get a Quote
                </Button>
              </Link>
              <a href={`tel:+917383740616`} className="block">
                <Button variant="outline" className="w-full flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" className="w-full flex items-center justify-center">
                  <Calendar className="mr-2 h-4 w-4" /> Book Site Visit
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" className="w-full flex items-center justify-center">
                  <Calendar className="mr-2 h-4 w-4" /> Request AMC
                </Button>
              </Link>
            </div>
          </div>
          
          <div>
            <h1 className="text-3xl md:text-4xl font-roboto font-bold mb-4">{service.title}</h1>
            <div className="h-1 w-20 bg-primary mb-6"></div>
            <p className="text-gray-600 mb-8">{service.description}</p>
            
            <div className="bg-light p-6 rounded-lg mb-8">
              <h2 className="font-roboto font-bold text-xl mb-4">Key Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Professional installation by certified experts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Compliance with all safety regulations and standards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>High-quality equipment and components</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Regular maintenance and service available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Emergency support and quick response time</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-8">
              <div className="flex items-start">
                <Shield className="text-amber-600 mr-3 h-6 w-6 mt-0.5 flex-shrink-0" />
                <div>
                  <h2 className="font-roboto font-bold text-xl mb-2 text-amber-800">Certifications & Compliance</h2>
                  <p className="text-amber-700 text-sm">{complianceInfo}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-roboto font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Call to Action */}
        <div className="bg-gray-50 rounded-lg p-8 text-center max-w-5xl mx-auto">
          <h2 className="text-2xl font-roboto font-bold mb-4">Ready to enhance your fire safety?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team is ready to provide you with a customized solution for your fire safety needs. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/quote">
              <Button className="bg-primary hover:bg-red-700 text-white font-medium px-8 py-2.5">
                Request a Free Quote
              </Button>
            </Link>
            <a href={`tel:+917383740616`}>
              <Button variant="outline" className="px-8 py-2.5">
                Call Us: 7383740616
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
