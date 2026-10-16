import { FormEvent, useEffect, useState } from 'react';
import { site } from '../data/site';
import { whatsappLink } from '../utils/whatsapp';
import { SELECT_SERVICE_EVENT } from '../utils/enquiry';

export type ContactMethod = 'Email' | 'Phone call' | 'WhatsApp';

export interface EnquiryValues {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  contactMethod: ContactMethod;
  description: string;
}

export type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>;
export type EnquiryStatus = 'idle' | 'submitting' | 'success' | 'error';

const ENDPOINT = `https://formsubmit.co/ajax/${site.email}`;

const initialValues: EnquiryValues = {
  fullName: '',
  organization: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  contactMethod: 'WhatsApp',
  description: ''
};

function validate(v: EnquiryValues): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (v.fullName.trim().length < 2) errors.fullName = 'Please enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!/^\+?[\d\s-]{9,16}$/.test(v.phone.trim())) errors.phone = 'Please enter a valid phone number, e.g. 0712 345 678.';
  if (!v.service) errors.service = 'Please choose the service you need.';
  if (v.description.trim().length < 20) errors.description = 'Tell us a little more (at least 20 characters).';
  return errors;
}

function buildWhatsappMessage(v: EnquiryValues): string {
  const lines = [
  'Hello VisionSpring Agency, I would like to discuss a project.',
  v.fullName && `Name: ${v.fullName}`,
  v.organization && `Business: ${v.organization}`,
  v.service && `Service: ${v.service}`,
  v.budget && `Budget: ${v.budget}`,
  v.description && `Details: ${v.description}`];

  return lines.filter(Boolean).join('\n');
}

export function useEnquiryForm() {
  const [values, setValues] = useState<EnquiryValues>(initialValues);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<EnquiryStatus>('idle');
  const [serverMessage, setServerMessage] = useState('');

  useEffect(() => {
    const onSelect = (e: Event) => {
      const service = (e as CustomEvent<string>).detail;
      setValues((prev) => ({ ...prev, service }));
      setErrors((prev) => ({ ...prev, service: undefined }));
      setStatus((prev) => prev === 'success' ? 'idle' : prev);
    };
    window.addEventListener(SELECT_SERVICE_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_SERVICE_EVENT, onSelect);
  }, []);

  const update = <K extends keyof EnquiryValues,>(field: K, value: EnquiryValues[K]) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => prev[field] ? { ...prev, [field]: undefined } : prev);
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(`enquiry-${firstInvalid}`)?.focus();
      return;
    }

    setStatus('submitting');
    setServerMessage('');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New project enquiry — ${values.service}`,
          _template: 'table',
          _captcha: 'false',
          'Full name': values.fullName,
          'Business / organisation': values.organization || '—',
          Email: values.email,
          Phone: values.phone,
          'Service required': values.service,
          'Estimated budget': values.budget || 'Not specified',
          'Preferred contact method': values.contactMethod,
          'Project description': values.description
        })
      });
      const data = (await res.json()) as {success?: string | boolean;message?: string;};
      if (res.ok && (data.success === true || data.success === 'true')) {
        setStatus('success');
        setValues(initialValues);
      } else {
        setStatus('error');
        setServerMessage(data.message ?? 'Your enquiry could not be sent right now.');
      }
    } catch {
      setStatus('error');
      setServerMessage('We couldn’t reach the server. Please check your connection and try again.');
    }
  };

  const reset = () => {
    setStatus('idle');
    setServerMessage('');
  };

  return {
    values,
    errors,
    status,
    serverMessage,
    update,
    submit,
    reset,
    whatsappHref: whatsappLink(buildWhatsappMessage(values))
  };
}