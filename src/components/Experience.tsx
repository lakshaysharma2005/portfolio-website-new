const experience = [
  {
    role: 'Founding Engineer',
    company: 'Dreach (YC P26)',
    location: 'San Francisco, California',
    period: 'Aug 2026 – Current',
    bullets: [],
    tech: [],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Resensys',
    location: 'Beltsville, Maryland',
    period: 'May 2026 – Aug 2026',
    bullets: [
      'Built an automated report-generation pipeline in Python for a Django-based web application, using docxtpl to populate Word templates with bridge structural health sensor data extracted from a JSON API',
      'Conducted security audits across production codebases using Gitleaks ahead of a client codebase migration',
      'Migrated the web portal codebase and DynamoDB database to a new client-managed Ubuntu server using WinSCP',
    ],
    tech: ['Python', 'Django', 'docxtpl', 'Gitleaks', 'DynamoDB'],
  },
  {
    role: 'Co-Founder & Lead Engineer',
    company: 'AutoZenix AI',
    location: 'College Park, Maryland',
    period: 'July 2025 – Current',
    bullets: [
      'Founded an AI automation agency generating $16,000+ in revenue across US, Canada, and UAE clients',
      'Engineered an AI voice agent that auto-calls ad leads, increasing client conversion rates by 43% and revenue by 28%',
      'Delivered 5 production automation systems spanning CRM workflows, WhatsApp pipelines, and cold outreach using Claude Code for n8n workflow development, reducing manual sales effort by 90%',
    ],
    tech: ['n8n', 'Claude Code', 'CRM', 'WhatsApp'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'JK Tyre & Industries Ltd.',
    location: 'New Delhi, India',
    period: 'June 2025 – Aug 2025',
    bullets: [
      'Implemented a Python-based route optimization system using Google Maps API, NetworkX and MySQL that reduced planning time from 4 hours to 45 minutes for a drive across a nationwide dealer network',
      'Collaborated with the Sales Operations team to identify bottlenecks in the existing planning workflow and source historical dealer data, directly shaping the system’s optimization logic',
      'Used scikit-learn to build and evaluate regression and clustering models on historical dealer data to improve route planning insights',
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
      'Designed project request forms and booking dashboards in React/Next.js for the Terrapin Works makerspace platform',
      'Partnered with 50+ campus stakeholders to gather requirements, driving adoption across UMD’s makerspace operations',
    ],
    tech: ['Flask', 'React', 'SQL', 'Next.js'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Xficient Inc.',
    location: 'McLean, Virginia',
    period: 'June 2024 – August 2024',
    bullets: [
      'Developed an AI chatbot (Python, LangChain) that answers user questions on insurance policy PDFs, tested with 50+ documents at 92% answer accuracy',
      'Leveraged Python and LangChain to automate data extraction from PDFs, reducing processing time by 40% compared to manual review',
      'Implemented CI/CD pipelines and Dockerized the application to automate testing and deployment',
    ],
    tech: ['Python', 'LangChain', 'Docker', 'CI/CD'],
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
          <details key={`${job.company}-${job.period}`} className="exp-item">
            <summary className={job.bullets.length > 0 ? 'exp-summary' : 'exp-summary cursor-default pointer-events-none'}>
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white min-w-0">
                    {job.role}{' '}
                    <span className="text-muted">@ {job.company}</span>
                  </h3>
                  <span className="flex items-center gap-2 text-xs text-muted shrink-0 pt-1.5">
                    {job.period}
                    {job.bullets.length > 0 && (
                      <svg
                        className="exp-chevron"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2.5 4.5L6 8L9.5 4.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                <p className="text-muted text-xs mt-0.5">{job.location}</p>
              </div>
            </summary>
            {job.bullets.length > 0 && (
              <ul className="list-disc list-inside text-muted text-sm leading-relaxed mt-4 mb-4 space-y-2">
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
            {job.tech.length > 0 && (
              <ul className="flex flex-wrap gap-3 text-xs text-white/70">
                {job.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}
          </details>
        ))}
      </div>
    </section>
  )
}
