'use client';

import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: "Statistical Analyst – Internship",
    company: "Indian Sugar & Bio-energy Association (ISMA), New Delhi (On-Site)",
    duration: "Jul 2024 - Jan 2025",
    description: [
  "Delivered pan-India sugar and ethanol data analysis for 150+ mills, driving strategic decisions for manager & director-level stakeholders across the bio-energy sector.",
  "Co-developed the Statistics Handbook 2023-24 covering 150+ pages of industry data, ensuring error-free delivery to 500+ industry stakeholders.",
  "Established robust data validation protocols, reducing reporting errors by 25% and enhancing stakeholder confidence in weekly data outputs.",
  "Automated 5+ reporting processes using Advanced Excel and Python, reducing manual work by 40% and streamlining weekly workflows."
],
    skills: ["Advanced Excel", "Data Analysis & Visualization", "Python (Automation)"]
  },
  {
    title: "Machine Learning Engineer – Internship",
    company: "CodSoft, New Delhi (Remote)",
    duration: "Oct 2023 - Nov 2023",
    description: [
      "Completed hands-on projects to gain real-world machine learning experience.",
      "Applied data preprocessing, visualization, and modeling techniques to small-scale datasets."
    ],
    skills: ["Numpy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"]
  },
  {
    title: "Teacher of Mathematics",
    company: "Vijay Institute and Learning, New Delhi (Part-time)",
    duration: "May 2022 - Apr 2023",
    description: [
      "Taught mathematics with a focus on conceptual understanding and problem-solving.",
      "Developed and presented mathematical analysis solutions to students.",
      "Maintained high engagement levels in class, fostering a love for mathematics."
    ],
    skills: ["Mathematical Analysis", "Teaching", "Presenting Solutions"]
  }
];

export default function Experience() {
  return (
    <section className="py-16 w-full max-w-6xl mx-auto px-4">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Experience
      </motion.h2>

      <div className="relative">
        {/* Vertical line for timeline */}
        <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-[#49c5b6] transform -translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row gap-8 mb-12 relative ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#49c5b6] rounded-full transform -translate-x-1/2 mt-2"></div>

            {/* Content */}
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
              <div className="bg-[#2A2F32] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#49c5b6] mb-1 italic">
                  {exp.title}
                </h3>
                <p className="text-gray-300 text-sm mb-2">
                  {exp.company} | {exp.duration}
                </p>
                <ul className="list-disc list-inside text-gray-300 text-sm mb-4">
                  {exp.description.map((point, i) => (
                    <li key={i} className="mb-1">{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-[#383F42] px-2 py-1 rounded-full text-xs text-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
