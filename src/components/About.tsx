export default function About() {
  return (
    <section id="about" className="py-24">
      <h2 className="flex items-center gap-4 text-2xl font-bold text-white mb-12 tracking-tight">
        <span className="section-num">01.</span>
        About Me
      </h2>
      <div className="grid md:grid-cols-[3fr_1fr] gap-12 items-start">
        <div className="space-y-6 text-muted leading-relaxed">
          <p>
            I&apos;m a passionate software engineer with 3+ years of experience building modern web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
          <p>
            My journey in software development started with curiosity about how things work behind the scenes. Today, I specialize in full-stack development with a focus on creating exceptional user experiences.
          </p>
          <p>
            When I&apos;m not coding, you can find me contributing to open-source projects, exploring new technologies, or sharing knowledge with the developer community.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div>
              <h4 className="text-white/90 font-semibold text-sm mb-1">Clean Code</h4>
              <p className="text-muted text-sm">I write maintainable, scalable code following best practices and design patterns.</p>
            </div>
            <div>
              <h4 className="text-white/90 font-semibold text-sm mb-1">Problem Solver</h4>
              <p className="text-muted text-sm">I enjoy tackling complex challenges and finding innovative solutions to real-world problems.</p>
            </div>
            <div>
              <h4 className="text-white/90 font-semibold text-sm mb-1">Team Player</h4>
              <p className="text-muted text-sm">Experienced in collaborative development environments and agile methodologies.</p>
            </div>
            <div>
              <h4 className="text-white/90 font-semibold text-sm mb-1">Fast Learner</h4>
              <p className="text-muted text-sm">Quick to adapt to new technologies and frameworks as the industry evolves.</p>
            </div>
          </div>

          <p className="pt-4">Here are the technologies I work with:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="text-white/90 font-semibold mb-2">Frontend</h4>
              <ul className="space-y-1 text-white/80">
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'JavaScript'].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="text-muted">▹</span> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white/90 font-semibold mb-2">Backend</h4>
              <ul className="space-y-1 text-white/80">
                {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="text-muted">▹</span> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white/90 font-semibold mb-2">Tools & Others</h4>
              <ul className="space-y-1 text-white/80">
                {['Git', 'Docker', 'AWS', 'Firebase', 'Jest', 'Cypress'].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="text-muted">▹</span> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="relative max-w-xs mx-auto md:mx-0 group">
          <div className="absolute inset-0 border border-white/15 rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform" />
          <div className="relative rounded-lg bg-surface overflow-hidden aspect-square border border-border">
            <div className="w-full h-full flex items-center justify-center text-muted/50 text-4xl">
              LS
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
