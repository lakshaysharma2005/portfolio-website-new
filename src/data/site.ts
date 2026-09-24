export const site = {
  name: 'Lakshay Sharma',
  email: 'lsharma3@umd.edu',
  github: 'https://github.com/lakshaysharma2005',
  githubUser: 'lakshaysharma2005',
  linkedin: 'https://www.linkedin.com/in/lakshaysharma2005/',
  resume: '/Lakshay_Sharma_Resume.pdf',
  bio: 'cs senior at umd. gtm engineering intern at dreach (yc). i build full-stack products, internal tools, and ai workflows. less talk, more shipped work.',
}

export const projects = [
  {
    repo: 'sable-finance',
    title: 'sable-finance',
    blurb: 'personal finance tracker — plaid, accounts, and ai insights.',
  },
  {
    repo: 'claim-assist',
    title: 'claim-assist',
    blurb: 'wildfire insurance claims for applicants who need a simple path through paperwork.',
  },
  {
    repo: 'umd-meal-planner',
    title: 'umd-meal-planner',
    blurb: 'dining hall menus, macros, and an optimizer. streamlit + cli.',
  },
  {
    repo: 'safety-monitor',
    title: 'safety-monitor',
    blurb: 'realtime construction ppe and pose detection.',
  },
  {
    repo: 'photoshop-api-batch-cutout',
    title: 'photoshop-api-batch-cutout',
    blurb: 'batch background removal via adobe photoshop api and s3.',
  },
  {
    repo: 'barcode-scanner',
    title: 'barcode-scanner',
    blurb: 'small scanner utility.',
  },
]

export const experience = [
  {
    company: 'Dreach (YC P26)',
    role: 'GTM Engineering Intern',
    period: 'Sep 2026 – Current',
    line: 'AI platform that books sales conversations, with LinkedIn automation supporting 15+ calls a week.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
    logo: '/logos/dreach.png',
    fit: 'cover' as const,
  },
  {
    company: 'Resensys',
    role: 'Software Engineering Intern',
    period: 'May 2026 – Aug 2026',
    line: 'Automated bridge-sensor reports from 5 hours to 10 minutes, and a FastAPI app for sensors on 80+ bridges.',
    tech: ['Python', 'FastAPI', 'AWS'],
    logo: '/logos/resensys.png',
    fit: 'round' as const,
  },
  {
    company: 'AutoZenix AI',
    role: 'Co-Founder',
    period: 'Sep 2025 – Mar 2026',
    line: 'AI automation agency. $16k+ in revenue, voice agents, and CRM workflows for clients in the US, Canada, and UAE.',
    tech: ['n8n', 'Claude Code'],
    logo: 'autozenix',
    fit: 'cover' as const,
  },
  {
    company: 'JK Tyre & Industries Ltd.',
    role: 'Software Engineering Intern',
    period: 'June 2025 – Aug 2025',
    line: 'Route optimization that cut dealer-network planning from 4 hours to 45 minutes.',
    tech: ['Python', 'NetworkX', 'MySQL'],
    logo: '/logos/jk-tyre.png',
    fit: 'cover' as const,
  },
  {
    company: 'Terrapin Works',
    role: 'Software Engineer',
    period: 'Aug 2024 – Current',
    line: 'Led an 8-person team on Pinpoint, the makerspace booking and request platform.',
    tech: ['Flask', 'React', 'SQL'],
    logo: '/logos/terrapin-works.png',
    fit: 'cover' as const,
  },
  {
    company: 'Xficient Inc.',
    role: 'Software Engineering Intern',
    period: 'June 2024 – Aug 2024',
    line: 'LangChain chatbot over insurance PDFs, 92% answer accuracy on 50+ documents.',
    tech: ['Python', 'LangChain', 'Docker'],
    logo: '/logos/xficient.png',
    fit: 'cover' as const,
  },
]

export const skills = {
  Languages: 'Java, Python, C, C++, Rust, SQL, JavaScript, HTML/CSS, TypeScript, Swift',
  'Libraries/Frameworks':
    'TensorFlow, scikit-learn, pandas, Numpy, FastAPI, React, Next.js, Flask',
  'Tools/Platforms':
    'Git, GitHub Actions, Docker, AWS, PostgreSQL, Claude Code, Supabase, Grafana',
}

export const education = {
  school: 'University of Maryland',
  detail: 'B.S. Computer Science and Mathematics · Dec 2026',
  logo: '/logos/umd.png',
}
