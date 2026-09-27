'use client';

import { useState, type FormEvent } from 'react';
import { Icon } from '@/components/ui/Icon';

interface Props {
  recipientEmail: string;
}

const SUBJECT_OPTIONS = [
  { value: 'recrutement', label: 'Opportunité de stage / Recrutement CDI' },
  { value: 'freelance', label: 'Projet freelance (DevOps, Cloud, Full-stack)' },
  { value: 'academique', label: 'Échange technique & Recherche académique' },
  { value: 'autre', label: 'Autre demande ou partenariat' },
];

const MAX_MESSAGE_LENGTH = 1200;

export function ContactForm({ recipientEmail }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const charCount = message.length;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent || sending) return;

    setSending(true);

    // V1 : mailto avec tout pré-rempli
    const subjectLabel =
      SUBJECT_OPTIONS.find((o) => o.value === subject)?.label ?? 'Message portfolio';
    const mailSubject = encodeURIComponent(`[Portfolio] ${subjectLabel}`);
    const mailBody = encodeURIComponent(
      `Bonjour Gana,\n\n${message}\n\n---\nDe : ${name}\nEmail : ${email}\nSujet : ${subjectLabel}`
    );

    // Petit délai pour montrer l'état "envoi"
    setTimeout(() => {
      window.location.href = `mailto:${recipientEmail}?subject=${mailSubject}&body=${mailBody}`;
      setSending(false);
      setSent(true);

      // Reset après 6s
      setTimeout(() => {
        setSent(false);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setConsent(false);
      }, 6000);
    }, 500);
  }

  return (
    <div className="relative bg-surface-container-lowest rounded-2xl p-space-lg lg:p-space-xl shadow-sm flex flex-col gap-space-md overflow-hidden">
      {/* Décor */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between pb-space-xs relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
            <Icon name="mail" size={22} />
          </div>
          <div>
            <h2 className="text-headline-md text-on-surface tracking-tight">
              Envoyez-moi un message
            </h2>
            <p className="text-body-sm text-on-surface-variant">
              Formulaire transmis instantanément
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-low text-on-surface-variant">
          <Icon name="lock" size={16} className="text-tertiary" />
          <span className="text-label-code-sm">Sécurisé</span>
        </div>
      </div>

      {/* Formulaire */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-space-md pt-space-xs relative z-10"
      >
        {/* Nom + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
          <Field
            id="contact-name"
            label="Votre nom complet"
            icon="person"
            required
          >
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Dr. Mamadou Diop"
              className="w-full h-11 pl-10 pr-3 rounded-lg bg-surface-container-low text-on-surface text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_#0ea5e9] transition-all"
            />
          </Field>

          <Field
            id="contact-email"
            label="Adresse email"
            icon="alternate_email"
            required
          >
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ex: m.diop@entreprise.sn"
              className="w-full h-11 pl-10 pr-3 rounded-lg bg-surface-container-low text-on-surface text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_#0ea5e9] transition-all"
            />
          </Field>
        </div>

        {/* Objet */}
        <Field
          id="contact-subject"
          label="Objet de votre message"
          icon="category"
          required
        >
          <select
            id="contact-subject"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full h-11 pl-10 pr-10 rounded-lg bg-surface-container-low text-on-surface text-body-md appearance-none focus:outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_#0ea5e9] transition-all cursor-pointer"
          >
            <option value="" disabled>
              Sélectionnez la nature de votre échange...
            </option>
            {SUBJECT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <Icon
            name="expand_more"
            size={20}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none"
          />
        </Field>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="contact-message"
              className="text-label-code-sm font-semibold text-on-surface"
            >
              Votre message <span className="text-error font-mono">*</span>
            </label>
            <span
              className={`text-label-code-sm font-mono ${
                charCount > MAX_MESSAGE_LENGTH * 0.9
                  ? 'text-error'
                  : 'text-on-surface-variant'
              }`}
            >
              {charCount} / {MAX_MESSAGE_LENGTH}
            </span>
          </div>
          <textarea
            id="contact-message"
            required
            maxLength={MAX_MESSAGE_LENGTH}
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Décrivez brièvement le contexte de votre projet, vos attentes techniques ou votre proposition..."
            className="w-full p-3 rounded-lg bg-surface-container-low text-on-surface text-body-md placeholder:text-outline-variant focus:outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_#0ea5e9] transition-all resize-none"
          />
        </div>

        {/* Consentement */}
        <div className="flex items-start gap-2.5 pt-1">
          <input
            id="consent-check"
            type="checkbox"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer accent-primary"
          />
          <label
            htmlFor="consent-check"
            className="text-body-sm text-on-surface-variant cursor-pointer select-none"
          >
            J&apos;accepte que les données saisies soient utilisées exclusivement
            dans le cadre de nos échanges professionnels directs.
          </label>
        </div>

        {/* Submit */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-2">
          <div className="flex items-center gap-space-xs text-on-surface-variant text-body-sm">
            <Icon name="verified_user" size={18} className="text-tertiary" />
            <span>Traitement confidentiel</span>
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-on-primary text-headline-sm hover:bg-primary-container transition-all shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <span>{sending ? 'Envoi...' : 'Envoyer le message'}</span>
            <Icon name="send" size={20} />
          </button>
        </div>

        {/* Bannière succès */}
        {sent && (
          <div className="p-space-md rounded-lg bg-tertiary/10 border border-tertiary/20 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <Icon name="check_circle" size={24} className="text-tertiary" />
            <div className="flex flex-col">
              <span className="text-headline-sm text-tertiary font-bold">
                Message prêt à être envoyé !
              </span>
              <span className="text-body-sm text-on-surface-variant">
                Votre client mail va s&apos;ouvrir avec le message pré-rempli.
                Je répondrai sous 24h.
              </span>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

/* ============================================
   Sous-composant : champ avec icône
   ============================================ */
function Field({
  id,
  label,
  icon,
  required,
  children,
}: {
  id: string;
  label: string;
  icon: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-label-code-sm font-semibold text-on-surface flex items-center justify-between"
      >
        <span>{label}</span>
        {required && <span className="text-error font-mono">*</span>}
      </label>
      <div className="relative flex items-center">
        <Icon
          name={icon}
          size={20}
          className="absolute left-3 text-outline pointer-events-none z-10"
        />
        {children}
      </div>
    </div>
  );
}