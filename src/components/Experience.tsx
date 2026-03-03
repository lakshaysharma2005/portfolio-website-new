const experience = [
  {
    role: 'Software Engineering Intern',
    company: 'JK Tyre & Industries Ltd.',
    location: 'New Delhi, India',
    period: 'June 2025 – August 2025',
    bullets: [
      'Built a Python-based route optimization system using Google Maps API, NetworkX and MySQL that reduced planning time for a drive across a nationwide dealer network',
      'Used scikit-learn to build and evaluate regression and clustering models on historical dealer data to improve route planning insights',
      'Worked with the Sales Operations team through weekly requirement gathering meetings and stakeholder one-on-ones to receive feedback on my work',
    ],
    tech: ['Python', 'Google Maps API', 'NetworkX', 'MySQL', 'scikit-learn'],
  },
  {
    role: 'Software Engineer',
    company: 'Terrapin Works',
    location: 'College Park, Maryland',
    period: 'August 2024 – May 2025',
    bullets: [
      'Led an 8 person team to develop Pinpoint, a web-based makerspace management system using Flask, React.js and SQL',
      'Implemented RESTful APIs in Flask to support project requests and booking workflows',
      'Utilized HTML, CSS, and TypeScript frameworks (React, Next.js) to implement front-end features such as project request forms, booking dashboards, and interactive components for the Terrapin Works website',
      "Enhanced UMD's digital footprint by collaborating with 50+ campus partners and end users to gather requirements and ensure the platform aligned with real operational needs",
    ],
    tech: ['Flask', 'React', 'SQL', 'Next.js', 'TypeScript'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Xficient Inc.',
    location: 'McLean, Virginia',
    period: 'June 2024 – August 2024',
    bullets: [
      'Built a generative AI chatbot that analyzes insurance policy PDFs and answers user questions about the document',
      'Leveraged Python and LangChain to automate data extraction from PDFs, reducing processing time by 40% compared to manual review',
      'Implemented CI/CD pipelines and Dockerized the application to automate testing and deployment of the chatbot',
      'Established Git workflows for my intern team working on the chatbot to enable collaborative development',
    ],
    tech: ['Python', 'LangChain', 'Docker', 'CI/CD', 'Git'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <h2 className="flex items-center gap-4 text-2xl font-bold text-white mb-12 tracking-tight">
        <span className="section-num">02.</span>
        Where I&apos;ve Worked
      </h2>
      <div className="relative">
        {experience.map((job) => (
          <div key={`${job.company}-${job.period}`} className="exp-item">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {job.role}{' '}
                  <span className="text-muted">@ {job.company}</span>
                </h3>
                <p className="text-muted text-xs mt-0.5">{job.location}</p>
              </div>
              <span className="text-xs text-muted">{job.period}</span>
            </div>
            <ul className="list-disc list-inside text-muted text-sm leading-relaxed mb-4 space-y-2">
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-3 text-xs text-white/70">
              {job.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
