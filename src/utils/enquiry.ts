export const SELECT_SERVICE_EVENT = 'vs:select-service';

/** Pre-selects a service in the enquiry form and scrolls to it. */
export function requestService(serviceName: string): void {
  window.dispatchEvent(new CustomEvent<string>(SELECT_SERVICE_EVENT, { detail: serviceName }));
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}