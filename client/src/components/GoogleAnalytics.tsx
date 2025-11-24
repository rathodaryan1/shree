import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface GoogleAnalyticsProps {
  measurementId: string;
}

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const [location] = useLocation();

  useEffect(() => {
    // Skip if no measurement ID is provided or we're in development
    if (!measurementId || process.env.NODE_ENV === 'development') {
      return;
    }

    // Load the Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(...args) {
      window.dataLayer.push(args);
    };

    window.gtag('js', new Date() as any);
    window.gtag('config', measurementId, {
      page_path: location,
    });

    // Cleanup function to remove the scripts when component unmounts
    return () => {
      document.head.removeChild(script1);
    };
  }, [measurementId, location]);

  // Track page changes
  useEffect(() => {
    if (window.gtag && measurementId && process.env.NODE_ENV !== 'development') {
      window.gtag('config', measurementId, {
        page_path: location,
      });
    }
  }, [location, measurementId]);

  return null; // This component doesn't render anything
}