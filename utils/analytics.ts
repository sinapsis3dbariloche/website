// Utility functions for Google Analytics 4 (GA4) event and conversion tracking

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
    trackConversion?: (eventName: string, category?: string, label?: string) => void;
    trackWhatsAppClick?: (location: string, details?: string) => void;
  }
}

/**
 * Tracks a WhatsApp contact/quote click in Google Analytics 4.
 * Emits both:
 *  - 'click_whatsapp': Custom event specifically for WhatsApp button tracking
 *  - 'generate_lead': Standard recommended GA4 conversion event for lead inquiries
 *
 * @param location Identifies the UI component (e.g., 'flotante', 'navbar_desktop', 'portfolio_card', 'contacto')
 * @param details Additional descriptive details (e.g. product title or page context)
 */
export const trackWhatsAppClick = (location: string, details?: string) => {
  const eventLabel = details ? `${location} - ${details}` : location;

  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      // 1. Specific custom event: click_whatsapp
      window.gtag('event', 'click_whatsapp', {
        event_category: 'contacto',
        event_label: eventLabel,
        button_location: location,
        contact_method: 'whatsapp',
        transport_type: 'beacon'
      });

      // 2. Official Google Analytics 4 recommended lead conversion: generate_lead
      window.gtag('event', 'generate_lead', {
        event_category: 'conversion',
        event_label: eventLabel,
        button_location: location,
        method: 'whatsapp',
        value: 1,
        currency: 'ARS',
        transport_type: 'beacon'
      });
    } else if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
      // Fallback if dataLayer exists but gtag helper isn't directly exposed
      window.dataLayer.push({
        event: 'click_whatsapp',
        event_category: 'contacto',
        event_label: eventLabel,
        button_location: location,
        contact_method: 'whatsapp'
      });
      window.dataLayer.push({
        event: 'generate_lead',
        event_category: 'conversion',
        event_label: eventLabel,
        button_location: location,
        method: 'whatsapp'
      });
    }

    // Call legacy trackConversion if present for backwards compatibility
    if (typeof window !== 'undefined' && typeof window.trackConversion === 'function') {
      window.trackConversion('click_whatsapp', 'contacto', eventLabel);
    }
  } catch (error) {
    console.warn('Analytics event dispatch failed:', error);
  }
};

/**
 * Generic conversion tracker
 */
export const trackConversion = (eventName: string, category: string = 'conversion', label?: string) => {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, {
        event_category: category,
        event_label: label || eventName,
        transport_type: 'beacon'
      });
    }
  } catch (error) {
    console.warn('Conversion track failed:', error);
  }
};
