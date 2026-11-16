import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
// import { ContactFormData} from '../../types';
import { Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export const ContactSection: React.FC = () => {
  // const [formData, setFormData] = useState<ContactFormData>({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: '',
  // });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };


  // const handleMailtoDirect = () => {
  //   const subjectParam = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
  //   const bodyParam = encodeURIComponent(
  //     `Hello Anandhan,\n\n${formData.message || ''}\n\nFrom,\n${formData.name || ''}\n${formData.email || ''}`
  //   );
  //   window.location.href = `mailto:${personalInfo.email}?subject=${subjectParam}&body=${bodyParam}`;
  // };

  return (
    <section
      id="contact"
      aria-label="Contact and Collaboration"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10"
    >
      <div className="mb-12 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
          05 // CONTACT
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 dark:text-white editorial-title">
          Get in Touch & Collaborate
        </h2>
        <p className="text-base text-zinc-400 max-w-2xl">
          Interested in starting a project, exploring full-time opportunities, or discussing architecture? Drop a transmission below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight text-zinc-100 dark:text-white">
              Let's Build Something Exceptional
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              I am open to full-stack engineering roles, frontend contracts, and ambitious collaborative ventures.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
              Direct Inquiries
            </span>
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-mono text-zinc-200 truncate select-all">
                {personalInfo.email}
              </span>
              <button
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="p-1.5 rounded-lg border border-zinc-800 bg-zinc-800/60 hover:bg-zinc-700 text-zinc-300 transition-colors shrink-0"
              >
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
            {copiedEmail && (
              <span className="text-[11px] font-mono text-emerald-400 block">
                Copied to clipboard
              </span>
            )}
          </div>

          <div className="pt-6 border-t border-zinc-800/80 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
              Professional Networks
            </span>
            <div className="flex flex-col gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900 hover:border-zinc-700 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900 hover:border-zinc-700 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn Network</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
