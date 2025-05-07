import { useState, useEffect } from 'react';
import { MessageCircle, PhoneCall, X } from 'lucide-react';
import { companyInfo } from '@/lib/data';

export default function FloatingCTA() {
  const [showButton, setShowButton] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const whatsappNumber = companyInfo.phone1;
  
  // Show button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
        setExpanded(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Construct WhatsApp URL with message
  const getWhatsAppUrl = () => {
    const message = encodeURIComponent('Hello! I would like to inquire about your fire safety services.');
    return `https://wa.me/91${whatsappNumber}?text=${message}`;
  };
  
  return (
    <>
      {showButton && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
          {/* Expanded buttons */}
          {expanded && (
            <div className="flex flex-col items-end space-y-3 animate-fadeIn">
              {/* Call button */}
              <a 
                href={`tel:+91${companyInfo.phone1}`}
                className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all"
                title="Call Us"
              >
                <PhoneCall size={20} />
              </a>
              
              {/* WhatsApp button */}
              <a 
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all"
                title="Chat on WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          )}
          
          {/* Main toggle button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all ${
              expanded ? 'bg-gray-700' : 'bg-primary'
            } text-white`}
            aria-label={expanded ? "Close contact options" : "Open contact options"}
          >
            {expanded ? <X size={24} /> : <MessageCircle size={24} />}
          </button>
        </div>
      )}
    </>
  );
}