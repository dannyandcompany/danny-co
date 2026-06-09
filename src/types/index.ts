export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  tag: string;
  title: string;
  description: string;
  items: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface Reason {
  id: string;
  headline: string;
  body: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ValueProp {
  icon: string;
  title: string;
  desc: string;
}
