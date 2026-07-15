'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  duration: string;
  current?: boolean;
  description: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: "Associate – Ad Operations",
    company: "VDO.AI (Z1 Tech), Gurugram (Hybrid)",
    duration: "Nov 2025 - Present",
    current: true,
    description: [
      "Monitor and optimize daily monetization performance across multiple SSPs to maximize fill rates, ArCPM, RPM, and overall programmatic yield.",
      "Manage end-to-end demand partner relationships (Prebid, VAST, oRTB), overseeing supply-demand mapping, integration, and partner performance scaling.",
      "Perform root cause analysis on publisher-side delivery issues, collaborating with product & engineering teams to troubleshoot ad stack implementation.",
      "Built automation workflows that eliminate repetitive manual work in reporting and monitoring, cutting turnaround time across programmatic operations.",
      "Drive revenue optimization through day-to-day yield analysis and monetization growth opportunities across publisher-side operations.",
      "Recognized as WOW Performer of the Month (Feb '26)."
    ],
    skills: ["SQL", "Python (Automation)", "Prebid / VAST / oRTB", "Yield Analysis", "Power BI"]
  },
  {
    title: "Statistical Analyst – Internship",
    company: "Indian Sugar & Bio-energy Association (ISMA), New Delhi (On-Site)",
    duration: "Jul 2024 - Jan 2025",
    description: [
      "Delivered pan-India sugar and ethanol data analysis for 150+ mills, driving strategic decisions for manager & director-level stakeholders.",
      "Co-developed the Statistics Handbook 2023-24 (150+ pages), ensuring error-free delivery to 500+ industry stakeholders.",
      "Established robust validation protocols, reducing reporting errors by 25%.",
      "Automated 5+ reporting processes using Advanced Excel and Python, reducing manual work by 40%."
    ],
    skills: ["Advanced Excel", "Data Analysis", "Python (Automation)"]
  },
  {
    title: "Machine Learning Engineer – Internship",
    company: "CodSoft, New Delhi (Remote)",
    duration: "Oct 2023 - Nov 2023",
    description: [
      "Completed hands-on projects to gain real-world ML experience.",
      "Applied preprocessing, visualization, and modeling techniques on datasets."
    ],
    skills: ["Numpy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"]
  }
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 w-full max-w-4xl mx-auto px-4">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-16 text-white tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Experience
      </motion.h2>

      <div className="relative">
        {/* Timeline rail */}
        <div className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-[#49c5b6] via-gray-700 to-transparent" />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8">
              {/* Timeline node */}
              <span className="absolute left-0 top-6 flex h-[22px] w-[22px] items-center justify-center">
                {exp.current && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#49c5b6] opacity-30" />
                )}
                <span
                  className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                    exp.current ? 'bg-[#49c5b6]' : 'bg-gray-600 border border-gray-500'
                  }`}
                />
              </span>

              <div className="bg-[#1E2326] border border-gray-700 rounded-2xl overflow-hidden">
                {/* Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center gap-4 px-6 py-4 text-left hover:bg-[#2a2f32] transition"
                >
                  <span className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 min-w-0">
                    <span className="text-[#49c5b6] font-semibold text-lg flex items-center gap-2">
                      {exp.title}
                      {exp.current && (
                        <span className="text-[10px] uppercase tracking-wider font-bold text-[#0f1412] bg-[#49c5b6] px-2 py-0.5 rounded-full">
                          Current
                        </span>
                      )}
                    </span>
                    <span className="text-gray-400 text-sm truncate">
                      {exp.company} | {exp.duration}
                    </span>
                  </span>
                  <span className="text-gray-400 shrink-0">{openIndex === index ? '−' : '+'}</span>
                </button>

                {/* Body */}
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <ul className="list-disc list-inside text-gray-300 text-sm mb-4 space-y-1 mt-3">
                        {exp.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-gradient-to-r from-[#49c5b6] to-[#3a9f92] px-3 py-1 rounded-full text-xs text-gray-900 font-medium shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
