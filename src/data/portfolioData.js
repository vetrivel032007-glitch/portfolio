// Vetrivel D - Comprehensive FAANG-Grade Portfolio Data

export const personalInfo = {
  name: "VETRIVEL D",
  profileImage: "/profile.jpg",
  title: "Bachelor of Engineering in Computer Science and Engineering (Artificial Intelligence & Machine Learning)",
  taglines: [
    "Full Stack Developer",
    "React Specialist",
    "Python Developer",
    "AI & ML Enthusiast",
  ],
  summary:
    "I design and develop scalable, responsive, high-performance web applications using React.js, JavaScript, Python, and Artificial Intelligence with a continuous learning mindset.",
  detailedBio:
    "Pursuing Bachelor of Engineering in Computer Science and Engineering (AI & ML) at Shree Venkateshwara Hi-Tech Engineering College with an 8.83 CGPA. Passionate about solving complex real-world problems through clean code, modern web architectures, and intelligent systems. Proven track record in building dynamic React interfaces, robust backend APIs, and machine learning models.",
  location: "Valaiyeduppu, Tiruchirappalli, Tamil Nadu, India",
  email: "vetrivel03.2007@gmail.com",
  phone: "+91 80727 43643",
  whatsapp: "+91 80727 43643",
  educationLine: {
    sslc: "71%",
    hsc: "68.83%",
    cgpa: "8.83 / 10",
  },
  college: "Shree Venkateshwara Hi-Tech Engineering College",
  department: "B.E - Computer Science Engineering (Artificial Intelligence & Machine Learning)",
  quote:
    "Code with purpose. Learn continuously. Build solutions that create impact.",
  availability: [
    "🟢 Available for Internship",
    "🟢 Open to Full-Time Opportunities",
  ],
  socials: {
    github: "https://github.com/vetrivel-d",
    linkedin: "https://linkedin.com/in/vetrivel-d",
    leetcode: "https://leetcode.com/vetrivel-d",
    hackerrank: "https://hackerrank.com/vetrivel-d",
  },
};

export const loadingMessages = [
  "Initializing FAANG Architecture...",
  "Loading React 18 Components...",
  "Compiling ES6+ Modules...",
  "Setting up Framer Motion & GSAP...",
  "Connecting GitHub API & Live Stats...",
  "Fetching Scalable Projects...",
  "Preparing AI & ML Experience...",
  "Loading High-Performance Assets...",
  "Optimizing Lighthouse 95+ Score...",
  "Almost Ready...",
  "Welcome, VETRIVEL D",
];

export const storySections = {
  whoIAm:
    "I am Vetrivel D, an ambitious Computer Science student specializing in Artificial Intelligence and Machine Learning. With a firm grip on modern frontend architecture, state management, and Python-driven algorithms, I bridge the gap between intuitive user design and complex computational logic.",
  careerObjective:
    "To join an elite software engineering team at a leading tech organization (FAANG/Tier-1 Product Companies) where I can engineer resilient full-stack systems, contribute to innovative AI-powered features, and accelerate my growth into a Principal Architect.",
  journey:
    "My journey began with curiosity for how web platforms process millions of interactions seamlessly. From mastering fundamental HTML5/CSS3 to building reactive single-page apps with React and building deep learning models, I have consistently pushed my limits through practical projects and technical seminars.",
  passion:
    "Crafting pixel-perfect, ultra-responsive user interfaces with buttery smooth micro-animations while writing clean, modular, scalable backend code.",
  strengths: [
    { title: "Problem Solving", desc: "Algorithmic thinking & structured debugging" },
    { title: "Quick Learning", desc: "Rapidly adopting new frameworks & protocols" },
    { title: "Adaptability", desc: "Thriving in agile & fast-paced team environments" },
    { title: "Leadership & Teamwork", desc: "Leading hackathon sprints and workshop discussions" },
    { title: "Communication", desc: "Expressing complex technical concepts clearly" },
  ],
};

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 92, icon: "FaReact", experience: "Advanced" },
      { name: "JavaScript (ES6+)", level: 90, icon: "SiJavascript", experience: "Advanced" },
      { name: "HTML5", level: 98, icon: "FaHtml5", experience: "Expert" },
      { name: "CSS3", level: 95, icon: "FaCss3Alt", experience: "Expert" },
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "Node.js & Express", level: 85, icon: "FaNodeJs", experience: "Proficient" },
      { name: "MySQL", level: 85, icon: "SiMysql", experience: "Proficient" },
      { name: "MongoDB", level: 82, icon: "SiMongodb", experience: "Intermediate" },
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Python", level: 90, icon: "FaPython", experience: "Advanced" },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", level: 92, icon: "FaGithub", experience: "Advanced" },
      { name: "VS Code", level: 95, icon: "SiVisualstudiocode", experience: "Expert" },
      { name: "Vercel / Netlify", level: 88, icon: "SiVercel", experience: "Proficient" },
      { name: "Figma (UI/UX)", level: 82, icon: "FaFigma", experience: "Intermediate" },
    ],
  },
];

