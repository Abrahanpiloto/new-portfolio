// Función para enviar página vista a GA4
export const sendPageView = (url) => {
  if (window.gtag) {
    window.gtag("config", "G-P50479CQB3", {
      page_path: url,
    });
  }
};

export const trackEvent = ({ action, category, label, value }) => {
  if (window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
