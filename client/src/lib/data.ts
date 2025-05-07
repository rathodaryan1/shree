export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  icon: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
}

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export const services: Service[] = [
  {
    id: "fire-hydrant",
    title: "Fire Hydrant System",
    shortDescription: "Complete installation, maintenance, and repair of fire hydrant systems for commercial and industrial properties.",
    description: "Our fire hydrant systems are designed to provide a reliable water supply for firefighting operations. We offer end-to-end solutions including system design, installation, testing, and maintenance of fire hydrant systems that comply with all safety regulations. Our systems include hydrant valves, hose reels, landing valves, and complete piping networks.",
    imageUrl: "https://pixabay.com/get/gd051f079f4657ea6168ccfb2ea6cbd6f7589a26f3693819a177009491321505bbd932897858f55f8452c30c67044631ae9c089be5675ce3f88572bd270a746ad_1280.jpg",
    icon: "fire-extinguisher"
  },
  {
    id: "fire-alarm",
    title: "Fire Alarm & Detection System",
    shortDescription: "Advanced fire detection systems with smoke, heat, and gas detectors for early warning and response.",
    description: "Our fire alarm and detection systems are designed to provide early warning in case of fire emergencies. We offer installation and maintenance of advanced detection systems including smoke detectors, heat detectors, gas detectors, and integrated control panels. Our systems comply with the latest safety standards and can be customized to meet specific building requirements.",
    imageUrl: "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    icon: "bell"
  },
  {
    id: "fire-extinguisher",
    title: "Fire Extinguisher Supply & Service",
    shortDescription: "Supply, installation, and regular maintenance of various types of fire extinguishers for different fire classes.",
    description: "We provide a wide range of fire extinguishers suitable for different classes of fires. Our services include supply, installation, regular maintenance, and refilling of fire extinguishers. We offer CO2, dry chemical powder, foam, and water-based extinguishers, and help you determine the right mix for your facility based on risk assessment.",
    imageUrl: "https://pixabay.com/get/gf6d19885cd9dd722417f53e26bc5365ce29459ae619f894f92b2ec3f0079fde8296c9412bb60e382861a9fcf2bed305ecd1c4ccae2d247a35105e21f22b5ad6d_1280.jpg",
    icon: "cylinder"
  },
  {
    id: "fire-sprinkler",
    title: "Fire Sprinkler System",
    shortDescription: "Design and installation of automatic fire sprinkler systems for commercial and residential buildings.",
    description: "Our fire sprinkler systems provide automatic fire suppression to control or extinguish fires before they spread. We offer complete design, installation, and maintenance of various sprinkler systems including wet pipe, dry pipe, pre-action, and deluge systems. All our installations comply with local fire safety codes and international standards.",
    imageUrl: "https://pixabay.com/get/g63668de87f95d96474d77219ec8b286759cfcbff29bee98d5b5b16ef5c99650c5fad2f7d400cba2b3eff538cbe31b2310d51f864ed8078c65843fc19e9e4678e_1280.jpg",
    icon: "droplets"
  },
  {
    id: "designing",
    title: "Designing & Commissioning",
    shortDescription: "Professional design, planning, and commissioning of fire safety systems according to regulations.",
    description: "Our team of experienced engineers provides comprehensive design and commissioning services for all types of fire safety systems. We conduct thorough site assessments, develop detailed designs, oversee installation, and perform system commissioning to ensure all components work together effectively. Our designs comply with local building codes and fire safety regulations.",
    imageUrl: "https://pixabay.com/get/gf47268ac353c691a13d68bf3364bfdb6db15f8ae26097f950b3b3b25dd1451e3e481987b250230b041e3a7771935110070dc991cf46992d9e3b782ec66a8d39b_1280.jpg",
    icon: "pencil-ruler"
  },
  {
    id: "amc",
    title: "Annual Maintenance Contract",
    shortDescription: "Comprehensive maintenance packages to ensure your fire safety systems remain in optimal condition.",
    description: "Our annual maintenance contracts provide regular inspection, testing, and maintenance of all fire safety systems to ensure they remain in optimal working condition. Our comprehensive AMC packages include scheduled preventive maintenance, emergency repairs, system testing, and detailed documentation to help you meet compliance requirements. We offer customized maintenance plans based on your specific needs and budget.",
    imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    icon: "clipboard-check"
  }
];

