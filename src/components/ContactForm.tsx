import React, { useState } from 'react';
import { Send, CheckCircle2, Building2, Briefcase } from 'lucide-react';

interface Props {
  lang: 'es' | 'en';
  dict: any; // Pasaremos el diccionario de textos
}

export default function ContactForm({ lang, dict }: Props) {
  const [role, setRole] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Aquí iría tu lógica de envío real (ej. fetch a Formspree)
    // Simulamos envío por ahora:
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-brand-surface border border-brand-cyan/30 rounded-2xl p-8 text-center animate-fade-in">
        <div className="w-16 h-16 bg-brand-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-cyan/20">
            <CheckCircle2 className="w-8 h-8 text-brand-cyan" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{lang === 'es' ? 'Solicitud Enviada' : 'Request Sent'}</h3>
        <p className="text-slate-400">
            {lang === 'es' 
                ? 'Te contactaremos en menos de 2 horas hábiles.' 
                : 'We will contact you in less than 2 business hours.'}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      
      {/* 1. SELECCIÓN DE ROL */}
      <div>
        <label className="block text-sm font-mono text-brand-cyan mb-3">{dict['contact.form.role']}</label>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setRole('agency')}
            className={`p-4 rounded-xl border text-left transition-all flex flex-col gap-2 ${
              role === 'agency' 
                ? 'bg-brand-blue/20 border-brand-blue text-white' 
                : 'bg-brand-surface border-brand-border text-slate-400 hover:border-slate-500'
            }`}
          >
            <Briefcase className={role === 'agency' ? 'text-brand-blue' : 'text-slate-500'} />
            <span className="font-semibold text-sm">{dict['contact.form.role.agency']}</span>
          </button>
          
          <button
            type="button"
            onClick={() => setRole('company')}
            className={`p-4 rounded-xl border text-left transition-all flex flex-col gap-2 ${
              role === 'company' 
                ? 'bg-brand-cyan/20 border-brand-cyan text-white' 
                : 'bg-brand-surface border-brand-border text-slate-400 hover:border-slate-500'
            }`}
          >
            <Building2 className={role === 'company' ? 'text-brand-cyan' : 'text-slate-500'} />
            <span className="font-semibold text-sm">{dict['contact.form.role.company']}</span>
          </button>
        </div>
        <input type="hidden" name="role" value={role} />
      </div>

      {/* 2. TIPO DE PROYECTO (Solo aparece si hay rol) */}
      <div className={`transition-all duration-500 ${role ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4 pointer-events-none blur-[2px]'}`}>
        <label className="block text-sm font-mono text-brand-cyan mb-3">{dict['contact.form.type']}</label>
        <select 
            className="w-full bg-brand-surface border border-brand-border rounded-xl p-4 text-white focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none appearance-none"
            onChange={(e) => setType(e.target.value)}
            required
        >
            <option value="" disabled selected>Select an option...</option>
            <option value="eam">{dict['contact.form.type.eam']}</option>
            <option value="new">{dict['contact.form.type.new']}</option>
            <option value="rescue">{dict['contact.form.type.rescue']}</option>
            <option value="audit">{dict['contact.form.type.audit']}</option>
            <option value="team">{dict['contact.form.type.team']}</option>
        </select>
      </div>

      {/* 3. CAMPOS DE TEXTO */}
      <div className={`space-y-4 transition-all duration-500 ${type ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4 pointer-events-none blur-[2px]'}`}>
        <div className="grid grid-cols-2 gap-4">
            <input 
                type="text" 
                placeholder="Nombre / Name" 
                className="bg-brand-surface border border-brand-border rounded-xl p-4 text-white focus:border-brand-cyan outline-none"
                required
            />
            <input 
                type="email" 
                placeholder="Email" 
                className="bg-brand-surface border border-brand-border rounded-xl p-4 text-white focus:border-brand-cyan outline-none"
                required
            />
        </div>
        <textarea 
            rows={4} 
            placeholder={dict['contact.form.details']}
            className="w-full bg-brand-surface border border-brand-border rounded-xl p-4 text-white focus:border-brand-cyan outline-none resize-none"
        ></textarea>
        
        <button 
            type="submit" 
            disabled={status === 'submitting'}
            className="w-full bg-brand-cyan hover:bg-white text-brand-dark font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
            {status === 'submitting' ? (
                <span className="animate-pulse">Processing...</span>
            ) : (
                <>
                    {dict['contact.form.submit']} <Send className="w-4 h-4" />
                </>
            )}
        </button>
      </div>

    </form>
  );
}