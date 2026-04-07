type GtagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export const trackEvent = ({ action, category, label, value }: GtagEvent) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};

export const trackPixel = (
  event: string,
  params?: Record<string, unknown>,
  type: "track" | "trackCustom" = "track",
) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq(type, event, params);
  }
};

export const trackLead = (params?: Record<string, unknown>) => {
  trackEvent({ action: "generate_lead", category: "form", label: "contact_form" });
  trackPixel("Lead", params);
};
