export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  visualDirection: string;
  mockType: 'timetable' | 'palmpilot' | 'horror-game' | 'ai-assistant' | 'financial-engine' | 'volt-relay';
}

export interface JourneyMilestone {
  id: string;
  yearOrPeriod: string;
  title: string;
  organization: string;
  roleOrDegree?: string;
  description: string;
  tag: string;
  isCurrent?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'learning' | 'competition' | 'hackathon';
  status: string;
  organization?: string;
  team?: string;
  date?: string;
  highlight?: boolean;
  description?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  fullName: "Tanmayi K T",
  firstName: "TANMAYI",
  lastName: "K T",
  role: "Student Developer | AI & Software Enthusiast",
  roleShort: "Student Developer",
  college: "B. N. M. Institute of Technology (BNMIT), Bengaluru",
  collegeShort: "BNMIT",
  degree: "B.E. in Information Science and Engineering",
  academicLevel: "Third semester",
  graduationYear: 2029,
  tagline: "Turning “what if?” into “what’s next?”",
  about:
    "I'm a tech enthusiast with a curious mind, a creative streak, and a habit of turning random ‘what if?’ ideas into actual projects. 🚀\n\nFrom experimenting with AI and building intelligent systems to creating interactive experiences, I love exploring what's possible with code. I'm all about learning by building, breaking things, figuring them out, and coming back with something better.\n\nCurrently studying Information Science and Engineering at BNMIT, I'm on a journey to build tech that's not just cool, but genuinely useful. Still learning, still experimenting, and definitely not done building. ✨",
  heroDescription:
    "Exploring AI, building interactive experiences, and turning ambitious ideas into real-world projects.",
  email: "tanmayikt98@gmail.com",
  github: "https://github.com/tanmayikt98-coder",
  linkedin: "https://www.linkedin.com/in/tanmayi-kt-665871385",
  resumeAvailable: false,
  copyrightYear: new Date().getFullYear(),
};

export const ABOUT_THEMES = [
  {
    number: "01",
    title: "IMAGINE",
    description:
      "Explore unconventional ideas, question possibilities, and discover creative approaches to real-world challenges.",
    accent: "sage",
  },
  {
    number: "02",
    title: "ENGINEER",
    description:
      "Transform concepts into functional software, intelligent systems, and interactive digital experiences.",
    accent: "charcoal",
  },
  {
    number: "03",
    title: "EVOLVE",
    description:
      "Learn through experimentation, overcome technical challenges, and refine ideas.",
    accent: "sage",
  },
];

export const ALL_PROJECTS: Project[] = [
  {
    id: "smart-timetable-optimization",
    number: "01",
    title: "Smart Timetable Optimization Engine",
    category: "OPTIMIZATION SYSTEMS",
    description:
      "An intelligent academic scheduling project that works with subjects, teachers, classrooms, student groups, availability, and scheduling constraints to create better timetable arrangements.",
    technologies: ["JavaScript", "Java", "C++", "HTML", "CSS", "MySQL", "JDBC"],
    githubUrl: "https://github.com/tanmayikt98-coder/Smart-Timetable-Optimization",
    visualDirection:
      "A clean weekly timetable with subject blocks, room assignments, teacher availability, and scheduling-constraint visualizations.",
    mockType: "timetable",
  },
  {
    id: "gestureplay-ai",
    number: "02",
    title: "PalmPilot AI / GesturePlay AI",
    category: "COMPUTER VISION & GAMING",
    description:
      "A gesture-based gaming project exploring how hand gestures captured through a webcam can be used to interact with games without relying on traditional keyboard controls.",
    technologies: ["Python", "OpenCV", "MediaPipe"],
    githubUrl: "https://github.com/tanmayikt98-coder/GesturePlay-AI-",
    visualDirection:
      "A gesture-recognition concept with a webcam-inspired interface and interactive gaming visuals.",
    mockType: "palmpilot",
  },
  {
    id: "3d-stealth-horror-game",
    number: "03",
    title: "3D Stealth Horror Game",
    category: "3D GAME DEV",
    description:
      "A 3D stealth-horror survival game where players explore an environment, avoid enemies, collect items, solve puzzles, and attempt to escape.",
    technologies: ["TypeScript", "3D Graphics", "Audio Ambience", "State Logic"],
    githubUrl: "https://github.com/tanmayikt98-coder/3d-stealth-horror-game-1-",
    visualDirection:
      "A cinematic environment with atmospheric lighting and suspenseful stealth elements.",
    mockType: "horror-game",
  },
  {
    id: "ai-virtual-assistant",
    number: "04",
    title: "AI Virtual Assistant",
    category: "AI & AUTOMATION",
    description:
      "An AI assistant project exploring intelligent assistance and automation.",
    technologies: ["Python", "AI Development Tools", "Automation Tools", "UI Logic"],
    githubUrl: "https://github.com/tanmayikt98-coder/VIRTUAL-AI-BOT",
    visualDirection:
      "A refined assistant interface with conversational elements and automation-inspired visual details.",
    mockType: "ai-assistant",
  },
  {
    id: "financial-decision-engine",
    number: "05",
    title: "AI Business and Financial Decision Optimization Engine",
    category: "DECISION OPTIMIZATION",
    description:
      "A project focused on business feasibility, financial decisions, investment scenarios, and what-if analysis.",
    technologies: ["TypeScript", "Decision Logic", "Risk Modeling", "Scenario Analysis"],
    githubUrl: "https://github.com/tanmayikt98-coder/artifacts",
    visualDirection:
      "A sophisticated decision interface with scenario comparisons and business analytics-inspired visuals.",
    mockType: "financial-engine",
  },
  {
    id: "voltrealy-data-analysis",
    number: "06",
    title: "VoltRelay Data Analysis",
    category: "DATA ANALYSIS",
    description:
      "A Jupyter Notebook-based data analysis project exploring electrical signals, telemetry waveforms, and diagnostic insights.",
    technologies: ["Jupyter Notebook", "Python", "Data Exploration", "Diagnostics"],
    githubUrl: "https://github.com/tanmayikt98-coder/VoltRelay-Data-Analysis",
    visualDirection:
      "An elegant notebook-inspired analytical presentation with charts and data exploration visuals.",
    mockType: "volt-relay",
  },
];

