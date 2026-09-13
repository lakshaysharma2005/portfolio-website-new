import { site } from '@/data/site'

export default function Contact() {
  return (
    <section id="contact" className="w-full">
      <p className="text-[13px] text-muted">
        wanna chat?{' '}
        <a href={`mailto:${site.email}`} className="text-fg hover:underline underline-offset-4">
          drop me a line.
        </a>
      </p>
    </section>
  )
}
