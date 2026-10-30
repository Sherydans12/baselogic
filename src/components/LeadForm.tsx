import React, { useMemo, useState } from 'react';
import { Send } from 'lucide-react';
import { budgetRanges, createMailtoHref, projectTypes } from '../data/contact';

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: projectTypes[0],
  budget: budgetRanges[0],
  message: '',
};

const buildLeadMessage = (form: FormState) => [
  'Hola BaseLogic, quiero cotizar o evaluar un proyecto tecnológico.',
  '',
  `Nombre: ${form.name}`,
  `Email: ${form.email}`,
  `Teléfono de contacto: ${form.phone}`,
  `Empresa o negocio: ${form.company || 'No indicado'}`,
  `Tipo de proyecto: ${form.projectType}`,
  `Presupuesto aproximado: ${form.budget}`,
  '',
  `Mensaje: ${form.message}`,
].join('\n');

export default function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState);

  const leadMessage = useMemo(() => buildLeadMessage(form), [form]);
  const mailtoHref = useMemo(
    () => createMailtoHref('Cotización de proyecto digital', leadMessage),
    [leadMessage],
  );

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = mailtoHref;
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-5">
        <div className="grid gap-4 md:grid-cols-2">
          <label htmlFor="lead-name" className="grid gap-2 text-sm font-bold text-slate-700">
            Nombre
            <input
              id="lead-name"
              name="name"
              autoComplete="name"
              required
              value={form.name}
              onChange={(event) => updateField('name', event.target.value)}
              className="rounded-xl border border-slate-200 px-4 py-3 font-medium text-slate-950 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            />
          </label>
          <label htmlFor="lead-email" className="grid gap-2 text-sm font-bold text-slate-700">
            Email
            <input
              id="lead-email"
              name="email"
              required
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(event) => updateField('email', event.target.value)}
              className="rounded-xl border border-slate-200 px-4 py-3 font-medium text-slate-950 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label htmlFor="lead-phone" className="grid gap-2 text-sm font-bold text-slate-700">
            Teléfono de contacto
            <input
              id="lead-phone"
              name="phone"
              required
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(event) => updateField('phone', event.target.value)}
              className="rounded-xl border border-slate-200 px-4 py-3 font-medium text-slate-950 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            />
          </label>
          <label htmlFor="lead-company" className="grid gap-2 text-sm font-bold text-slate-700">
            Empresa o negocio
            <input
              id="lead-company"
              name="company"
              autoComplete="organization"
              value={form.company}
              onChange={(event) => updateField('company', event.target.value)}
              className="rounded-xl border border-slate-200 px-4 py-3 font-medium text-slate-950 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label htmlFor="lead-project-type" className="grid gap-2 text-sm font-bold text-slate-700">
            Tipo de proyecto
            <select
              id="lead-project-type"
              name="projectType"
              value={form.projectType}
              onChange={(event) => updateField('projectType', event.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium text-slate-950 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            >
              {projectTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </label>
          <label htmlFor="lead-budget" className="grid gap-2 text-sm font-bold text-slate-700">
            Presupuesto aproximado
            <select
              id="lead-budget"
              name="budget"
              value={form.budget}
              onChange={(event) => updateField('budget', event.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium text-slate-950 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            >
              {budgetRanges.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </label>
        </div>

        <label htmlFor="lead-message" className="grid gap-2 text-sm font-bold text-slate-700">
          Mensaje
          <textarea
            id="lead-message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={(event) => updateField('message', event.target.value)}
            className="resize-none rounded-xl border border-slate-200 px-4 py-3 font-medium text-slate-950 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
          />
        </label>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-base font-bold text-white transition hover:bg-slate-950"
        >
          Enviar por correo
          <Send className="h-5 w-5" />
        </button>
        <a
          href={mailtoHref}
          className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3.5 text-base font-bold text-slate-800 transition hover:border-brand-blue hover:text-brand-blue"
        >
          Abrir correo
        </a>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-500">
        Este formulario prepara tu correo con la información estructurada para enviarla directamente a BaseLogic.
      </p>
    </form>
  );
}
