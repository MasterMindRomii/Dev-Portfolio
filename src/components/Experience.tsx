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
      "Optimize daily monetization across demand partners (Magnite, Amazon Publisher Services, Adipolo and others) to maximize fill rate, RPM and programmatic yield, improving average yield efficiency by ~18%.",
      "Run yield analysis in Google Ad Manager (GAM360) to track inventory performance and pricing and demand trends, and to drive floor price decisions for direct publishers.",
      "Rolled out a dynamic price floor optimization workflow using historical yield and revenue analytics, contributing to a ~40% lift in incremental revenue. Now used company-wide.",
      "Manage demand partner relationships (Prebid, VAST, oRTB): supply-demand mapping, integration communications, MCM invites and site approvals. Root cause analysis on publisher-side delivery issues cut resolution turnaround by ~30%.",
      "Led DV360 campaigns end to end: trafficking, pre and post launch activities, screenshot decks and post-launch analysis reports.",
      "Built an automated ads.txt crawler and validator that bulk-checks publisher ads.txt files across thousands of domains, cutting compliance-review time by ~70%.",
      "WOW Performer of the Month three times (Feb, May and Jul 2026)."
    ],
    skills: ["GAM360", "DV360", "Prebid / VAST / oRTB", "Magnite", "Amazon Publisher Services", "Adipolo", "Floor Price Optimization", "Python (Automation)", "SQL"]
  },
  {
    title: "Data Analyst – Internship",
    company: "Indian Sugar & Bio-energy Manufacturers Association (ISMA), New Delhi (On-Site)",
    duration: "Jul 2024 - Jan 2025",
    description: [
      "Delivered pan-India sugar and ethanol data analysis for 150+ mills, driving strategic decisions for manager and director-level stakeholders across the bio-energy sector.",
      "Automated 15+ reporting processes using Advanced Excel and Python, reducing manual work by 40% and streamlining weekly workflows."
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