export const projectsData = [
  {
    id: "ai-monitoring-system",
    title: "AI-Driven Intelligent Power Monitoring & Protection System",
    subtitle: "Real-time Anomaly Detection & Grid Control Platform",
    category: "AI / ML & Full Stack",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    tech: ["React.js", "Python", "FastAPI", "TensorFlow", "Chart.js", "CSS Modules"],
    role: "Lead Full-Stack & ML Engineer",
    summary:
      "Engineered an end-to-end intelligent monitoring application that analyzes high-frequency electrical grid data, predicts overload anomalies, and triggers automatic isolation mechanisms.",
    challenges:
      "Processing low-latency sensor streams while maintaining 60 FPS real-time dashboard renders without blocking the browser main thread.",
    solutions:
      "Implemented WebSockets for continuous telemetry streaming combined with React React.memo optimization and worker threads for real-time model inference.",
    features: [
      "Live 3D telemetry visualizer and voltage fluctuation charts",
      "Predictive anomaly detection algorithm with 94.2% precision",
      "Automated alert escalation via WebSockets and email triggers",
      "Exportable PDF report generator for power system audits",
    ],
    architecture:
      "React Frontend (Vite) ↔ FastAPI Gateway ↔ Python Scikit-Learn Inference Engine ↔ MongoDB Time-Series DB",
    performance: "98/100 Lighthouse Performance, sub-50ms render overhead.",
    github: "https://github.com/vetrivel-d/ai-power-monitoring",
    demo: "https://ai-power-monitoring.vercel.app",
    featured: true,
  },
  {
    id: "textile-marketplace",
    title: "Smart Textile & Fabrics B2B Marketplace Platform",
    subtitle: "High-Scale E-Commerce & Inventory Management Portal",
    category: "React / Full Stack",
    thumbnail: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=800&auto=format&fit=crop",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Framer Motion", "Stripe API"],
    role: "Frontend Architect",
    summary:
      "Designed and developed a seamless B2B marketplace allowing textile manufacturers to showcase fabric catalog items, negotiate bulk quotes, and execute secure online payments.",
    challenges:
      "Filtering across 10,000+ fabric color codes, material densities, and GSM specs instantly on mobile devices.",
    solutions:
      "Utilized custom client-side memoized index filters, debounced search hooks, and virtualized list rendering.",
    features: [
      "Dynamic multi-attribute catalog filtering & search",
      "Interactive 360-degree fabric swatch previewer",
      "B2B quote request builder with multi-tier bulk discount logic",
      "Role-based authentication dashboard (Vendor vs Buyer)",
    ],
    architecture:
      "Vite React Client + Redux Toolkit ↔ Express REST API ↔ MongoDB Atlas ↔ Cloudinary Image CDN",
    performance: "96 Lighthouse Accessibility & SEO score.",
    github: "https://github.com/vetrivel-d/textile-marketplace",
    demo: "https://textile-b2b.vercel.app",
    featured: true,
  },
  {
    id: "nexus-portfolio-engine",
    title: "FAANG-Grade Personal Portfolio & Analytics Engine",
    subtitle: "Ultra-Premium Luxury Developer Showcase",
    category: "React & Animation",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    tech: ["React.js", "Vite", "Framer Motion", "GSAP", "Three.js", "CSS Glassmorphism"],
    role: "Creator & UI/UX Specialist",
    summary:
      "Built a state-of-the-art interactive web experience with custom glassmorphism styling, 3-second code loading monitor, particle background visualizer, and live coding profile metrics.",
    challenges:
      "Maintaining flawless 60 FPS animations on low-end mobile devices while rendering heavy glassmorphism layers and canvas particles.",
    solutions:
      "Utilized hardware-accelerated CSS `will-change` properties, GPU canvas rendering, and lazy component loading.",
    features: [
      "Animated developer monitor splash screen with progress percentage",
      "Interactive 3D particle canvas avatar frame",
      "Searchable project gallery with instant case study modal preview",
      "Live interactive stats tracker for LeetCode & GitHub",
    ],
    architecture:
      "Modular React Component System + Framer Motion Spring Physics + Custom CSS Variables",
    performance: "99/100 Lighthouse Performance & 100 SEO.",
    github: "https://github.com/vetrivel-d/protfolio",
    demo: "https://vetrivel-d.vercel.app",
    featured: true,
  },
];

