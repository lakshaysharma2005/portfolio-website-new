import Image from 'next/image'
import { projects, site } from '@/data/site'

export default function Projects() {
  return (
    <section id="projects" className="w-full">
      <h2 className="text-[13px] text-muted mb-4">stuff i&apos;ve built</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project) => {
          const href = `${site.github}/${project.repo}`
          const og = `https://opengraph.githubassets.com/1/${site.githubUser}/${project.repo}`
          return (
            <li key={project.repo}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="rounded-lg overflow-hidden border border-border bg-surface">
                  <Image
                    src={og}
                    alt={`${project.title} repository preview`}
                    width={1200}
                    height={600}
                    className="w-full h-auto block"
                  />
                </div>
                <p className="mt-2 text-[13px] text-fg">
                  <span className="text-muted">{site.githubUser}/</span>
                  {project.title}
                </p>
                <p className="text-[13px] text-muted leading-5 mt-0.5">{project.blurb}</p>
              </a>
            </li>
          )
        })}
      </ul>
      <a
        href={site.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-[13px] text-muted hover:text-fg"
      >
        view all projects →
      </a>
    </section>
  )
}
