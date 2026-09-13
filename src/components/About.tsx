import Image from 'next/image'
import { education, skills } from '@/data/site'

export default function About() {
  return (
    <>
      <section className="w-full">
        <h2 className="text-[13px] text-muted mb-4">skills</h2>
        <dl className="space-y-2 text-[13px]">
          {Object.entries(skills).map(([k, v]) => (
            <div key={k} className="flex gap-2">
              <dt className="text-fg shrink-0">{k}</dt>
              <dd className="text-muted">· {v}</dd>
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
