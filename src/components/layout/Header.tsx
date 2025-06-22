import { useState } from "react";
import { Link, useRoute, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { services } from "@/lib/data";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { scrollToSection } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();
  const [isHome] = useRoute("/");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (path: string) => {
    setMobileMenuOpen(false);
    if (isHome && path.startsWith("#")) {
      scrollToSection(path.substring(1));
    } else {
      setLocation(path);
    }
  };

  const handleServiceClick = (id: string) => {
    setMobileMenuOpen(false);
    if (isHome) {
      scrollToSection(id);
    } else {
      setLocation(`/#${id}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 shadow-md bg-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" onClick={() => setMobileMenuOpen(false)}>
          <Logo className="h-14 w-auto" />
        </Link>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="font-roboto font-medium hover:text-primary transition"
            onClick={() => handleNavigation("/")}
          >
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center font-roboto font-medium hover:text-primary transition">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {services.map((service) => (
                <DropdownMenuItem key={service.id} asChild>
                  <Link
                    href={`/#${service.id}`}
                    onClick={() => handleServiceClick(service.id)}
                    className="w-full"
                  >
                    {service.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/about"
            className="font-roboto font-medium hover:text-primary transition"
            onClick={() => handleNavigation("/about")}
          >
            About Us
          </Link>
          <Link
            href="/gallery"
            className="font-roboto font-medium hover:text-primary transition"
            onClick={() => handleNavigation("/gallery")}
          >
            Gallery
          </Link>
          <Link
            href="/faq"
            className="font-roboto font-medium hover:text-primary transition"
            onClick={() => handleNavigation("/faq")}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="font-roboto font-medium hover:text-primary transition"
            onClick={() => handleNavigation("/contact")}
          >
            Contact
          </Link>
        </nav>

        <Link href="/quote" className="hidden md:block">
          <Button className="bg-primary hover:bg-red-700 text-white font-roboto font-medium px-6 shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
            Get a Quote
          </Button>
        </Link>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="px-4 py-3 bg-white border-t md:hidden">
          <Link
            href="/"
            className="block py-2 font-roboto font-medium hover:text-primary transition"
            onClick={() => handleNavigation("/")}
          >
            Home
          </Link>
          <div className="py-2">
            <div
              className="flex items-center justify-between w-full font-roboto font-medium hover:text-primary transition cursor-pointer"
              onClick={() => {
                const servicesMenu = document.getElementById("mobile-services-menu");
                if (servicesMenu) {
                  servicesMenu.classList.toggle("hidden");
                }
              }}
            >
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </div>
            <div id="mobile-services-menu" className="hidden pl-4 pt-2 pb-1">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/#${service.id}`}
                  className="block py-2 hover:text-primary transition"
                  onClick={() => handleServiceClick(service.id)}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/about"
            className="block py-2 font-roboto font-medium hover:text-primary transition"
            onClick={() => handleNavigation("/about")}
          >
            About Us
          </Link>
          <Link
            href="/gallery"
            className="block py-2 font-roboto font-medium hover:text-primary transition"
            onClick={() => handleNavigation("/gallery")}
          >
            Gallery
          </Link>
          <Link
            href="/faq"
            className="block py-2 font-roboto font-medium hover:text-primary transition"
            onClick={() => handleNavigation("/faq")}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="block py-2 font-roboto font-medium hover:text-primary transition"
            onClick={() => handleNavigation("/contact")}
          >
            Contact
          </Link>
          <Link
            href="/quote"
            className="block mt-3"
            onClick={() => handleNavigation("/quote")}
          >
            <Button className="w-full bg-primary hover:bg-red-700 text-white font-roboto font-medium py-5 shadow-md hover:shadow-lg">
              Get a Quote
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
}
