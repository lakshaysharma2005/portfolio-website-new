export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <h2 className="flex items-center gap-4 text-2xl font-bold text-white mb-4 tracking-tight">
        <span className="section-num">04.</span>
        Let&apos;s Work Together
      </h2>
      <p className="text-muted text-sm mb-12 max-w-xl">
        I&apos;m always interested in new opportunities and exciting projects. Feel free to reach out if you&apos;d like to discuss potential collaborations.
      </p>
      <div className="space-y-4">
        <p>
          <span className="text-muted text-sm block mb-1">Email</span>
          <a
            href="mailto:lsharma3@umd.edu"
            className="text-white hover:underline"
          >
            lsharma3@umd.edu
          </a>
        </p>
        <p>
          <span className="text-muted text-sm block mb-1">Phone</span>
          <a
            href="tel:+12407148853"
            className="text-white hover:underline"
          >
            +1 (240) 714-8853
          </a>
        </p>
        <p>
          <span className="text-muted text-sm block mb-1">Location</span>
          <span className="text-white">College Park, MD</span>
        </p>
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        <a
          href="mailto:lsharma3@umd.edu"
          className="inline-block px-6 py-3 border border-white/25 text-white rounded text-sm hover:bg-white/5 transition-colors"
        >
          Send Email
        </a>
      </div>
    </section>
  )
}
