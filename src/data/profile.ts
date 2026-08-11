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
  bio: 'A technically driven software engineering graduate with hands-on experience across full-stack development and cyber security, built through both academic study and independent project work. Proven ability to deliver complete technical builds, from a full-stack car sharing web application to a simulated SSH brute force investigation mapped to MITRE ATT&CK, demonstrating both a builder\'s instinct and an investigator\'s mindset. Works calmly and methodically under pressure, with a natural ability to dig into root causes rather than settle for quick fixes. Strong relationship builder, shown through leading communications as Secretary of my university\'s Ghana Society and collaborating effectively during an industry law internship. A patient, strategic thinker, both on and off the chessboard, who brings genuine curiosity and maturity to every piece of work he takes on.',
  availability: 'Open to technical and non technical roles',
};

export const stats = [
  { value: '2:1', label: 'Upper Class Honours' },
  { value: 'BSc', label: 'Software Engineering Graduate' },
  { value: '23', label: 'Years Old' },
  { value: 'Tech', label: 'Enthusiast' },
  { value: 'Data', label: 'Explorer' },
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
      'Built an isolated two-host lab environment (Ubuntu 26.04) target and attacker VMs (Virtual Machines) using Multipass to safely simulate a real-world SSH brute force attack without risking any third-party systems.',
      'Configured SSH authentication, logging (rsyslog), and a deliberately weak user account on the target host to create a realistic attack surface for testing.',
      'Executed a brute force attack using Hydra against a 5-entry password wordlist, successfully compromising the target account and observing the full attack lifecycle in real time.',
      'Mapped the attack to two MITRE ATT&CK techniques and authored a portable Sigma detection rule to demonstrate how the pattern would trigger an automated SIEM alert in a production environment.',
      'Documented and published the full investigation, including annotated terminal evidence, the incident report, and the Sigma rule to demonstrate hands-on Blue Team analysis skills.',
    ],
  },
  {
    company: 'London Tech Week',
    role: 'London Tech Insights Week',
    program: 'Industry Conference',
    period: 'June 2026',
    category: 'Professional Development',
    highlights: [
      'Immersed in cutting-edge insights across the full spectrum of technology at London Tech Week 2026, the UK\'s most influential tech festival, exploring key themes across AI transformation, Robotics innovation, and world-changing Software shaping the future of the industry.',
    ],
  },
  {
    company: 'CarShare',
    role: 'Full-Stack Web Application Developer',
    program: 'Carpool Concept — Final Year Project',
    period: 'July 2025',
    category: 'Full-Stack Development',
    highlights: [
      'Developed a car-sharing web application using React, Node.js, MySQL, and RESTful APIs to enable vehicle browsing, booking, and fleet management for users and administrators.',
      'Built reusable React components and integrated the OpenStreetMap API for location-based services.',
      'Integrated email notifications for booking confirmations and reminders using third-party libraries to enhance user engagement and communication.',
      'Established a missing gap within the Carpool Industry by enabling users the capability to renting luxurious vehicles at request around their location (UK).',
      'Crafted a membership tier system which users can purchase. Depending on which tier selected — the selection of discounts, higher luxurious vehicles, and insurance bonuses at their disposal.',
    ],
  },
  {
    company: 'IBM Smarter World',
    role: 'Cyber Security Fundamentals Workshop',
    program: 'Cyber Security Training',
    period: 'April 2025',
    category: 'Cyber Security',
    highlights: [
      'Completed IBM\'s Cyber Security Fundamentals Workshop, covering Malware types, Cryptography, and Threat Defences through 8 real-world case studies with industry professionals.',
      'Explored cryptographic methods, access, and secure API designs, reinforcing how cyber security integrates with backend development and systems architecture.',
    ],
  },
  {
    company: 'Frontend Simplified Bootcamp',
    role: 'Intern',
    program: 'By David Bragg',
    period: 'November 2023',
    category: 'Frontend Development',
    highlights: [
      'Collaborated with interns to revamp 3 case-study static web applications using HTML, CSS, JavaScript and React, introducing interactive elements such as animated efforts, and smooth transitions for clients.',
      'Led the implementation of Axios to facilitate API request execution, data retrieval, and display from a cloud server.',
      'Enhanced user experience across all projects via the implementation of skeleton loading states, pagination, and routing, leading to a significant 40% increase in page loading speed and a 25% decrease in bounce rate.',
      'Orchestrated the successful integration of Git version control and the GitHub interface, empowering the virtual team to collaborate seamlessly.',
      'Reduced code conflicts by 50% and facilitated faster feature delivery by 15%.',
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
    featured: false,
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
  'soc-brute-force-investigation': {
    featured: true,
    period: 'July 2026',
    description:
      'Isolated two-host lab simulating an SSH brute force attack, mapped to MITRE ATT&CK techniques with a portable Sigma detection rule — full Blue Team investigation with terminal evidence and incident report.',
    highlights: ['MITRE ATT&CK', 'Sigma', 'Hydra', 'rsyslog', 'Multipass'],
  },
  'Tiles-Guesser-Project-': {
    featured: false,
    description:
      'Interactive tile-guessing game demonstrating object-oriented design and Java fundamentals.',
    highlights: ['Java', 'OOP', 'Game Logic'],
  },
  'daniel-portfolio': {
    featured: false,
    description: 'This portfolio site — React, TypeScript, and Tailwind CSS.',
    highlights: ['React', 'TypeScript', 'Tailwind CSS'],
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
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
] as const;
