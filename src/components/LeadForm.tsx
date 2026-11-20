import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AlertCircle, CheckCircle2, ChevronDown, Loader2, Mail, RotateCcw, Send } from 'lucide-react';
import { budgetRanges, createMailtoHref, projectTypes } from '../data/contact';
import { plans } from '../data/plans';
import '../styles/lead-form.css';

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
  privacyAccepted: boolean;
  company_website: string;
};

type UtmState = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  page_path: string;
  referrer: string;
};

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: projectTypes[0],
  budget: budgetRanges[0],
  message: '',
  privacyAccepted: false,
  company_website: '',
};

const initialUtm: UtmState = {
  utm_source: '',
  utm_medium: '',
  utm_campaign: '',
  utm_term: '',
  utm_content: '',
  page_path: '/contacto',
  referrer: '',
};

const QUERY_PROJECT_MAP: Record<string, string> = {
  web: 'Página web',
  'paginas-web': 'Página web',
  landing: 'Landing page',
  'landing-pages': 'Landing page',
  wordpress: 'WordPress',
  'webs-estaticas': 'Página web',
  sistemas: 'Sistema para pyme',
  'sistemas-para-pymes': 'Sistema para pyme',
  automatizacion: 'Automatización',
  booking: 'BaseLogic Booking',
  edupay: 'BaseLogic EduPay',
  eam: 'BaseLogic EAM',
  pos: 'BaseLogic POS (Piloto)',
  soporte: 'Soporte mensual',
  'soporte-digital': 'Soporte mensual',
  productos: 'No estoy seguro',
};

const buildLeadMessage = (form: FormState) =>
  [
    'Hola BaseLogic, quiero cotizar o evaluar un proyecto tecnológico.',
    '',
    `Nombre: ${form.name}`,
    `Email: ${form.email}`,
    `Teléfono de contacto: ${form.phone || 'No indicado'}`,
    `Empresa o negocio: ${form.company || 'No indicada'}`,
    `Tipo de proyecto: ${form.projectType}`,
    `Presupuesto aproximado: ${form.budget}`,
    '',
    `Mensaje: ${form.message}`,
  ].join('\n');

