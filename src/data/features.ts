export interface SocStep {
  id: string;
  title: string;
  summary: string;
  mitre?: { id: string; name: string };
  logs?: string[];
  outcome: string;
}

export const socInvestigationSteps: SocStep[] = [
  {
    id: 'lab',
    title: 'Isolated lab environment',
    summary:
      'Built a two-host Ubuntu 26.04 lab with Multipass — target and attacker VMs fully isolated from production systems.',
    logs: [
      '$ multipass launch --name target 24.04',
      '$ multipass launch --name attacker 24.04',
      '✓ Network segmented · no external exposure',
    ],
    outcome:
      'Safe sandbox for simulating real SSH brute-force behaviour without risking third-party infrastructure.',
  },
  {
    id: 'surface',
    title: 'Attack surface configuration',
    summary:
      'Configured SSH authentication, rsyslog forwarding, and a deliberately weak test account to create a realistic target.',
    logs: [
      'target$ sudo systemctl enable ssh',
      'target$ echo "auth,authpriv.* /var/log/auth.log" >> /etc/rsyslog.d/ssh.conf',
      'target$ useradd -m testuser && echo "testuser:password123" | chpasswd',
    ],
    outcome:
      'Deliberate weakness for controlled testing — not a production misconfiguration.',
  },
  {
    id: 'attack',
    title: 'Brute force execution',
    summary:
      'Ran Hydra against a 5-entry wordlist and observed the full compromise lifecycle in real time via auth logs.',
    mitre: { id: 'T1110.001', name: 'Brute Force: Password Guessing' },
    logs: [
      'attacker$ hydra -l testuser -P wordlist.txt ssh://10.0.0.2',
      '[22][ssh] host: 10.0.0.2 login: testuser password: password123',
      'target$ tail -f /var/log/auth.log',
      'Failed password for testuser from 10.0.0.3 port 45212 ssh2',
      'Failed password for testuser from 10.0.0.3 port 45212 ssh2',
      'Accepted password for testuser from 10.0.0.3 port 45212 ssh2',
    ],
    outcome:
      'Successful compromise after repeated failures — classic brute-force pattern visible in sequential log entries.',
  },
  {
    id: 'mapping',
    title: 'MITRE ATT&CK mapping',
    summary:
      'Mapped observed behaviour to T1110.001 (Password Guessing) and T1078 (Valid Accounts) for post-compromise access.',
    mitre: { id: 'T1078', name: 'Valid Accounts' },
    logs: [
      'T1110.001 → Repeated failed SSH auth followed by success',
      'T1078      → Attacker session using compromised valid credentials',
    ],
    outcome:
      'Structured threat framing transforms raw logs into actionable intelligence for a SOC analyst.',
  },
  {
    id: 'detection',
    title: 'Sigma rule & incident report',
    summary:
      'Authored a portable Sigma detection rule and documented the full investigation with annotated terminal evidence.',
    logs: [
      'title: SSH Brute Force Success After Failures',
      'logsource: product: linux',
      'detection:',
      '  selection:',
      '    message|contains: "Failed password"',
      '  condition: selection | count() by src_ip > 5',
    ],
    outcome:
      'Demonstrates end-to-end Blue Team workflow: detect → investigate → document → automate future detection.',
  },
];

export interface CaseStudyPhase {
  id: string;
  label: string;
  title: string;
  points: string[];
  metric?: { value: string; label: string };
}

