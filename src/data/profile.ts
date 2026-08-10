export const GITHUB_USERNAME = 'DanielUpTop';

export const profile = {
  name: 'Daniel Ahenkorah',
  title: 'Software Engineer',
  roles: ['Software Engineer', 'Full-Stack Developer', 'Cyber Security Enthusiast'],
  tagline:
    'Technically driven software engineering graduate with hands-on experience across full-stack development and cyber security — a builder and investigator in equal measure.',
  location: 'London, United Kingdom',
  email: 'dahenkorah.business@gmail.com',
  phone: '+44 7533 914114',
  github: 'https://github.com/DanielUpTop',
  bio: 'A technically driven software engineering graduate with hands-on experience across full-stack development and cyber security, built through both academic study and independent project work. Proven ability to deliver complete technical builds, from a full-stack car sharing web application to a simulated SSH brute force investigation mapped to MITRE ATT&CK, demonstrating both a builder\'s instinct and an investigator\'s mindset. Works calmly and methodically under pressure, with a natural ability to dig into root causes rather than settle for quick fixes. Strong relationship builder, shown through leading communications as Secretary of my university\'s Ghana Society and collaborating effectively during an industry law internship. A patient, strategic thinker, both on and off the chessboard, who brings genuine curiosity and maturity to every piece of work I take on.',
  availability: 'Open to opportunities',
};

export const stats = [
  { value: '2:1', label: 'BSc Software Engineering' },
  { value: '5+', label: 'Technical builds' },
  { value: 'Full-Stack', label: 'React · Node · MySQL' },
  { value: 'SOC', label: 'MITRE ATT&CK mapped' },
];

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
    period: '2014 – 2019',
    qualification: '7 GCSEs',
    grade: 'Including Maths, English, and Sciences',
  },
];

export const experience = [
  {
    company: 'Independent Project',
    role: 'SSH Brute Force Attack Simulation & SOC Investigation',
    program: 'Cyber Security',
    period: 'July 2026',
    category: 'Cyber Security',
    highlights: [
      'Built an isolated two-host lab environment (Ubuntu 26.04 target and attacker VMs) using Multipass.',
      'Configured SSH authentication, logging (rsyslog), and a weak user account for a realistic attack surface.',
      'Executed a brute force attack using Hydra against a 5-entry password wordlist.',
      'Mapped attack to two MITRE ATT&CK techniques and authored a portable Sigma detection rule for SIEM alerts.',
      'Published the full investigation with terminal evidence and incident reports.',
    ],
  },
  {
    company: 'London Tech Week',
    role: 'London Tech Insights Week',
    program: 'Industry Conference',
    period: 'June 2026',
    category: 'Professional Development',
    highlights: [
      'Explored themes across AI transformation, robotics innovation, and software trends at London Tech Week 2026.',
    ],
  },
  {
    company: 'CarShare',
    role: 'Full-Stack Web Application Developer',
    program: 'Carpool Concept — Final Year Project',
    period: 'July 2025',
    category: 'Full-Stack Development',
    highlights: [
      'Developed a full-stack app using React, Node.js, MySQL, and RESTful APIs for vehicle management.',
      'Integrated OpenStreetMap API for location services and third-party libraries for email notifications.',
      'Identified a market gap in the UK carpool industry for renting luxurious vehicles.',
      'Implemented a membership tier system with varying discounts and vehicle access.',
    ],
  },
  {
    company: 'IBM Smarter World',
    role: 'Cyber Security Fundamentals Workshop',
    program: 'Cyber Security Training',
    period: 'April 2025',
    category: 'Cyber Security',
    highlights: [
      'Covered malware types, cryptography, and threat defences via 8 case studies.',
      'Explored secure API designs and cryptographic methods.',
    ],
  },
  {
    company: 'Frontend Simplified Bootcamp',
    role: 'Intern',
    program: 'By David Bragg',
    period: 'November 2023',
    category: 'Frontend Development',
    highlights: [
      'Revamped 3 case-study static web apps using HTML, CSS, JS, and React with interactive elements.',
      'Implemented Axios for API requests and improved UX with skeleton loading, pagination, and routing.',
      'Achieved a 40% increase in page loading speed and a 25% decrease in bounce rate.',
      'Managed Git version control, reducing code conflicts by 50%.',
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
      'Eclipse',
      'PyCharm',
      'Postman',
      'MySQL Workbench',
      'MongoDB',
    ],
  },
  {
    category: 'Cloud & Platforms',
    items: ['AWS', 'Azure', 'Google Cloud Platform', 'Microsoft Office'],
  },
  {
    category: 'Soft Skills',
    items: [
      'Problem Solving',
      'Attention to Detail',
      'Teamwork',
      'Collaboration',
      'Critical Thinking',
      'Adaptability',
      'Communication',
      'Initiative',
      'Ethical Judgement',
    ],
  },
];

export const achievements = [
  {
    title: 'Leicester Ghana Society — Secretary',
    period: 'University tenure',
    description:
      'Responsible for maintaining records, coordinating meetings, and managing communications for 40 members and stakeholders.',
  },
];

export const extracurriculars = [
  {
    title: 'Chess Enthusiast',
    description:
      'Applies game theory and problem-solving skills to strategize and mitigate risk — on and off the board.',
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
  {
    featured?: boolean;
    highlights?: string[];
    description?: string;
    period?: string;
    caseStudy?: boolean;
    hideFromGrid?: boolean;
  }
> = {
  'car-sharing-web-app': {
    featured: true,
    period: 'July 2025',
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
