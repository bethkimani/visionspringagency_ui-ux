import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2Icon, AlertCircleIcon, Loader2Icon, SendIcon } from 'lucide-react';
import { FormField, inputClass } from './FormField';
import { BrandIcon } from '../ui/BrandIcon';
import { useEnquiryForm, type ContactMethod } from '../../hooks/useEnquiryForm';
import { serviceOptions } from '../../data/services';
import { site } from '../../data/site';
import { easeOut } from '../../utils/motion';

const BUDGETS = [
'Under KES 30,000',
'KES 30,000 – 80,000',
'KES 80,000 – 200,000',
'KES 200,000 – 500,000',
'Above KES 500,000',
'Not sure yet'];


const CONTACT_METHODS: ContactMethod[] = ['WhatsApp', 'Phone call', 'Email'];

export function EnquiryForm() {
  const { values, errors, status, serverMessage, update, submit, reset, whatsappHref } = useEnquiryForm();
  const describedBy = (field: string) => errors[field as keyof typeof errors] ? `enquiry-${field}-error` : undefined;

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ?
      <motion.div
        key="success"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: easeOut }}
        className="flex min-h-[520px] flex-col items-center justify-center text-center"
        role="status">
        
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-mint/15 text-mint-deep">
            <CheckCircle2Icon className="h-8 w-8" />
          </span>
          <h3 className="mt-6 font-display text-2xl font-extrabold text-ink">Thank you — your enquiry has been sent.</h3>
          <p className="mt-3 max-w-md text-muted">
            We’ll get back to you through your preferred contact method. For anything urgent, chat with us on WhatsApp.
          </p>
          <button
          type="button"
          onClick={reset}
          className="mt-8 rounded-full border border-navy/15 px-6 py-3 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-mist">
          
            Send another enquiry
          </button>
        </motion.div> :

      <motion.form key="form" noValidate onSubmit={submit} initial={false} exit={{ opacity: 0 }} className="grid gap-5 sm:grid-cols-2">
          <FormField id="enquiry-fullName" label="Full name" required error={errors.fullName}>
            <input
            id="enquiry-fullName"
            autoComplete="name"
            value={values.fullName}
            onChange={(e) => update('fullName', e.target.value)}
            aria-invalid={!!errors.fullName}
            aria-describedby={describedBy('fullName')}
            className={inputClass(!!errors.fullName)}
            placeholder="Jane Wanjiru" />
          
          </FormField>
          <FormField id="enquiry-organization" label="Business or organisation">
            <input
            id="enquiry-organization"
            autoComplete="organization"
            value={values.organization}
            onChange={(e) => update('organization', e.target.value)}
            className={inputClass(false)}
            placeholder="Company, school or brand" />
          
          </FormField>
          <FormField id="enquiry-email" label="Email address" required error={errors.email}>
            <input
            id="enquiry-email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={describedBy('email')}
            className={inputClass(!!errors.email)}
            placeholder="you@business.com" />
          
          </FormField>
          <FormField id="enquiry-phone" label="Phone number" required error={errors.phone}>
            <input
            id="enquiry-phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={describedBy('phone')}
            className={inputClass(!!errors.phone)}
            placeholder="0712 345 678" />
          
          </FormField>
          <FormField id="enquiry-service" label="Service required" required error={errors.service}>
            <select
            id="enquiry-service"
            value={values.service}
            onChange={(e) => update('service', e.target.value)}
            aria-invalid={!!errors.service}
            aria-describedby={describedBy('service')}
            className={`${inputClass(!!errors.service)} ${values.service ? '' : 'text-muted'}`}>
            
              <option value="">Choose a service</option>
              {serviceOptions.map((s) =>
            <option key={s} value={s}>
                  {s}
                </option>
            )}
            </select>
          </FormField>
          <FormField id="enquiry-budget" label="Estimated budget">
            <select
            id="enquiry-budget"
            value={values.budget}
            onChange={(e) => update('budget', e.target.value)}
            className={`${inputClass(false)} ${values.budget ? '' : 'text-muted'}`}>
            
              <option value="">Select a range</option>
              {BUDGETS.map((b) =>
            <option key={b} value={b}>
                  {b}
                </option>
            )}
            </select>
          </FormField>

          <fieldset className="sm:col-span-2">
            <legend className="mb-2 text-sm font-semibold text-ink">Preferred contact method</legend>
            <div className="flex flex-wrap gap-2">
              {CONTACT_METHODS.map((m) => {
              const checked = values.contactMethod === m;
              return (
                <label
                  key={m}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-150 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ocean ${
                  checked ? 'border-navy bg-navy text-white' : 'border-line bg-white text-ink hover:border-navy/40'}`
                  }>
                  
                    <input
                    type="radio"
                    name="contactMethod"
                    value={m}
                    checked={checked}
                    onChange={() => update('contactMethod', m)}
                    className="sr-only" />
                  
                    {m}
                  </label>);

            })}
            </div>
          </fieldset>

          <FormField id="enquiry-description" label="Project description" required error={errors.description} className="sm:col-span-2">
            <textarea
            id="enquiry-description"
            rows={5}
            value={values.description}
            onChange={(e) => update('description', e.target.value)}
            aria-invalid={!!errors.description}
            aria-describedby={describedBy('description')}
            className={`${inputClass(!!errors.description)} resize-y`}
            placeholder="Tell us about your business, what you need, and any timelines." />
          
          </FormField>

          {status === 'error' &&
        <div role="alert" className="flex gap-3 rounded-2xl border border-danger/30 bg-danger/5 p-4 text-sm sm:col-span-2">
              <AlertCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-danger" />
              <div className="text-ink">
                <p className="font-semibold">Your enquiry wasn’t sent.</p>
                <p className="mt-1 text-muted">{serverMessage}</p>
                <p className="mt-2 text-muted">
                  You can reach us directly on{' '}
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-mint-deep underline">
                    WhatsApp
                  </a>{' '}
                  or at{' '}
                  <a href={`mailto:${site.email}`} className="font-semibold text-ocean underline">
                    {site.email}
                  </a>
                  .
                </p>
              </div>
            </div>
        }

          <div className="flex flex-col gap-3 pt-2 sm:col-span-2 sm:flex-row">
            <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-navy px-6 py-4 text-sm font-semibold text-white transition-colors duration-150 hover:bg-ocean disabled:cursor-wait disabled:opacity-80">
            
              {status === 'submitting' ?
            <>
                  <Loader2Icon className="h-4 w-4 animate-spin" />
                  Sending…
                </> :

            <>
                  <SendIcon className="h-4 w-4" />
                  Send Project Enquiry
                </>
            }
            </button>
            <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-mint px-6 py-4 text-sm font-semibold text-navy transition-colors duration-150 hover:bg-[#00AE7A]">
            
              <BrandIcon name="whatsapp" className="h-4 w-4" />
              Chat With Us on WhatsApp
            </a>
          </div>
          <p className="text-xs text-muted sm:col-span-2">
            Your details are only used to respond to your enquiry. WhatsApp opens with your form details pre-filled.
          </p>
        </motion.form>
      }
    </AnimatePresence>);

}