import { Link } from "wouter";
import { companyInfo, services } from "@/lib/data";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { formatPhoneNumber } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ✅ LOGO & ABOUT */}
          <div>
            <img
              src="/shreelogo-finalv23.jpg"
              alt="SmartCard Fire Safety Logo"
              className="mb-4 max-w-[200px]"
            />
            <p className="text-gray-400 mb-6 mt-2">
              Leading provider of comprehensive fire safety solutions for
              commercial, industrial, and residential properties.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61578604954135&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1877F2] text-white p-2 rounded-full hover:opacity-90 transition transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://x.com/shreefiresafety"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1DA1F2] text-white p-2 rounded-full hover:opacity-90 transition transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/shreeesnterprisebhavnagar/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0A66C2] text-white p-2 rounded-full hover:opacity-90 transition transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/shreeenterprisebhavnagar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#F56040] via-[#E1306C] to-[#833AB4] text-white p-2 rounded-full hover:opacity-90 transition transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* ✅ QUICK LINKS */}
          <div>
            <h3 className="font-roboto font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-400 hover:text-white transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ✅ OUR SERVICES */}
          <div>
            <h3 className="font-roboto font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`} // ✅ Correct route for Wouter
                    className="text-gray-400 hover:text-white transition"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ CONTACT INFO */}
          <div>
            <h3 className="font-roboto font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
              <MapPin className="text-primary shrink-0 mt-1 mr-3" />
              <span className="text-gray-400">
                <a 
                  href="https://www.google.com/maps/dir//behind+Esi+hospital,+Anand+Nagar,+Krishna+Nagar,+Bhavnagar,+Gujarat+364005/@21.7777605,72.0852788,22405m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x395f5bb9cb081fa3:0x2d82a3556bbbfa31!2m2!1d72.1676804!2d21.7777809!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
                  rel="noopener noreferrer" 
                  className="hover:text-primary"
                >
                  {companyInfo.address}
                </a>
              </span>
            </li>


              <li className="flex">
                <Phone className="text-primary shrink-0 mt-1 mr-3" />
                <span className="text-gray-400">
                  <a
                    href={`tel:+91${companyInfo.phone1}`}
                    className="hover:text-primary"
                  >
                    +91 {formatPhoneNumber(companyInfo.phone1)}
                  </a>
                </span>
              </li>
              <li className="flex">
                <Mail className="text-primary shrink-0 mt-1 mr-3" />
                <span className="text-gray-400">
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="hover:text-primary"
                  >
                    {companyInfo.email}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Shree Enterprise. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
