import { site } from '@/data/site'

export default function Hero() {
  return (
    <section id="about" className="max-w-[36rem]">
      <p className="text-[15px] leading-7 text-muted">{site.bio}</p>
      <div className="flex flex-wrap gap-4 mt-5 text-[13px]">
        <a href={site.resume} download className="text-muted hover:text-fg underline-offset-4 hover:underline">
          resume
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-fg underline-offset-4 hover:underline"
        >
          github
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-fg underline-offset-4 hover:underline"
        >
          linkedin
        </a>
        <a
          href={`mailto:${site.email}`}
          className="text-muted hover:text-fg underline-offset-4 hover:underline"
        >
          email
        </a>
      </div>
    </section>
  )
}