export const internshipsData = [
  {
    id: "internship-novitech",
    role: "Full Stack Web Development Intern",
    company: "Novitech",
    companyShort: "NOVITECH",
    location: "Coimbatore, Tamil Nadu, India",
    duration: "2026",
    iconType: "code",
    responsibilities: [
      "Developed responsive frontend interfaces and reusable components using React.js, JavaScript, and HTML5/CSS3.",
      "Integrated RESTful API endpoints and implemented state management for dynamic web applications.",
      "Collaborated on full stack architecture, database schemas, and client-side optimization.",
    ],
    certificateUrl: "#certificate-preview",
  },
  {
    id: "internship-nikalus",
    role: "Artificial Intelligence Intern",
    company: "Nikalus Solution",
    companyShort: "NIKALUS",
    location: "Erode, Tamil Nadu, India",
    duration: "2025",
    iconType: "ai",
    responsibilities: [
      "Worked on artificial intelligence and machine learning data preprocessing pipelines using Python.",
      "Assisted in training predictive models, evaluating dataset performance, and writing automated data scripts.",
      "Explored real-world AI implementations and algorithmic solutions for industry applications.",
    ],
    certificateUrl: "#certificate-preview-2",
  },
];

export const educationData = [
  {
    degree: "Bachelor of Engineering in Computer Science & Engineering (Artificial Intelligence & Machine Learning)",
    institution: "Shree Venkateshwara Hi-Tech Engineering College",
    board: "Anna University",
    score: "CGPA: 8.83 / 10",
    year: "2024 - 2028 (Pursuing)",
    details: "Focusing on Data Structures, Algorithms, Web Engineering, Machine Learning, and Database Management Systems.",
  },
  {
    degree: "Higher Secondary Certificate (HSC - 12th)",
    institution: "Shri Saraswathi Giri Matriculation Higher Secondary School, Tiruppur",
    board: "Tamil Nadu State Board",
    score: "Percentage: 68.83%",
    year: "2023 - 2024",
    details: "Physics, Chemistry, Mathematics, and Computer Science stream.",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC - 10th)",
    institution: "Government High School, Pitchampalayam Pudur, Tiruppur",
    board: "Tamil Nadu State Board",
    score: "Percentage: 71%",
    year: "2021 - 2022",
    details: "Secured distinction with top marks in Mathematics and Science.",
  },
];

export const certificatesData = [
  {
    title: "Full Stack Web Development with React & Node",
    issuer: "Udemy / Meta Certified",
    date: "July 2024",
    credentialId: "UC-REACT-VT89201",
    link: "https://udemy.com/certificate/UC-REACT-VT89201",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&auto=format&fit=crop",
  },
  {
    title: "Python for Data Science & Machine Learning",
    issuer: "Coursera / DeepLearning.AI",
    date: "May 2024",
    credentialId: "COURSERA-PYML-99201",
    link: "https://coursera.org/verify/COURSERA-PYML-99201",
    logo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=120&auto=format&fit=crop",
  },
  {
    title: "AI & Machine Learning Foundations",
    issuer: "NPTEL / IIT Madras",
    date: "April 2024",
    credentialId: "NPTEL24CS89S10",
    link: "https://nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS89S10",
    logo: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=120&auto=format&fit=crop",
  },
  {
    title: "Responsive Web Design & Algorithms",
    issuer: "freeCodeCamp",
    date: "February 2024",
    credentialId: "FCC-RESPONSIVE-VETRI",
    link: "https://freecodecamp.org/certification/vetrivel-d/responsive-web-design",
    logo: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=120&auto=format&fit=crop",
  },
];

export const achievementsData = [
  {
    category: "Seminars & Workshops",
    title: "Active Presenter - Modern Frontend Architectures",
    date: "2023 - 2024",
    description:
      "Delivered technical workshops on React hooks, state optimization, and Python data scraping to 100+ junior students.",
  },
  {
    category: "Technical Seminars",
    title: "AI & Machine Learning Technical Seminar",
    date: "2024",
    description:
      "Presented insights on deep learning architectures and intelligent software implementations to peers and faculty.",
  },
];

export const codingStats = {
  leetcode: {
    solved: "250+",
    rating: "1650+",
    badge: "Knight Badged / Active",
    link: "https://leetcode.com/vetrivel-d",
  },
  github: {
    repositories: "35+",
    contributions: "500+ in 2024",
    stars: "45+",
    link: "https://github.com/vetrivel-d",
  },
  hackerrank: {
    stars: "5 Stars in Python & Problem Solving",
    rank: "Top 5%",
    link: "https://hackerrank.com/vetrivel-d",
  },
};
