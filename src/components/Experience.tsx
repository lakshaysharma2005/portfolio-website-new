import Image from 'next/image'
import AutozenixMark from './AutozenixMark'
import { experience } from '@/data/site'

function JobLogo({
  logo,
  fit,
  company,
}: {
  logo: string
  fit: 'cover' | 'mark' | 'mark-light' | 'round'
  company: string
}) {
  if (logo === 'autozenix') {
    return (
      <span className="flex h-5 w-5 shrink-0 items-center justify-center text-fg">
        <AutozenixMark className="h-5 w-5" />
      </span>
    )
  }

  const box =
    fit === 'mark-light'
      ? 'bg-white p-[1px] rounded'
      : fit === 'mark'
        ? 'bg-black rounded'
        : fit === 'round'
          ? 'bg-[#e10600] rounded-full'
          : 'bg-surface rounded'

  const imgClass =
    fit === 'mark' || fit === 'mark-light'
      ? 'object-cover object-left'
      : 'object-cover'

  return (
    <span className={`relative h-5 w-5 shrink-0 overflow-hidden ${box}`}>
      <Image src={logo} alt="" fill sizes="20px" className={imgClass} />
      <span className="sr-only">{company} logo</span>
    </span>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="w-full">
      <h2 className="text-[13px] text-muted mb-5">experience</h2>
      <ul className="space-y-6">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="flex gap-3">
            {'logo' in job && job.logo ? (
              <JobLogo logo={job.logo} fit={job.fit} company={job.company} />
            ) : (
              <span className="h-5 w-5 shrink-0" aria-hidden />
            )}
            <div className="min-w-0">
              <p className="text-[14px] text-fg leading-5">
                {job.company}
                <span className="text-muted">
                  {' '}
                  · {job.role} · {job.period}
                </span>
              </p>
              <p className="text-[13px] text-muted leading-6 mt-1">{job.line}</p>
              {job.tech.length > 0 && (
                <ul className="flex flex-wrap gap-2 mt-2">
                  {job.tech.map((t) => (
                    <li
                      key={t}
                      className="text-[11px] text-muted border border-border rounded px-1.5 py-0.5"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
