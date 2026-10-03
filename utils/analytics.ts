// Utility functions for Google Analytics 4 (GA4) event and conversion tracking

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
    trackConversion?: (eventName: string, category?: string, label?: string) => void;
    trackWhatsAppClick?: (location: string, details?: string) => void;
    trackWhatsAppB2BClick?: (label?: string, details?: string) => void;
    trackWhatsAppEventosClick?: (label?: string, details?: string) => void;
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
 * Tracks B2B / Wholesale contact clicks in GA4.
 * Dispatches exact required event:
 * gtag('event', 'click_whatsapp_b2b', {
 *   'event_category': 'Mayorista',
 *   'event_label': 'Consulta_Comercios'
 * });
 */
export const trackWhatsAppB2BClick = (label: string = 'Consulta_Comercios', details?: string) => {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'click_whatsapp_b2b', {
        event_category: 'Mayorista',
        event_label: label,
        button_details: details || '',
        contact_method: 'whatsapp',
        transport_type: 'beacon'
      });
      window.gtag('event', 'generate_lead', {
        event_category: 'Mayorista',
        event_label: label,
        method: 'whatsapp_b2b',
        value: 1,
        currency: 'ARS',
        transport_type: 'beacon'
      });
    } else if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'click_whatsapp_b2b',
        event_category: 'Mayorista',
        event_label: label,
        button_details: details || '',
        contact_method: 'whatsapp'
      });
      window.dataLayer.push({
        event: 'generate_lead',
        event_category: 'Mayorista',
        event_label: label,
        method: 'whatsapp_b2b'
      });
    }
  } catch (error) {
    console.warn('Analytics B2B click error:', error);
  }
};

/**
 * Tracks Event quote / WhatsApp clicks in GA4.
 * Dispatches exact required event:
 * gtag('event', 'click_whatsapp_eventos', {
 *   'event_category': 'Eventos',
 *   'event_label': 'Presupuesto_Evento'
 * });
 */
export const trackWhatsAppEventosClick = (label: string = 'Presupuesto_Evento', details?: string) => {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'click_whatsapp_eventos', {
        event_category: 'Eventos',
        event_label: label,
        button_details: details || '',
        contact_method: 'whatsapp',
        transport_type: 'beacon'
      });
      window.gtag('event', 'generate_lead', {
        event_category: 'Eventos',
        event_label: label,
        method: 'whatsapp_eventos',
        value: 1,
        currency: 'ARS',
        transport_type: 'beacon'
      });
    } else if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'click_whatsapp_eventos',
        event_category: 'Eventos',
        event_label: label,
        button_details: details || '',
        contact_method: 'whatsapp'
      });
      window.dataLayer.push({
        event: 'generate_lead',
        event_category: 'Eventos',
        event_label: label,
        method: 'whatsapp_eventos'
      });
    }
  } catch (error) {
    console.warn('Analytics Eventos click error:', error);
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
