import React from 'react';

type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
};

export const inputClass = (hasError: boolean) =>
`w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 outline-none transition-[border-color,box-shadow] duration-150 focus:ring-4 ${
hasError ? 'border-danger focus:border-danger focus:ring-danger/15' : 'border-line focus:border-ocean focus:ring-ocean/15'}`;


export function FormField({ id, label, required, error, className, children }: FormFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-danger"> *</span>}
      </label>
      {children}
      {error &&
      <p id={`${id}-error`} className="mt-1.5 text-sm text-danger" role="alert">
          {error}
        </p>
      }
    </div>);

}