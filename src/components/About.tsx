import Image from 'next/image'
import { education, skills } from '@/data/site'

export default function About() {
  return (
    <>
      <section className="w-full">
        <h2 className="text-[13px] text-muted mb-4">skills</h2>
        <dl className="space-y-1.5 text-[14px] leading-6 text-fg">
          {Object.entries(skills).map(([k, v]) => (
            <div key={k}>
              <dt className="inline font-semibold">{k}:</dt> <dd className="inline">{v}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="w-full">
        <h2 className="text-[13px] text-muted mb-4">education</h2>
        <div className="flex gap-3">
          <span className="relative h-5 w-5 shrink-0 overflow-hidden rounded bg-surface">
            <Image src={education.logo} alt="" fill sizes="20px" className="object-cover" />
          </span>
          <div>
            <p className="text-[14px] text-fg leading-5">{education.school}</p>
            <p className="text-[13px] text-muted mt-1">{education.detail}</p>
          </div>
        </div>
      </section>
    </>
  )
}
