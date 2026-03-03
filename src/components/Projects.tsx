const projects = [
  {
    title: 'Xficient Bot',
    description:
      '🥇 First place winner at Bitcamp 2024! Revolutionary university course catalog management using unsupervised learning to cluster uploaded files. Seamlessly integrates OpenAI API through LangChain for intuitive course information access.',
    tech: ['Python', 'OpenAI API', 'LangChain', 'Machine Learning'],
    href: '#',
    codeHref: '#',
    demoHref: '#',
    external: true,
    featured: true,
  },
  {
    title: 'Claim Assist',
    description:
      'Wildfire Insurance Claims Management Platform. Engineered a scalable full-stack web application to modernize wildfire insurance claims processing, leveraging React, TypeScript, and Tailwind CSS for a dynamic and responsive UI. Architected a secure backend with Supabase, enabling user authentication, encrypted file storage, and real-time data handling.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Netlify'],
    href: '#',
    codeHref: '#',
    demoHref: '#',
    external: true,
    featured: true,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="flex items-center gap-4 text-2xl font-bold text-white mb-4 tracking-tight">
        <span className="section-num">03.</span>
        Featured Projects
      </h2>
      <p className="text-muted text-sm mb-12 max-w-xl">
        A collection of projects that showcase my skills and passion for development.
      </p>
      <ul className="grid gap-6">
        {projects.map((project) => (
          <li key={project.title}>
            <article className="project-card block group">
              <div className="flex justify-between items-start gap-4 mb-3">
                <div className="flex items-center gap-2">
                  {project.featured && (
                    <span className="text-xs font-medium text-white/60 uppercase tracking-wider">Featured</span>
                  )}
                  <h3 className="text-xl font-semibold text-white transition-colors">
                    <a
                      href={project.href}
                      target={project.external ? '_blank' : undefined}
                      rel={project.external ? 'noopener noreferrer' : undefined}
                      className="hover:text-white"
                    >
                      {project.title}
                    </a>
                  </h3>
                </div>
                <a
                  href={project.href}
                  target={project.external ? '_blank' : undefined}
                  rel={project.external ? 'noopener noreferrer' : undefined}
                  className="text-muted text-2xl hover:text-white transition-colors"
                  aria-hidden
                >
                  ↗
                </a>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-4 text-xs text-muted mb-4">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="flex gap-4 text-xs">
                <a
                  href={project.codeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Code
                </a>
                <a
                  href={project.demoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Demo
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 text-muted hover:text-white text-sm transition-colors"
      >
        View All Projects on GitHub →
      </a>
    </section>
  )
}
