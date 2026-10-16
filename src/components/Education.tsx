'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// MCA runs Aug 2025 to Jul 2027 (expected)
const MCA_START = new Date(2025, 7, 1).getTime();
const MCA_END = new Date(2027, 6, 31).getTime();

function Ring({ value, max, label }: { value: number; max: number; label: string }) {
  const r = 34;
  const c = 2 * Math.PI * r;
  const pct = value / max;
  return (
    <div className="relative h-24 w-24 shrink-0" role="img" aria-label={`${label} ${value} out of ${max}`}>
      <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
        <circle cx="40" cy="40" r={r} fill="none" stroke="#2f3639" strokeWidth="6" />
        <motion.circle
          cx="40" cy="40" r={r} fill="none" stroke="#49c5b6" strokeWidth="6" strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c * (1 - pct) }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-bold text-white leading-none">{value.toFixed(1)}</span>
        <span className="text-[10px] text-gray-400 mt-1">/ {max} {label}</span>
      </div>
    </div>
  );
}

export default function Education() {
  const [progress, setProgress] = useState<number | null>(null);

  useEffect(() => {
    const p = (Date.now() - MCA_START) / (MCA_END - MCA_START);
    setProgress(Math.min(1, Math.max(0, p)));
  }, []);

  return (
    <section className="py-20 w-full max-w-4xl mx-auto px-4">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-16 text-white tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Education
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* MCA */}
        <motion.article
          className="relative bg-[#1E2326] border border-[#49c5b6]/40 rounded-2xl p-6 flex flex-col gap-5 hover:border-[#49c5b6] transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between gap-3">
            <span className="text-[10px] uppercase tracking-wider font-bold text-[#0f1412] bg-[#49c5b6] px-2 py-0.5 rounded-full">
              Pursuing
            </span>
            <span className="text-gray-400 text-sm">Aug 2025 – Jul 2027 (E)</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#49c5b6] leading-snug">
              Master of Computer Applications (MCA)
            </h3>
            <p className="text-gray-300 text-sm mt-1">Data Science &amp; Analytics</p>
            <p className="text-white font-medium mt-3">Indira Gandhi National Open University (IGNOU)</p>
            <p className="text-gray-400 text-sm">New Delhi</p>
          </div>
          <div className="mt-auto">
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>Programme progress</span>
              <span>{progress === null ? '' : `${Math.round(progress * 100)}%`}</span>
            </div>
            <div className="h-2 rounded-full bg-[#2f3639] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#49c5b6] to-[#3a9f92]"
                initial={{ width: 0 }}
                animate={{ width: progress === null ? 0 : `${progress * 100}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">Studying alongside full-time work in ad operations.</p>
          </div>
        </motion.article>

        {/* BCA */}
        <motion.article
          className="relative bg-[#1E2326] border border-gray-700 rounded-2xl p-6 flex flex-col gap-5 hover:border-[#49c5b6] transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center justify-between gap-3">
            <span className="text-[10px] uppercase tracking-wider font-bold text-gray-300 bg-gray-700 px-2 py-0.5 rounded-full">
              Completed
            </span>
            <span className="text-gray-400 text-sm">Oct 2022 – Aug 2025</span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-[#49c5b6] leading-snug">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="text-gray-300 text-sm mt-1">Data Science &amp; Analytics</p>
              <p className="text-white font-medium mt-3">Maharaja Surajmal Institute (MSI)</p>
              <p className="text-gray-400 text-sm">New Delhi</p>
            </div>
            <Ring value={9.0} max={10} label="CGPA" />
          </div>
        </motion.article>
      </div>
    </section>
  );
}