export const carShareCaseStudy = {
  title: 'CarShare',
  subtitle: 'Final-year project · React, Node.js, MySQL',
  phases: [
    {
      id: 'problem',
      label: 'Problem',
      title: 'A gap in the carpool market',
      points: [
        'Existing carpool platforms focused on standard daily commutes — no option for on-demand luxury vehicle rental by location.',
        'Fleet managers lacked a unified dashboard for bookings, vehicle availability, and tier-based pricing.',
        'Users needed location-aware browsing without relying on proprietary map APIs.',
      ],
    },
    {
      id: 'decision',
      label: 'Decision',
      title: 'Architecture & product choices',
      points: [
        'React component library with reusable booking cards and admin fleet views — maintainable for a solo final-year build.',
        'OpenStreetMap over Google Maps — zero API cost, sufficient for UK location services at university scale.',
        'Three-tier membership system (Standard, Premium, Elite) unlocking discounts, vehicle classes, and insurance bonuses.',
        'Node.js REST API with MySQL for relational booking data — familiar stack, fast iteration.',
      ],
    },
    {
      id: 'outcome',
      label: 'Outcome',
      title: 'Delivered capabilities',
      points: [
        'Full vehicle browse → book → confirm flow with email notifications for bookings and reminders.',
        'Admin fleet management with tier-gated vehicle access.',
        'Location-based luxury vehicle discovery — a differentiated feature absent from mainstream carpool apps.',
      ],
      metric: { value: '5', label: 'core user flows shipped end-to-end' },
    },
  ] satisfies CaseStudyPhase[],
};

export interface CapabilityLink {
  skill: string;
  category: string;
  work: { title: string; type: 'project' | 'experience'; detail: string }[];
}

export const capabilityLinks: CapabilityLink[] = [
  {
    skill: 'React',
    category: 'Languages',
    work: [
      { title: 'CarShare', type: 'project', detail: 'Reusable components, booking UI, admin dashboard' },
      { title: 'Frontend Simplified Bootcamp', type: 'experience', detail: 'Revamped 3 apps with routing & pagination' },
    ],
  },
  {
    skill: 'Node.js',
    category: 'Frameworks & Tools',
    work: [
      { title: 'CarShare', type: 'project', detail: 'RESTful API layer for bookings and fleet management' },
    ],
  },
  {
    skill: 'Python',
    category: 'Languages',
    work: [
      { title: 'SSH Brute Force Investigation', type: 'project', detail: 'Log analysis scripts and automation' },
    ],
  },
  {
    skill: 'SQL',
    category: 'Languages',
    work: [
      { title: 'CarShare', type: 'project', detail: 'MySQL schema for users, vehicles, bookings, tiers' },
    ],
  },
  {
    skill: 'Docker',
    category: 'Frameworks & Tools',
    work: [
      { title: 'SSH Brute Force Investigation', type: 'project', detail: 'Containerised lab environments via Multipass VMs' },
    ],
  },
  {
    skill: 'TypeScript',
    category: 'Languages',
    work: [
      { title: 'This portfolio', type: 'project', detail: 'Component architecture, hooks, GitHub API integration' },
    ],
  },
  {
    skill: 'Sigma / MITRE ATT&CK',
    category: 'Security',
    work: [
      { title: 'SSH Brute Force Investigation', type: 'project', detail: 'T1110.001 & T1078 mapping, Sigma detection rule' },
      { title: 'IBM Cyber Security Workshop', type: 'experience', detail: 'Threat defences & cryptographic methods' },
    ],
  },
  {
    skill: 'Git & GitHub',
    category: 'Frameworks & Tools',
    work: [
      { title: 'Frontend Simplified Bootcamp', type: 'experience', detail: 'Team workflow — 50% fewer merge conflicts' },
    ],
  },
  {
    skill: 'Problem Solving',
    category: 'Soft Skills',
    work: [
      { title: 'SSH Brute Force Investigation', type: 'project', detail: 'Root-cause analysis from raw auth logs' },
      { title: 'Chess', type: 'experience', detail: 'Strategic risk assessment and long-term planning' },
    ],
  },
  {
    skill: 'Communication',
    category: 'Soft Skills',
    work: [
      { title: 'Ghana Society Secretary', type: 'experience', detail: 'Records, meetings, comms for 40+ members' },
      { title: 'SSH Brute Force Investigation', type: 'project', detail: 'Published incident report with evidence' },
    ],
  },
];

export interface StrategicMove {
  id: string;
  context: string;
  optionA: { label: string; tradeoff: string };
  optionB: { label: string; tradeoff: string };
  chosen: 'A' | 'B';
  reasoning: string;
}

