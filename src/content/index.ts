import type {
  Service,
  Testimonial,
  ProcessStep,
  Reason,
  Stat,
  ValueProp,
} from '@/types';

export const services: Service[] = [
  {
    id: 'strategy',
    tag: 'Strategy',
    title: 'Product & Growth Strategy',
    description:
      'Market positioning, roadmap planning, and go-to-market strategy that aligns your product with real revenue outcomes.',
    items: ['Competitive analysis', 'Product roadmap', 'GTM planning'],
  },
  {
    id: 'design',
    tag: 'Design',
    title: 'UI/UX & Brand Design',
    description:
      'Conversion-optimised interfaces and brand identity systems that build trust and make your product easy to love.',
    items: ['Product design', 'Brand identity', 'Design systems'],
  },
  {
    id: 'engineering',
    tag: 'Engineering',
    title: 'Web & App Development',
    description:
      'Full-stack engineering built on modern infrastructure — fast to ship, easy to scale, and low on maintenance debt.',
    items: ['Next.js / React', 'API & backend', 'Cloud infrastructure'],
  },
  {
    id: 'growth',
    tag: 'Growth',
    title: 'CRO & Digital Marketing',
    description:
      'Data-driven optimisation to convert more of your existing traffic into customers without inflating ad spend.',
    items: ['Landing page CRO', 'Analytics setup', 'Funnel optimisation'],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'traction',
    quote:
      'Danny & Co took our MVP from a Figma file to a live product in 6 weeks. The code quality was exceptional — we scaled to 10k users without touching the architecture.',
    name: 'Sarah Chen',
    role: 'Co-founder & CEO',
    company: 'Traction Labs',
  },
  {
    id: 'northlight',
    quote:
      "We've worked with four agencies before. Danny & Co is the only one that felt like a true partner. They pushed back when our ideas were wrong and delivered when it mattered.",
    name: 'Marcus Webb',
    role: 'Head of Product',
    company: 'Northlight',
  },
  {
    id: 'flux',
    quote:
      "Conversion rate on our landing page went from 1.2% to 4.8% after their redesign. That's not a rounding error — that's the company trajectory changing.",
    name: 'Amara Osei',
    role: 'Founder',
    company: 'Flux Finance',
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery call',
    desc: 'A 30-minute conversation to understand your goals, timeline, and budget. No pitch — just listening.',
  },
  {
    step: '02',
    title: 'Proposal & scope',
    desc: 'We send a detailed scope, timeline, and fixed-price proposal within 48 hours.',
  },
  {
    step: '03',
    title: 'Kickoff & sprint',
    desc: 'Weekly check-ins, async updates, and shared task board. You see progress daily, not just at the end.',
  },
  {
    step: '04',
    title: 'Launch & handoff',
    desc: 'We handle deployment, QA, and training. You get the keys — clean code, full docs, and 30 days of support.',
  },
];

export const reasons: Reason[] = [
  {
    id: '1',
    headline: 'No account managers in the way',
    body: 'You work directly with the people doing the work. Faster decisions, less miscommunication, better outcomes.',
  },
  {
    id: '2',
    headline: 'We move at startup speed',
    body: 'Our process is built for speed. Most projects go from kickoff to first deliverable in under two weeks.',
  },
  {
    id: '3',
    headline: 'We only take projects we believe in',
    body: "If we don't think we can add real value, we'll tell you. Our reputation depends on your results.",
  },
  {
    id: '4',
    headline: 'Transparent pricing, no surprises',
    body: "Fixed-scope or retainer — clear costs upfront. You always know what you're paying and why.",
  },
  {
    id: '5',
    headline: 'Built to hand off cleanly',
    body: "Every project includes documentation, source access, and a transition session so you're never dependent on us.",
  },
  {
    id: '6',
    headline: 'Post-launch support included',
    body: "30 days of complimentary support on every project. We don't disappear at the finish line.",
  },
];

export const stats: Stat[] = [
  { value: '50+', label: 'Projects shipped' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '4.8x', label: 'Average ROI' },
  { value: '<30d', label: 'Avg. time to launch' },
];

export const logos: string[] = [
  'Acme Corp',
  'Vercel',
  'Stripe',
  'Notion',
  'Linear',
  'Loom',
];

export const valueProps: ValueProp[] = [
  {
    icon: '⚡',
    title: 'Senior-only execution',
    desc: 'Every deliverable reviewed by founding partners.',
  },
  {
    icon: '🎯',
    title: 'Outcome-focused',
    desc: 'We measure success by your results, not hours logged.',
  },
  {
    icon: '🔒',
    title: 'Long-term partnership',
    desc: '60% of clients return within 6 months.',
  },
];