export const JOURNEY_TIMELINE: JourneyMilestone[] = [
  {
    id: "academic-degree",
    yearOrPeriod: "CURRENT · 2029 (EXPECTED)",
    title: "B.E. IN INFORMATION SCIENCE AND ENGINEERING",
    organization: "B. N. M. Institute of Technology (BNMIT), Bengaluru",
    roleOrDegree: "Third Semester · Student Developer",
    description:
      "Undergraduate engineering studies in Information Science, developing solid foundations in computational logic, algorithms, systems design, and software engineering.",
    tag: "ACADEMICS",
    isCurrent: true,
  },
  {
    id: "evox-runnerup",
    yearOrPeriod: "COMPETITION",
    title: "RUNNER-UP — EVOX 1.0",
    organization: "Team Technova · Organized by DETOX · Unstop",
    roleOrDegree: "Podium Recognition",
    description:
      "Recognized as Runner-Up as part of Team Technova in the EVOX 1.0 competition organized by DETOX, with submission hosted through Unstop.",
    tag: "RECOGNITION",
  },
  {
    id: "analytics-hackathon",
    yearOrPeriod: "HACKATHON",
    title: "DATA ANALYTICS HACKATHON PARTICIPANT",
    organization: "Gradient Learnings",
    roleOrDegree: "Participation Milestone",
    description:
      "Successfully participated in the Data Analytics Hackathon organized by Gradient Learnings, tackling analytical problems and data exploration workflows.",
    tag: "PARTICIPATION",
  },
  {
    id: "project-milestone",
    yearOrPeriod: "BUILDING MILESTONE",
    title: "PRACTICAL SOFTWARE & AI EXPERIMENTATION",
    organization: "Independent Project Engineering",
    roleOrDegree: "Active Builder",
    description:
      "Engineered 6 distinct technical projects spanning academic timetable optimization, gesture-based AI computer vision, 3D stealth games, virtual assistants, and data analysis.",
    tag: "ENGINEERING",
  },
];

export const GENERAL_SKILLS: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Foundational languages used for algorithms, system programming, and application logic.",
    skills: ["C", "Java", "Python", "JavaScript"],
  },
  {
    title: "Web Development",
    description: "Core technologies used to build responsive, accessible, and structured web interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
];

export const PROJECT_TECHNOLOGIES: SkillCategory = {
  title: "Tools & Applied Technologies",
  description: "Specialized frameworks, databases, libraries, and environments applied across completed projects.",
  skills: [
    "MySQL",
    "JDBC",
    "OpenCV",
    "MediaPipe",
    "Jupyter Notebook",
    "GitHub",
    "AI Development Tools",
    "Automation Tools",
  ],
};

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "evox",
    title: "Runner-Up — EVOX 1.0",
    category: "competition",
    status: "Runner-Up",
    organization: "Organized by DETOX (Submission via Unstop)",
    team: "Team Technova",
    highlight: true,
    description:
      "Recognized as a runner-up as part of Team Technova in EVOX 1.0, an innovation and engineering competition organized by DETOX with project submission through Unstop.",
  },
  {
    id: "hackathon",
    title: "Data Analytics Hackathon Participant",
    category: "hackathon",
    status: "Participation Milestone",
    organization: "Gradient Learnings",
    description:
      "Successfully participated in the Data Analytics Hackathon organized by Gradient Learnings, exploring real-world data analysis techniques and analytical pipelines.",
  },
  {
    id: "learning-html",
    title: "HTML5 — The Language",
    category: "learning",
    status: "Completed",
    date: "September 14, 2026",
    description:
      "Completed comprehensive study in semantic HTML5 document architecture, accessibility standards, and web fundamentals.",
  },
  {
    id: "learning-css",
    title: "CSS3",
    category: "learning",
    status: "Completed",
    date: "September 14, 2026",
    description:
      "Completed comprehensive study in CSS3 layout systems, responsive grid/flexbox architecture, transitions, and visual styling.",
  },
  {
    id: "learning-js",
    title: "JavaScript",
    category: "learning",
    status: "Completed",
    date: "September 14, 2026",
    description:
      "Completed comprehensive foundational learning in modern JavaScript syntax, DOM manipulation, state handling, and asynchronous programming.",
  },
];

export const CURRENTLY_EXPLORING = [
  {
    title: "Intelligent Systems & Neural Architectures",
    focus: "Applied AI models, conversational agents, and multimodal reasoning pipelines.",
  },
  {
    title: "Computer Vision & Interactive Environments",
    focus: "Real-time gesture detection, spatial tracking, and immersive interactive computing.",
  },
  {
    title: "Constraint Optimization & Algorithmic Heuristics",
    focus: "Graph scheduling, automated conflict resolution, and computational efficiency.",
  },
];

export const NAV_ITEMS = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "about", label: "About", href: "#about" },
  { id: "work", label: "Projects", href: "#work" },
  { id: "journey", label: "Journey", href: "#journey" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "achievements", label: "Achievements", href: "#achievements" },
  { id: "contact", label: "Contact", href: "#contact" },
];