export const strategicMoves: StrategicMove[] = [
  {
    id: 'lab-isolation',
    context: 'SSH brute force investigation — where to run the attack simulation?',
    optionA: {
      label: 'Isolated Multipass VMs',
      tradeoff: 'More setup time, but zero risk to external systems',
    },
    optionB: {
      label: 'Cloud VM on a public provider',
      tradeoff: 'Faster provisioning, but attack traffic hits real infrastructure',
    },
    chosen: 'A',
    reasoning:
      'Chose fully isolated local VMs. Ethical security work starts with containment — I could simulate the full attack lifecycle without touching third-party systems or generating suspicious cloud traffic.',
  },
  {
    id: 'membership-tiers',
    context: 'CarShare — how to differentiate from standard carpool apps?',
    optionA: {
      label: 'Flat pricing for all users',
      tradeoff: 'Simpler to build, but no market differentiation',
    },
    optionB: {
      label: 'Tiered membership with gated vehicle access',
      tradeoff: 'More complex backend logic, but creates a genuine product moat',
    },
    chosen: 'B',
    reasoning:
      'Built a three-tier membership system unlocking discounts, luxury vehicles, and insurance bonuses. It addressed a real gap — on-demand premium vehicle access — rather than cloning existing commute-focused platforms.',
  },
  {
    id: 'detection-approach',
    context: 'Post-attack — how to demonstrate detection capability?',
    optionA: {
      label: 'Manual log review only',
      tradeoff: 'Shows analysis skill, but not scalable in production',
    },
    optionB: {
      label: 'Portable Sigma rule for SIEM automation',
      tradeoff: 'Requires learning Sigma syntax, but proves production-ready thinking',
    },
    chosen: 'B',
    reasoning:
      'Authored a Sigma rule that would auto-trigger on repeated failed SSH attempts followed by success. A SOC analyst who only reads logs stops there — one who writes detection rules prevents the next incident.',
  },
];

export interface LogEntry {
  id: string;
  timestamp: string;
  message: string;
  suspicious: boolean;
}

export const logTriageScenario = {
  title: 'SSH Auth Log Triage',
  description:
    'Sample auth.log entries from the investigation lab. Identify the attack pattern and match it to the correct MITRE technique.',
  logs: [
    { id: '1', timestamp: '14:02:01', message: 'sshd[2103]: Accepted publickey for admin from 10.0.0.5 port 44102', suspicious: false },
    { id: '2', timestamp: '14:05:12', message: 'sshd[2104]: Failed password for testuser from 10.0.0.3 port 45210 ssh2', suspicious: true },
    { id: '3', timestamp: '14:05:14', message: 'sshd[2104]: Failed password for testuser from 10.0.0.3 port 45210 ssh2', suspicious: true },
    { id: '4', timestamp: '14:05:16', message: 'sshd[2104]: Failed password for testuser from 10.0.0.3 port 45210 ssh2', suspicious: true },
    { id: '5', timestamp: '14:05:18', message: 'sshd[2104]: Failed password for testuser from 10.0.0.3 port 45210 ssh2', suspicious: true },
    { id: '6', timestamp: '14:05:20', message: 'sshd[2104]: Failed password for testuser from 10.0.0.3 port 45210 ssh2', suspicious: true },
    { id: '7', timestamp: '14:05:22', message: 'sshd[2104]: Accepted password for testuser from 10.0.0.3 port 45210 ssh2', suspicious: true },
    { id: '8', timestamp: '14:06:01', message: 'sshd[2105]: session opened for user testuser by (uid=0)', suspicious: false },
  ] as LogEntry[],
  techniques: [
    { id: 'T1110.001', name: 'Brute Force: Password Guessing', correct: true },
    { id: 'T1078', name: 'Valid Accounts', correct: false },
    { id: 'T1190', name: 'Exploit Public-Facing Application', correct: false },
  ],
  sigmaRule: `title: SSH Brute Force Success After Failures
status: experimental
logsource:
  product: linux
  service: sshd
detection:
  selection:
    message|contains: 'Failed password'
  condition: selection | count() by src_ip > 5
level: high
tags:
  - attack.credential_access
  - attack.t1110.001`,
  explanation:
    'Five consecutive failed password attempts from 10.0.0.3 followed by a successful login is the classic brute-force signature mapped to T1110.001. T1078 applies post-compromise, but the primary attack vector here is credential guessing.',
};
