import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

// FAQ categories with questions and answers
const faqData = [
  {
    category: "General Questions",
    questions: [
      {
        question: "What fire safety equipment do I need for my business?",
        answer: "The required fire safety equipment depends on your building's size, type, and occupancy. Generally, businesses need fire extinguishers, fire alarms, emergency lighting, and exit signs at minimum. Larger facilities may require fire sprinkler systems, hydrant systems, and more advanced detection systems. We can conduct a comprehensive site assessment to determine your specific needs."
      },
      {
        question: "How often should fire safety equipment be inspected?",
        answer: "Most fire safety equipment should be professionally inspected at least annually. Fire extinguishers need monthly visual inspections and annual maintenance. Fire alarm systems require quarterly testing of certain components and annual comprehensive inspections. Sprinkler systems need quarterly inspections and annual full testing. Emergency lighting typically requires monthly function tests and annual duration tests."
      },
      {
        question: "Do you offer emergency services?",
        answer: "Yes, we provide 24/7 emergency response for our clients. If you experience an issue with your fire safety systems, our team is available to respond quickly to ensure your property remains protected."
      },
      {
        question: "What areas do you service?",
        answer: "We primarily serve Anantapur, Bhavnagar, and surrounding areas. For larger projects, we can accommodate clients across the region. Contact us to discuss your location and requirements."
      }
    ]
  },
  {
    category: "Fire Extinguishers",
    questions: [
      {
        question: "What type of fire extinguisher do I need?",
        answer: "The type of fire extinguisher needed depends on the potential fire classes in your environment. Class A extinguishers are for ordinary combustibles (wood, paper), Class B for flammable liquids, Class C for electrical fires, Class D for combustible metals, and Class K for kitchen fires. Many businesses use ABC multi-purpose extinguishers to cover most common hazards. We can assess your specific risks and recommend appropriate types."
      },
      {
        question: "How many fire extinguishers does my building need?",
        answer: "The number of fire extinguishers required depends on your building's size, layout, and fire hazard level. Generally, extinguishers should be located so that the travel distance to reach one is no more than 75 feet. Higher hazard areas may require closer spacing. We can perform a site assessment to determine the proper quantity and placement."
      },
      {
        question: "How often do fire extinguishers need to be replaced?",
        answer: "Fire extinguishers typically need to be replaced or undergo a major overhaul every 5-12 years, depending on the type. However, they require annual maintenance and should be hydrostatically tested every 5-12 years. If an extinguisher shows signs of damage, corrosion, or has been discharged, it may need immediate replacement regardless of age."
      }
    ]
  },
  {
    category: "Fire Alarm Systems",
    questions: [
      {
        question: "What components make up a fire alarm system?",
        answer: "A typical fire alarm system includes: control panel (the system's brain), detection devices (smoke detectors, heat detectors, manual pull stations), notification appliances (horns, strobes, speakers), power supplies (primary and backup), and monitoring connection (to alert emergency services). Advanced systems may also include addressable devices, voice evacuation capabilities, and integration with other building systems."
      },
      {
        question: "Can fire alarm systems be integrated with other building systems?",
        answer: "Yes, modern fire alarm systems can integrate with various building systems including access control, HVAC, elevator controls, and security systems. This integration allows for coordinated emergency response, such as automatically unlocking doors, shutting down equipment, or closing fire doors when an alarm is triggered."
      },
      {
        question: "What is the difference between conventional and addressable fire alarm systems?",
        answer: "Conventional systems divide the building into zones and can only identify which zone has detected a fire, not the specific device. Addressable systems give each device a unique address, allowing pinpoint identification of exactly which device has been activated. Addressable systems offer better diagnostics, more precise location information, and often reduce false alarms. They're typically more expensive initially but can save costs over time through easier maintenance and troubleshooting."
      }
    ]
  },
  {
    category: "Sprinkler Systems",
    questions: [
      {
        question: "How do fire sprinkler systems work?",
        answer: "Fire sprinkler systems work by detecting heat, not smoke. Each sprinkler head contains a glass bulb or fusible link that breaks at a predetermined temperature. When broken, water flows through that individual sprinkler head. Contrary to common belief, only the sprinklers directly affected by heat activate – not the entire system. This minimizes water damage while effectively controlling fires."
      },
      {
        question: "Will my sprinkler system activate accidentally and cause water damage?",
        answer: "Accidental activation of properly maintained sprinkler systems is extremely rare. The rate of accidental discharge due to manufacturing defects is estimated at 1 in 16 million sprinklers per year. Sprinklers activate individually only when exposed to sufficient heat (typically 135-165°F). They don't respond to smoke, cooking vapors, or steam. Regular maintenance helps ensure the system operates correctly only when needed."
      },
      {
        question: "What types of sprinkler systems are available?",
        answer: "The main types include: Wet pipe systems (most common, always water-filled), Dry pipe systems (for unheated areas, filled with pressurized air until needed), Pre-action systems (for sensitive areas like data centers, requiring dual detection before water flows), Deluge systems (for high-hazard areas, all sprinklers open simultaneously), and Special application systems (for unique hazards). The appropriate type depends on your building's specific needs and environmental conditions."
      }
    ]
  },
  {
    category: "Maintenance & Service",
    questions: [
      {
        question: "What does an Annual Maintenance Contract (AMC) include?",
        answer: "Our AMC typically includes: scheduled preventive maintenance visits, priority emergency service response, functional testing of all components, minor repairs and adjustments, detailed inspection reports for compliance documentation, and routine replacement of certain consumable components. The specific details vary based on the systems covered and your facility's requirements."
      },
      {
        question: "How much does fire safety equipment maintenance cost?",
        answer: "Maintenance costs vary based on the type and quantity of equipment, system complexity, building size, and specific requirements. Basic fire extinguisher maintenance may start around ₹200-500 per unit annually, while comprehensive maintenance of larger systems like fire alarms or sprinklers depends on the number of devices and system complexity. We provide customized quotes based on your specific needs."
      },
      {
        question: "What happens if my fire safety equipment fails an inspection?",
        answer: "If equipment fails inspection, we'll document the issues and provide recommendations for repairs or replacement. For critical safety systems, we'll explain the urgency level and help prioritize corrections. Depending on the severity, some issues may require immediate attention to maintain compliance and ensure safety, while others might be addressed during scheduled maintenance."
      }
    ]
  },
  {
    category: "Compliance & Regulations",
    questions: [
      {
        question: "What fire safety regulations apply to my business?",
        answer: "Businesses in India must comply with several regulations including the National Building Code of India (NBC), relevant Bureau of Indian Standards (BIS) codes, state fire service acts, and local municipal regulations. Specific requirements depend on your building's occupancy type, size, height, and use. We stay current with all applicable codes and help ensure your systems meet or exceed these requirements."
      },
      {
        question: "How often do I need fire safety training for employees?",
        answer: "Fire safety training should be conducted for all new employees and refresher training provided at least annually. In high-risk environments, quarterly drills may be recommended. Training should cover emergency procedures, evacuation routes, fire extinguisher operation, and system operation specific to your facility. We offer customized training programs to help you maintain compliance."
      },
      {
        question: "What documentation do I need to maintain for fire safety compliance?",
        answer: "Essential documentation includes inspection and testing records for all fire safety equipment (extinguishers, alarms, sprinklers, etc.), maintenance logs, fire drill records, employee training documentation, and any correspondence with fire authorities. Records should typically be maintained for at least 3 years, though some regulations may require longer retention. Our maintenance service includes proper documentation to help you stay compliant."
      }
    ]
  }
];

export default function Faq() {
  // Set the page title
  useEffect(() => {
    document.title = "Frequently Asked Questions - Shree Enterprise";
  }, []);

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-roboto font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about fire safety systems, maintenance, and compliance requirements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Jump links to categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {faqData.map((category, index) => (
              <a 
                key={index} 
                href={`#${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition"
              >
                {category.category}
              </a>
            ))}
          </div>

          {/* FAQ Categories */}
          {faqData.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              id={category.category.toLowerCase().replace(/\s+/g, '-')}
              className="mb-12 scroll-mt-24"
            >
              <h2 className="text-2xl font-roboto font-bold mb-6 pb-2 border-b border-gray-200">
                {category.category}
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
          
          {/* Still have questions section */}
          <div className="bg-light rounded-lg p-8 mt-12 text-center">
            <h2 className="text-2xl font-roboto font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our team is here to help with any questions about our fire safety services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-red-700 text-white font-medium">
                  Contact Us
                </Button>
              </Link>
              <a href={`tel:+917383740616`}>
                <Button variant="outline">
                  Call: 7383740616
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}