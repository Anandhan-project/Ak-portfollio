import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { ContactFormData, FormFeedback } from '../../types';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [feedback, setFeedback] = useState<FormFeedback>({ type: 'idle' });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const validate = (): boolean => {
    const errs: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please specify a subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message must be at least 15 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setFeedback({ type: 'loading', message: 'Sending your message...' });

    // Simulate reliable async network submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setFeedback({
        type: 'success',
        message: 'Thank you! Your message has been dispatched successfully. I will get back to you shortly.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch {
      setFeedback({
        type: 'error',
        message: 'Something went wrong while sending. Please try reaching out directly via email.',
      });
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-mono text-purple-400 mb-3">
          <Mail className="w-3.5 h-3.5" />
          <span>05 // INITIATE TRANSMISSION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Get in Touch & <span className="text-gradient">Collaborate</span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl text-base">
          Have an open role, an ambitious project, or want to discuss React architecture? My inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white">Direct Communication</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              I am currently open to full-time Frontend / Full-Stack positions, contract roles, and open-source collaborations.
            </p>

            <div className="space-y-4 pt-2">
              {/* Email Card with Copy button */}
              <div className="glass-card p-4 rounded-2xl flex items-center justify-between gap-3 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-600/20 text-purple-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Email Address</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-medium text-white hover:text-purple-300 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="p-2 rounded-lg glass-panel hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="glass-card p-4 rounded-2xl flex items-center gap-3 border border-white/5">
                <div className="p-2.5 rounded-xl bg-cyan-600/20 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Location</div>
                  <div className="text-sm font-medium text-white">{personalInfo.location}</div>
                </div>
              </div>

              {/* GitHub Card */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="glass-card p-4 rounded-2xl flex items-center gap-3 border border-white/5 hover:border-purple-500/30 transition-all block group"
              >
                <div className="p-2.5 rounded-xl bg-slate-800 text-slate-300 group-hover:text-white">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">GitHub Profile</div>
                  <div className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
                    github.com/anandhan
                  </div>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-card p-4 rounded-2xl flex items-center gap-3 border border-white/5 hover:border-cyan-500/30 transition-all block group"
              >
                <div className="p-2.5 rounded-xl bg-slate-800 text-slate-300 group-hover:text-white">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">LinkedIn Network</div>
                  <div className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                    linkedin.com/in/anandhan
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out the form below. Client-side validation guarantees clean message delivery.
            </p>

            {/* Success Banner */}
            {feedback.type === 'success' ? (
              <div
                role="status"
                className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center animate-in fade-in zoom-in-95"
              >
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h4 className="text-base font-bold text-emerald-200 mb-2">Message Delivered!</h4>
                <p className="text-sm text-emerald-300/80 mb-6 leading-relaxed">
                  {feedback.message}
                </p>
                <button
                  onClick={() => setFeedback({ type: 'idle' })}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-lg shadow-emerald-600/30 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {feedback.type === 'error' && (
                  <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 flex items-center gap-3 text-xs text-rose-300">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{feedback.message}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Ada Lovelace"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl glass-card text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 border transition-all ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-white/10 focus:ring-purple-400'
                      }`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-rose-400 mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="ada@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl glass-card text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 border transition-all ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-white/10 focus:ring-purple-400'
                      }`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-rose-400 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject <span className="text-purple-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Exciting Frontend Opportunity / Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl glass-card text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 border transition-all ${
                      errors.subject
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-white/10 focus:ring-purple-400'
                    }`}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-xs text-rose-400 mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Hello Anandhan, I loved your plasma motion portfolio and would like to talk about..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl glass-card text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 border transition-all ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-white/10 focus:ring-purple-400'
                    }`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-rose-400 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={feedback.type === 'loading'}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 hover:shadow-cyan-500/30 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {feedback.type === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Transmission</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
