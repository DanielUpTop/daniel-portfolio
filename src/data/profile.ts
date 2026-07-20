export const GITHUB_USERNAME = 'DanielUpTop';

export const profile = {
  name: 'Daniel Ahenkorah',
  title: 'Software Engineer',
  tagline:
    'BSc Software Engineering graduate building full-stack applications with a focus on clean code, accessibility, and real-world impact.',
  location: 'London, United Kingdom',
  email: 'dahenkorah.business@gmail.com',
  phone: '+44 7533 914114',
  github: 'https://github.com/DanielUpTop',
  bio: 'University of Leicester Software Engineering graduate (2:1) with hands-on experience across full-stack development, risk management, and cyber security. From building a car-sharing platform with React and Node.js to interning at American Express on compliance controls, I bring both technical depth and professional rigour — and I am actively seeking software engineering roles for immediate start.',
  availability: 'Open to opportunities',
};

export const education = [
  {
    institution: 'University of Leicester',
    period: '2022 – 2025',
    qualification: 'BSc Hons Software Engineering',
    grade: 'Upper Second Class (2:1)',
  },
  {
    institution: 'Harris Academy South Norwood',
    period: '2020 – 2022',
    qualification: 'Cambridge Technicals Diploma Level IT',
    grade: 'Distinction*, Distinction* (equivalent to A*, A*)',
    extra: 'A-Level Business Studies: Distinction (equivalent to A)',
  },
  {
    institution: 'Harris Academy Professional Skills & Aspire',
    period: '2014 – 2020',
    qualification: '7 GCSEs',
    grade: 'Including Maths, English Literature & English Language',
  },
];

export const experience = [
  {
    company: 'American Express',
    role: 'ICS Operations Intern',
    program: 'Deep Dive in ICS Operations Internship',
    period: 'January 2025 – February 2025',
    highlights: [
      'Collaborated on risk management controls for international markets.',
      'Partnered with compliance and legal teams, achieving a 65% improvement in compliance for marketing and product delivery.',
      'Managed 4 projects involving anti-money laundering strategies, third-party risk assessments, and operational risk documentation.',
    ],
  },
  {
    company: 'Carpmeals & Ransford LLP',
    role: 'C&R Technology Intern',
    program: 'Black Heritage Insight Programme',
    period: 'September 2024 – November 2024',
    highlights: [
      'Analysed 6 patents to understand patent law in technology and engineering.',
      'Designed a unique mouse trap as part of a collaborative problem-solving project.',
    ],
  },
  {
    company: 'IBM Smarter World',
    role: 'Cyber Security Workshop',
    program: 'Cyber Security Fundamentals',
    period: 'April 2025',
    highlights: [
      'Completed a workshop covering malware types, cryptography, and threat defence through 8 real-world case studies.',
      'Explored cryptographic methods, access control, and secure API design.',
    ],
  },
];

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'Bash', 'HTML', 'CSS', 'C'],
  },
  {
    category: 'Frameworks & Tools',
    items: [
      'React',
      'Node.js',
      'Docker',
      'Kubernetes',
      'Git & GitHub',
      'GitLab',
      'VS Code',
      'IntelliJ IDEA',
      'Postman',
    ],
  },
  {
    category: 'Cloud & Databases',
    items: ['AWS', 'Azure', 'Google Cloud', 'MySQL', 'MongoDB', 'MySQL Workbench'],
  },
  {
    category: 'Other',
    items: ['Microsoft Office', 'REST APIs', 'Accessibility (WCAG)', 'Agile / Scrum'],
  },
];

export const achievements = [
  {
    title: 'Ghana Society — Secretary',
    period: 'September 2023 – July 2024',
    description:
      'Maintained records, coordinated meetings, and managed communications for the university society.',
  },
];

export const extracurriculars = [
  {
    title: 'Chess Enthusiast',
    description:
      'Applies game theory and strategic problem-solving through chess, focusing on prophylactic moves and long-term planning.',
  },
];

export const staticProjects = [
  {
    id: 'student-marks-system',
    name: 'Student Marks Management System',
    description:
      'OOP-based Java system to calculate final grades and track academic performance for 42+ students, using inheritance, abstraction, and method overriding.',
    html_url: null,
    language: 'Java',
    featured: true,
    highlights: ['Java', 'OOP', 'Inheritance', 'Grade Calculation'],
    period: 'February 2023 – March 2023',
  },
];

export const projectHighlights: Record<
  string,
  { featured?: boolean; highlights?: string[]; description?: string; period?: string }
> = {
  'car-sharing-web-app': {
    featured: true,
    period: 'September 2024 – July 2025',
    description:
      'Full-stack car-sharing application for vehicle browsing, booking, and fleet management — built as a final-year university project with reusable React components, RESTful APIs, and email notifications.',
    highlights: ['React', 'Node.js', 'MySQL', 'REST APIs', 'OpenStreetMap'],
  },
  'Tiles-Guesser-Project-': {
    featured: true,
    description:
      'Interactive tile-guessing game demonstrating object-oriented design and Java fundamentals.',
    highlights: ['Java', 'OOP', 'Game Logic'],
  },
  danieluptop: {
    featured: false,
    description: 'Personal GitHub profile and development workspace.',
    highlights: ['GitHub'],
  },
};

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
] as const;