export const features: Feature[] = [
  {
    title: "Certified Experts",
    description: "Our team consists of certified professionals with years of experience in fire safety systems.",
    icon: "award"
  },
  {
    title: "24/7 Support",
    description: "We provide round-the-clock emergency service and support for all our clients.",
    icon: "clock"
  },
  {
    title: "Quality Assurance",
    description: "We use only high-quality products and follow strict quality control for all installations.",
    icon: "shield"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Patel",
    position: "Office Manager",
    company: "Tech Solutions",
    content: "Shree Enterprise installed our entire office fire safety system. Their team was professional, knowledgeable, and completed the work on schedule. Highly recommended!",
    rating: 5
  },
  {
    id: 2,
    name: "Anita Sharma",
    position: "Facility Manager",
    company: "Grand Hotel",
    content: "We've been using Shree Enterprise for our annual maintenance contract for the past 3 years. Their service is prompt, thorough, and they always ensure our systems are up to code.",
    rating: 5
  },
  {
    id: 3,
    name: "Vijay Mehta",
    position: "Owner",
    company: "Mehta Manufacturing",
    content: "After a small fire incident, we realized the importance of proper fire safety. Shree Enterprise designed and installed a comprehensive system for our factory. Their expertise and attention to detail were impressive.",
    rating: 4.5
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Commercial Building Hydrant System",
    description: "Complete installation for a 10-floor office building",
    imageUrl: "https://pixabay.com/get/gd5432de287ac55727a82ad7e215c54e615ad0798970a9144b1c36eae3134e0cef96bb48a91a7032496db8e7d9065f9165954fa3ecb5fcb259562b2b0469561a9_1280.jpg"
  },
  {
    id: 2,
    title: "Advanced Alarm System",
    description: "Smart fire detection for a tech company",
    imageUrl: "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 3,
    title: "Hotel Sprinkler System",
    description: "Comprehensive coverage for guest safety",
    imageUrl: "https://pixabay.com/get/gc1294cef15ef978590f4f9983e650135335a58074cf86d4467dc3e540367a2766a9110464e063bccfe2d3af067232d51a5c7ee119e4dbc5447b0d864074c6436_1280.jpg"
  },
  {
    id: 4,
    title: "Multi-Class Extinguisher Setup",
    description: "Factory-wide fire protection deployment",
    imageUrl: "https://pixabay.com/get/g9b2d02125dc2d86b77c348f936fcd6a78dd5798f3bfb590835fb8be1f6a2ead8fff891d8aa3c8cf5c8bee3b636b7f93523491601a7f881a0773b73cd116712a4_1280.jpg"
  },
  {
    id: 5,
    title: "Regular Maintenance",
    description: "Annual servicing for corporate client",
    imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 6,
    title: "Custom System Design",
    description: "Specialized planning for heritage building",
    imageUrl: "https://pixabay.com/get/gc088044d4a543ab7bb77cee6b1ed52575947221d1082831198bfe944210464a352990e54e629a646d90145e2c7c6361e97ca49e450e83c1594adc697f3014696_1280.jpg"
  }
];

export const companyInfo = {
  name: "Shree Enterprise",
  tagline: "Fire Safety Solutions",
  address: "Plot No. 32c/1, B/h Hospital, Anantapur, Bhavnagar - 364005",
  phone1: "7337196916",
  phone2: "9327993934",
  email: "chauhan.prakash123@gmail.com",
  businessHours: {
    weekdays: "9:00 AM - 6:00 PM",
    saturday: "9:00 AM - 4:00 PM",
    sunday: "Closed"
  },
  about: "Shree Enterprise is a leading provider of comprehensive fire safety solutions in Anantapur, Bhavnagar, and surrounding areas. With years of experience in the industry, we have established ourselves as trusted experts in fire protection systems. Our team of certified professionals is dedicated to ensuring the safety of your property and people through high-quality installation, regular maintenance, and prompt service. We adhere to all local and national fire safety regulations to provide you with compliant and effective protection systems."
};
