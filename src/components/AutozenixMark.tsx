export default function AutozenixMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <path d="M50 92 L50 65" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M50 65 L50 38" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <circle cx="50" cy="30" r="6" stroke="currentColor" strokeWidth="3" />
      <path d="M50 65 C 50 55, 25 60, 25 50" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <circle cx="25" cy="42" r="6" stroke="currentColor" strokeWidth="3" />
      <path d="M50 65 C 50 55, 75 60, 75 50" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <circle cx="75" cy="42" r="6" stroke="currentColor" strokeWidth="3" />
    </svg>
  )
}