export default function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [utm, setUtm] = useState<UtmState>(initialUtm);
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [serverMessage, setServerMessage] = useState<string>('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [referenceId, setReferenceId] = useState<string>('');
  const formElement = useRef<HTMLFormElement>(null);
  const errorSummary = useRef<HTMLDivElement>(null);
  const successHeading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const nextUtm: UtmState = {
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_term: params.get('utm_term') || '',
      utm_content: params.get('utm_content') || '',
      page_path: window.location.pathname + window.location.search,
      referrer: document.referrer || '',
    };
    setUtm(nextUtm);

    const requestedKey = (
      params.get('producto') ||
      params.get('servicio') ||
      params.get('tipo') ||
      ''
    )
      .trim()
      .toLowerCase();

    const requestedType = QUERY_PROJECT_MAP[requestedKey];
    const plan = plans.find(({ id }) => id === params.get('plan'));
    if (typeof requestedType === 'string' || plan) {
      setForm((current) => ({
        ...current,
        projectType: typeof requestedType === 'string' ? requestedType : 'No estoy seguro',
        message: current.message || (plan ? `Quiero cotizar el plan ${plan.name}.` : ''),
      }));
    }
  }, []);

  useEffect(() => {
    if (status === 'success') {
      successHeading.current?.focus();
    }
    if (status === 'error') {
      const firstInvalid = formElement.current?.querySelector<HTMLElement>('[aria-invalid="true"]');
      (firstInvalid ?? errorSummary.current)?.focus();
    }
  }, [status]);

  const leadMessage = useMemo(() => buildLeadMessage(form), [form]);
  const mailtoHref = useMemo(
    () => createMailtoHref(`Consulta web: ${form.projectType}`, leadMessage),
    [form.projectType, leadMessage],
  );

  const updateField = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (fieldErrors[field as string]) {
      setFieldErrors((current) => {
        const copy = { ...current };
        delete copy[field as string];
        return copy;
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setServerMessage('');
    setFieldErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          projectType: form.projectType,
          budget: form.budget,
          message: form.message,
          privacyAccepted: form.privacyAccepted,
          company_website: form.company_website,
          utm,
        }),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        referenceId?: string;
        message?: string;
        errors?: Record<string, string>;
      };

      if (!response.ok || !payload.ok) {
        setStatus('error');
        setServerMessage(
          payload.message ||
            'No fue posible procesar el formulario en este momento. Revisa los datos o utiliza el enlace directo de correo.',
        );
        if (payload.errors) {
          setFieldErrors(payload.errors);
        }
        return;
      }

      setReferenceId(payload.referenceId || 'BL-RECIBIDO');
      setStatus('success');
    } catch {
      setStatus('error');
      setServerMessage(
        'Ocurrió un error de conexión al enviar tu solicitud. Puedes reintentar o abrir tu correo con la información ya preparada.',
      );
    }
  };

  const handleReset = () => {
    setForm(initialState);
    setFieldErrors({});
    setServerMessage('');
    setReferenceId('');
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <section id="formulario" aria-labelledby="lead-success-title" className="lead-panel lead-success">
        <p role="status" className="lead-success__reference">
          <CheckCircle2 width={19} height={19} aria-hidden="true" />
          Solicitud recibida · Ref: {referenceId}
        </p>
        <h2 id="lead-success-title" ref={successHeading} tabIndex={-1}>Recibimos tu consulta</h2>
        <p className="lead-panel__description">
          El equipo de BaseLogic revisará tu requerimiento y te responderá a <strong>{form.email}</strong> con los siguientes pasos.
        </p>
        <dl className="lead-success__details">
          <div>
            <dt>Contacto</dt>
            <dd>{form.name}</dd>
          </div>
          <div>
            <dt>Solución consultada</dt>
            <dd>{form.projectType === 'BaseLogic POS (Piloto)' ? 'BaseLogic POS' : form.projectType}</dd>
          </div>
          {form.company && (
            <div>
              <dt>Empresa</dt>
              <dd>{form.company}</dd>
            </div>
          )}
          {form.phone && (
            <div>
              <dt>Teléfono</dt>
              <dd>{form.phone}</dd>
            </div>
          )}
        </dl>
        <button type="button" onClick={handleReset} className="interior-button">
          <RotateCcw width={16} height={16} aria-hidden="true" />
          Enviar otra consulta
        </button>
      </section>
    );
  }

  return (
    <form
      id="formulario"
      ref={formElement}
      aria-labelledby="lead-form-title"
      aria-busy={status === 'submitting'}
      action="/api/contact"
      method="post"
      onSubmit={handleSubmit}
      noValidate
      className="lead-panel"
    >
      <header className="lead-panel__header">
        <h2 id="lead-form-title">Detalles de tu consulta</h2>
        <p className="lead-panel__description">Los campos con <span className="lead-required">*</span> son obligatorios.</p>
      </header>

      {/* Honeypot oculto para bots automatizados */}
      <div className="lead-honeypot" aria-hidden="true">
        <label htmlFor="lead-company-website">
          Sitio web corporativo (no completar)
          <input
            id="lead-company-website"
            name="company_website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.company_website}
            onChange={(event) => updateField('company_website', event.target.value)}
          />
        </label>
      </div>

      <fieldset className="lead-fieldset">
        <legend>Tus datos</legend>
        <div className="lead-grid">
          <div className="lead-field">
            <label htmlFor="lead-name">Nombre <span className="lead-required" aria-hidden="true">*</span></label>
            <input
              id="lead-name"
              name="name"
              autoComplete="name"
              required
              placeholder="Ej. Carolina Rojas"
              value={form.name}
              aria-invalid={Boolean(fieldErrors.name)}
              aria-describedby={fieldErrors.name ? 'lead-name-error' : undefined}
              onChange={(event) => updateField('name', event.target.value)}
              className="lead-control"
            />
            <FieldError id="lead-name-error" error={fieldErrors.name} />
          </div>

          <div className="lead-field">
            <label htmlFor="lead-email">Correo electrónico <span className="lead-required" aria-hidden="true">*</span></label>
            <input
              id="lead-email"
              name="email"
              required
              type="email"
              autoComplete="email"
              placeholder="nombre@empresa.cl"
              value={form.email}
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? 'lead-email-error' : undefined}
              onChange={(event) => updateField('email', event.target.value)}
              className="lead-control"
            />
            <FieldError id="lead-email-error" error={fieldErrors.email} />
          </div>

          <div className="lead-field">
            <label htmlFor="lead-company">Empresa u organización <small>(opcional)</small></label>
            <input
              id="lead-company"
              name="company"
              autoComplete="organization"
              placeholder="Nombre de tu empresa"
              value={form.company}
              aria-invalid={Boolean(fieldErrors.company)}
              aria-describedby={fieldErrors.company ? 'lead-company-error' : undefined}
              onChange={(event) => updateField('company', event.target.value)}
              className="lead-control"
            />
            <FieldError id="lead-company-error" error={fieldErrors.company} />
          </div>

          <div className="lead-field">
            <label htmlFor="lead-phone">Teléfono de contacto <small>(opcional)</small></label>
            <input
              id="lead-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+56 9 1234 5678"
              value={form.phone}
              aria-invalid={Boolean(fieldErrors.phone)}
              aria-describedby={fieldErrors.phone ? 'lead-phone-error' : undefined}
              onChange={(event) => updateField('phone', event.target.value)}
              className="lead-control"
            />
            <FieldError id="lead-phone-error" error={fieldErrors.phone} />
          </div>
        </div>
      </fieldset>

      <fieldset className="lead-fieldset">
        <legend>Tu proyecto</legend>
        <div className="lead-grid">
          <div className="lead-field">
            <label htmlFor="lead-project-type">¿Qué necesitas resolver? <span className="lead-required" aria-hidden="true">*</span></label>
            <div className="lead-select">
              <select
                id="lead-project-type"
                name="projectType"
                required
                value={form.projectType}
                aria-invalid={Boolean(fieldErrors.projectType)}
                aria-describedby={fieldErrors.projectType ? 'lead-project-type-error' : undefined}
                onChange={(event) => updateField('projectType', event.target.value)}
                className="lead-control"
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === 'BaseLogic POS (Piloto)' ? 'BaseLogic POS' : type}
                  </option>
                ))}
              </select>
              <ChevronDown width={17} height={17} aria-hidden="true" />
            </div>
            <FieldError id="lead-project-type-error" error={fieldErrors.projectType} />
          </div>

          <div className="lead-field">
            <label htmlFor="lead-budget">Presupuesto aproximado <small>(opcional)</small></label>
            <div className="lead-select">
              <select
                id="lead-budget"
                name="budget"
                value={form.budget}
                aria-invalid={Boolean(fieldErrors.budget)}
                aria-describedby={fieldErrors.budget ? 'lead-budget-error' : undefined}
                onChange={(event) => updateField('budget', event.target.value)}
                className="lead-control"
              >
                {budgetRanges.map((range) => <option key={range} value={range}>{range}</option>)}
              </select>
              <ChevronDown width={17} height={17} aria-hidden="true" />
            </div>
            <FieldError id="lead-budget-error" error={fieldErrors.budget} />
          </div>

          <div className="lead-field lead-field--wide">
            <label htmlFor="lead-message">Mensaje o contexto de tu operación <span className="lead-required" aria-hidden="true">*</span></label>
            <textarea
              id="lead-message"
              name="message"
              required
              rows={4}
              placeholder="Cuéntanos qué problema quieres resolver y en qué etapa está tu proyecto."
              value={form.message}
              aria-invalid={Boolean(fieldErrors.message)}
              aria-describedby={fieldErrors.message ? 'lead-message-error' : undefined}
              onChange={(event) => updateField('message', event.target.value)}
              className="lead-control"
            />
            <FieldError id="lead-message-error" error={fieldErrors.message} />
          </div>
        </div>
      </fieldset>

      <div className="lead-consent">
        <label htmlFor="lead-privacy">
          <input
            id="lead-privacy"
            name="privacyAccepted"
            type="checkbox"
            required
            checked={form.privacyAccepted}
            aria-invalid={Boolean(fieldErrors.privacyAccepted)}
            aria-describedby={fieldErrors.privacyAccepted ? 'lead-privacy-error' : undefined}
            onChange={(event) => updateField('privacyAccepted', event.target.checked)}
          />
          <span>
            <span className="lead-required" aria-hidden="true">* </span>
            Acepto el tratamiento de mis datos de contacto para evaluar esta solicitud conforme a la{' '}
            <a href="/legal/privacidad">Política de Privacidad</a>{' '}
            de BaseLogic (SENAS TECNOLOGÍAS SpA). No enviamos correo masivo ni compartimos tu información con
            terceros.
          </span>
        </label>
        <FieldError id="lead-privacy-error" error={fieldErrors.privacyAccepted} />
      </div>

      {status === 'error' && serverMessage && (
        <div id="lead-error-summary" ref={errorSummary} tabIndex={-1} role="alert" className="lead-alert">
          <AlertCircle width={19} height={19} aria-hidden="true" />
          <div>
            <p>No se pudo enviar la solicitud</p>
            <p>{serverMessage}</p>
          </div>
        </div>
      )}

      <div className="lead-actions">
        <button type="submit" disabled={status === 'submitting'} className="interior-button">
          {status === 'submitting' ? (
            <>Enviando solicitud <Loader2 width={17} height={17} className="motion-safe:animate-spin" aria-hidden="true" /></>
          ) : (
            <>Enviar solicitud <Send width={17} height={17} aria-hidden="true" /></>
          )}
        </button>
        <a href={mailtoHref} className="interior-link">
          <Mail width={17} height={17} aria-hidden="true" />
          Abrir en correo
        </a>
      </div>
    </form>
  );
}

function FieldError({ id, error }: { id: string; error?: string }) {
  return error ? <p id={id} className="lead-field-error">{error}</p> : null;
}
