import type {
  Article,
  Certification,
  Education,
  Project,
  Skill,
  SkillDomain,
} from './types';

// ============================================
// SLIDES DU CARROUSEL HERO
// ============================================
export const HERO_SLIDES = [
  { src: '/images/banner/image_cover.png', alt: 'Datacenter moderne' },
  { src: '/images/banner/image_4.png', alt: 'Code et développement' },
  { src: '/images/banner/image_3.png', alt: 'Dashboard et data' },
  { src: '/images/banner/cover.webp', alt: 'Infrastructure cloud' },
  { src: '/images/banner/Banniere_app_ma_sant_plus.png', alt: 'Application Mes Dépenses — capture 1' },
  { src: '/images/banner/Banniere complet app_mes_depenses.png', alt: 'Application Mes Dépenses — capture 2' },
];

// ============================================
// PHRASES DU TYPEWRITER
// ============================================
export const TYPEWRITER_PHRASES = [
  'Bienvenue dans mon univers tech',
  'Gana FAYE, découvrez mes projets',
  "Systèmes d'Information · Data · IA",
  'Sécurité SI · DevOps · Cloud',
];

// ============================================
// STATS CLÉS (HOME)
// ============================================
export const STATS = [
  {
    id: 'certs',
    value: '8+',
    label: 'Certificats validés',
    detail: 'Oracle · AWS · IBM · Meta',
    icon: 'workspace_premium',
    color: 'secondary' as const,
  },
  {
    id: 'projects',
    value: '5+',
    label: 'Projets réalisés',
    detail: 'Web · Mobile · DevOps · IA',
    icon: 'terminal',
    color: 'primary' as const,
  },
  {
    id: 'labs',
    value: '2',
    label: 'Laboratoires actifs',
    detail: 'Data Science · DevOps',
    icon: 'science',
    color: 'tertiary' as const,
  },
];

// ============================================
// ÉDUCATION (TIMELINE PARCOURS)
// ============================================
export const EDUCATIONS: Education[] = [
  {
    id: '1',
    degree: "Master 2 Systèmes d'Information",
    school: 'Université Alioune Diop, Bambey',
    location: 'Bambey, Sénégal',
    startYear: 2026,
    endYear: 2027,
    current: true,
    description:
      "Spécialisation en Sécurité des SI (audit & pentest), sécurité logicielle, gestion de projet, ainsi qu'en IA avancée (NLP, Deep Learning), Big Data et Business Intelligence.",
    tags: ['Sécurité SI', 'Audit & Pentest', 'NLP', 'Deep Learning', 'Big Data'],
    order: 1,
  },
  {
    id: '2',
    degree: "Master 1 Systèmes d'Information",
    school: 'Université Alioune Diop, Bambey',
    location: 'Bambey, Sénégal',
    startYear: 2025,
    endYear: 2026,
    current: false,
    description:
      'Formation avancée en Architecture Cloud, Data Science, Machine Learning, Administration SI, Sécurité SI et DevOps.',
    tags: ['Architecture Cloud', 'Data Science', 'ML', 'DevOps'],
    order: 2,
  },
  {
    id: '3',
    degree: "Licence Développement et Administration d'Application",
    school: 'Université Alioune Diop, Bambey',
    location: 'Bambey, Sénégal',
    startYear: 2022,
    endYear: 2024,
    current: false,
    mention: 'Mention Très Bien',
    description:
      "Fondamentaux du développement logiciel, de l'algorithmique, de la programmation orientée objet et de l'administration système et BDD.",
    tags: ['Développement', 'Algorithmique', 'POO', 'Admin Sys & BDD'],
    order: 3,
  },
];

// ============================================
// STACK TECHNIQUE (HOME — colonne droite)
// ============================================
export const SKILLS: Skill[] = [
  {
    id: '1',
    category: 'Langages',
    items: ['Python', 'Dart', 'SQL', 'PL/SQL', 'Bash', 'Java', 'JavaScript'],
    order: 1,
  },
  {
    id: '2',
    category: 'Frameworks & Libs',
    items: ['Flutter', 'FastAPI', 'Streamlit', 'Scikit-Learn', 'Spring Boot', 'Angular', 'React', 'Laravel'],
    order: 2,
  },
  {
    id: '3',
    category: 'DevOps & Infra',
    items: ['Docker', 'Kubernetes', 'Ansible', 'Jenkins', 'Prometheus', 'Grafana'],
    order: 3,
  },
  {
    id: '4',
    category: 'Données & Stockage',
    items: ['MySQL', 'Oracle DB', 'PostgreSQL', 'MongoDB', 'Spark', 'Hive'],
    order: 4,
  },
];

// ============================================
// DOMAINES DE COMPÉTENCES (6 cartes)
// ============================================
export const SKILL_DOMAINS: SkillDomain[] = [
  {
    id: '1',
    number: '01',
    title: 'Architecture & SI',
    subtitle: 'Modélisation & Intégration',
    icon: 'account_tree',
    color: 'primary',
    items: ['Microservices', 'API REST', 'UML', 'Merise', 'BDD relationnelles', 'Gouvernance SI'],
  },
  {
    id: '2',
    number: '02',
    title: 'DevOps & Cloud',
    subtitle: 'Automatisation & Observabilité',
    icon: 'deployed_code',
    color: 'secondary',
    items: ['Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'Ansible', 'Prometheus', 'Grafana'],
  },
  {
    id: '3',
    number: '03',
    title: 'Data Science & IA',
    subtitle: 'Analyse & Modélisation ML',
    icon: 'model_training',
    color: 'tertiary',
    items: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow', 'NLP', 'Big Data', 'Streamlit'],
  },
  {
    id: '4',
    number: '04',
    title: 'Développement Web & API',
    subtitle: 'Frontend & Backend',
    icon: 'language',
    color: 'primary',
    items: ['HTML5', 'CSS3', 'Tailwind', 'JavaScript', 'FastAPI', 'Flask', 'Spring Boot', 'Angular', 'Laravel', 'React'],
  },
  {
    id: '5',
    number: '05',
    title: 'Développement Mobile',
    subtitle: 'Applications Multiplateformes',
    icon: 'smartphone',
    color: 'primary',
    items: ['Flutter', 'Dart', 'Firebase', 'SQLite', 'Hive', 'UI/UX Mobile'],
  },
  {
    id: '6',
    number: '06',
    title: 'Cybersécurité',
    subtitle: 'Audit, Pentest & Sécurité SI',
    icon: 'shield',
    color: 'error',
    items: ['Audit SI', 'Pentest', 'Sécurité logicielle', 'Kali Linux', 'OWASP', 'Cryptographie'],
  },
];

// ============================================
// CERTIFICATIONS (17)
// ============================================
export const CERTIFICATIONS: Certification[] = [
  // ---------- ORACLE ----------
  {
    id: '1',
    slug: 'oracle-database',
    title: 'Oracle Database Certification',
    issuer: 'Oracle',
    issuerLabel: 'Oracle Corporation',
    description:
      'Conception, requêtage complexe, indexation et administration de bases de données Oracle.',
    pdfUrl: '/Mes_Certificats/oracle-database.pdf',
    skills: ['SQL', 'PL/SQL', 'Indexation', 'Administration'],
    featured: true,
    status: 'PUBLISHED',
    createdAt: '2024-01-01',
  },
  {
    id: '2',
    slug: 'oracle-java-se',
    title: 'Oracle Java SE Certification',
    issuer: 'Oracle',
    issuerLabel: 'Oracle Corporation',
    description:
      'Maîtrise du langage Java Standard Edition : POO, collections, exceptions, I/O et concurrence.',
    pdfUrl: '/Mes_Certificats/oracle-java-se.pdf',
    skills: ['Java', 'POO', 'Collections', 'Exceptions'],
    featured: false,
    status: 'PUBLISHED',
    createdAt: '2024-01-01',
  },

  // ---------- AWS ----------
  {
    id: '3',
    slug: 'aws-cloud',
    title: 'Cloud Computing avec AWS',
    issuer: 'AWS',
    issuerLabel: 'Amazon Web Services',
    description:
      "Fondamentaux du cloud AWS : EC2, S3, IAM, architecture et bonnes pratiques d'infrastructure.",
    pdfUrl: '/Mes_Certificats/aws-cloud.pdf',
    skills: ['EC2', 'S3', 'IAM', 'Architecture Cloud'],
    featured: true,
    status: 'PUBLISHED',
    createdAt: '2024-01-01',
  },

  // ---------- IBM ----------
  {
    id: '4',
    slug: 'ibm-python-data-science',
    title: 'Python for Data Science & AI',
    issuer: 'IBM',
    issuerLabel: 'IBM SkillsBuild',
    description:
      'Python appliqué à la Data Science : Pandas, NumPy, visualisation et introduction au Machine Learning.',
    pdfUrl: '/Mes_Certificats/Python_for_Data_Science_and_AI_Badge.pdf',
    skills: ['Python', 'Pandas', 'NumPy', 'Machine Learning'],
    featured: true,
    status: 'PUBLISHED',
    createdAt: '2024-01-01',
  },

  // ---------- CISCO ----------
  {
    id: '5',
    slug: 'cisco-python',
    title: 'Python Essentials',
    issuer: 'Coursera',
    issuerLabel: 'Cisco Networking Academy',
    description:
      'Fondamentaux de la programmation Python : syntaxe, structures de données, fonctions et modules.',
    pdfUrl: '/Mes_Certificats/cisco-python.pdf',
    skills: ['Python', 'Algorithmique', 'Structures de données'],
    featured: false,
    status: 'PUBLISHED',
    createdAt: '2024-01-01',
  },
  {
    id: '6',
    slug: 'python-certificate',
    title: 'Python Programming',
    issuer: 'Coursera',
    issuerLabel: 'Python Institute',
    description:
      'Certification Python couvrant les bases du langage, la POO et les bonnes pratiques de développement.',
    pdfUrl: '/Mes_Certificats/python-certificate.pdf',
    skills: ['Python', 'POO', 'Scripting'],
    featured: false,
    status: 'PUBLISHED',
    createdAt: '2024-01-01',
  },

  // ---------- COURSERA : WEB & FRONTEND ----------
  {
    id: '7',
    slug: 'coursera-frontend',
    title: 'Front-End Development',
    issuer: 'Meta',
    issuerLabel: 'Meta · Coursera',
    description:
      'Développement front-end moderne : HTML5, CSS3, JavaScript, responsive design et bonnes pratiques.',
    pdfUrl: '/Mes_Certificats/coursera-frontend.pdf',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    featured: false,
    status: 'PUBLISHED',
    createdAt: '2024-01-01',
  },
  {
    id: '8',
    slug: 'coursera-react-basics',
    title: 'React Basics',
    issuer: 'Meta',
    issuerLabel: 'Meta · Coursera',
    description:
      'Fondamentaux de React : composants, props, state, hooks et gestion des événements.',
    pdfUrl: '/Mes_Certificats/coursera-react-basics.pdf',
    skills: ['React', 'JSX', 'Hooks', 'Components'],
    featured: false,
    status: 'PUBLISHED',
    createdAt: '2024-01-01',
  },
  {
    id: '9',
    slug: 'coursera-react-native',
    title: 'React Native',
    issuer: 'Meta',
    issuerLabel: 'Meta · Coursera',
    description:
      'Développement mobile multiplateforme avec React Native : navigation, state, API natives.',
    pdfUrl: '/Mes_Certificats/coursera-react-native.pdf',
    skills: ['React Native', 'Mobile', 'Navigation'],
    featured: false,
    status: 'PUBLISHED',
    createdAt: '2024-01-01',
  },
  {
    id: '10',
    slug: 'openclassroom-javascript',
    title: 'JavaScript pour le Web',
    issuer: 'Coursera',
    issuerLabel: 'OpenClassrooms',
    description:
      'Apprentissage du JavaScript pour le développement web : DOM, événements, async et API.',
    pdfUrl: '/Mes_Certificats/openclassroom-javascript.pdf',
    skills: ['JavaScript', 'DOM', 'Async/Await'],
    featured: false,
    status: 'PUBLISHED',
    createdAt: '2024-01-01',
  },
  {
    id: '11',
    slug: 'openclassroom-java-ee',
    title: 'Développez des sites web avec Java EE',
    issuer: 'Coursera',
    issuerLabel: 'OpenClassrooms',
    description:
      'Création d\'applications web Java EE : Servlets, JSP, JPA, architecture MVC.',
    pdfUrl: '/Mes_Certificats/openclassroom-java-ee.pdf',
    skills: ['Java EE', 'Servlets', 'JSP', 'JPA'],
    featured: false,
    status: 'PUBLISHED',
    createdAt: '2024-01-01',
  },

  // ---------- COURSERA : UI/UX ----------
  {
    id: '12',
    slug: 'coursera-ui',
    title: 'UI Design',
    issuer: 'Coursera',
    issuerLabel: 'Coursera · UI/UX',
    description:
      'Principes du design d\'interface utilisateur : hiérarchie visuelle, couleurs, typographie, accessibilité.',
    pdfUrl: '/Mes_Certificats/coursera-ui.pdf',
    skills: ['UI Design', 'Accessibilité', 'Typography'],
    featured: false,
    status: 'PUBLISHED',
    createdAt: '2024-01-01',
  },
  {
    id: '13',
    slug: 'coursera-figma',
    title: 'Design avec Figma',
    issuer: 'Coursera',
    issuerLabel: 'Coursera · Figma',
    description:
      'Maîtrise de Figma : wireframes, prototypes interactifs, design systems et composants réutilisables.',
    pdfUrl: '/Mes_Certificats/coursera-figma.pdf',
    skills: ['Figma', 'Prototypage', 'Design System'],
    featured: false,
    status: 'PUBLISHED',
    createdAt: '2024-01-01',
  },
  {
    id: '14',
    slug: 'coursera-wireframe',
    title: 'Wireframing & Prototyping',
    issuer: 'Coursera',
    issuerLabel: 'Coursera · UX',
    description:
      'Conception de wireframes basse et haute fidélité, tests utilisateurs et itération de prototypes.',
    pdfUrl: '/Mes_Certificats/coursera-wireframe.pdf',
    skills: ['Wireframing', 'Prototypage', 'UX Research'],
    featured: false,
    status: 'PUBLISHED',
    createdAt: '2024-01-01',
  },

  // ---------- COURSERA : DATA & GESTION ----------
  {
    id: '15',
    slug: 'coursera-python',
    title: 'Python pour la Data Science',
    issuer: 'IBM',
    issuerLabel: 'IBM · Coursera',
    description:
      'Analyse de données avec Python : Pandas, NumPy, Matplotlib et introduction au Machine Learning.',
    pdfUrl: '/Mes_Certificats/coursera-python.pdf',
    skills: ['Python', 'Pandas', 'Data Science'],
    featured: false,
    status: 'PUBLISHED',
    createdAt: '2024-01-01',
  },
  {
    id: '16',
    slug: 'coursera-software-design',
    title: 'Software Design and Project Management',
    issuer: 'Coursera',
    issuerLabel: 'Coursera · Software Engineering',
    description:
      'Conception logicielle, méthodes agiles, gestion de projet et bonnes pratiques d\'ingénierie.',
    pdfUrl: '/Mes_Certificats/coursera-software-design.pdf',
    skills: ['Software Design', 'Agile', 'Gestion de projet'],
    featured: false,
    status: 'PUBLISHED',
    createdAt: '2024-01-01',
  },
  {
    id: '17',
    slug: 'aws-cloud-old',
    title: 'AWS Cloud Foundations (complément)',
    issuer: 'AWS',
    issuerLabel: 'Amazon Web Services',
    description:
      'Approfondissement des services AWS : VPC, Lambda, RDS et bonnes pratiques de sécurité cloud.',
    pdfUrl: '/Mes_Certificats/aws-cloud.pdf',
    skills: ['VPC', 'Lambda', 'RDS', 'Sécurité Cloud'],
    featured: false,
    status: 'PUBLISHED',
    createdAt: '2024-01-01',
  },
];

// ============================================
// PROJETS (à remplir)
// ============================================
export const PROJECTS: Project[] = [
  // TODO
];
//------------------------------------------------
// ============================================
// PROJETS WEB
// ============================================
export const WEB_PROJECTS: Project[] = [
  {
    id: 'web-1',
    slug: 'stocksync-soa',
    title: 'StockSync SOA',
    summary:
      "Orchestration de flux d'inventaires multi-entrepôts géographiquement éclatés. Élimination des goulots d'étranglement transactionnels grâce au découplage asynchrone par files de messages.",
    content: '',
    coverImage: '/images/projects/app_web/StockSync_SOA/Image.png',
    screenshots: [],
    category: 'WEB',
    tags: ['Microservices', 'SOA', 'RabbitMQ', 'Event-Driven'],
    stack: ['FastAPI', 'Docker Swarm', 'Nginx', 'PostgreSQL', 'RabbitMQ', 'Redis'],
    demoUrl: '',
    repoUrl: 'https://github.com/ganafaye',
    featured: true,
    status: 'PUBLISHED',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    id: 'web-2',
    slug: 'bibliotheque-federe-2pc',
    title: 'Bibliothèque Fédérée',
    summary:
      "Implémentation sur mesure du protocole Two-Phase Commit (2PC) pour orchestrer les prêts d'ouvrages entre nœuds universitaires autonomes et hétérogènes.",
    content: '',
    coverImage: '/images/projects/app_web/image.jpg',
    screenshots: [],
    category: 'WEB',
    tags: ['BDD distribuée', '2PC', 'ACID', 'R&D'],
    stack: ['MySQL FEDERATED', 'Oracle DB 19c', 'PL/SQL', 'Python'],
    demoUrl: '',
    repoUrl: 'https://github.com/ganafaye',
    featured: true,
    status: 'PUBLISHED',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    id: 'web-3',
    slug: 'gestion-stocks-spring',
    title: 'Gestion Stocks',
    summary:
      "Application web complète de gestion de stocks avec API REST Spring Boot et interface Angular moderne. CRUD produits, gestion des entrées/sorties, alertes de rupture et tableau de bord temps réel.",
    content: '',
    coverImage: '/images/projects/app_web/Gestion_stock/Illustration Gestion Stock projet web.jpg',
    screenshots: [],
    category: 'WEB',
    tags: ['Spring Boot', 'Angular', 'REST API', 'JWT'],
    stack: [
      'Spring Boot 3',
      'Spring Security',
      'JPA / Hibernate',
      'MySQL',
      'Angular',
      'TypeScript',
      'JWT',
    ],
    demoUrl: '',
    repoUrl: 'https://github.com/ganafaye',
    featured: true,
    status: 'PUBLISHED',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    id: 'web-4',
    slug: 'medicare',
    title: 'MediCare',
    summary:
      "Application web complète pour clinique gynéco-obstétrique : suivi des patientes enceintes, prise de rendez-vous en ligne, espace patient sécurisé et communication avec les praticiens.",
    content: '',
    coverImage: '/images/projects/app_web/MediCare/capture_1_page_acceuille.png',
    screenshots: [],
    category: 'WEB',
    tags: ['Santé', 'PHP', 'MySQL', 'Responsive'],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    demoUrl: 'https://medicare.byethost5.com/',
    repoUrl: 'https://github.com/ganafaye',
    featured: true,
    status: 'PUBLISHED',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
];

export async function getWebProjects(): Promise<Project[]> {
  return WEB_PROJECTS.filter((p) => p.status === 'PUBLISHED');
}

// ============================================
// PATTERNS D'ARCHITECTURE
// ============================================
export const ARCHITECTURE_PATTERNS = [
  {
    id: '1',
    icon: 'balance',
    color: 'primary' as const,
    title: 'Haute Disponibilité & Failover',
    description:
      "Configuration active-passive et active-active avec répartiteurs de charge à détection de pulsation. Basculement automatique transparent sans rupture de session client.",
    metricLabel: 'RPO (Recovery Point)',
    metricValue: '< 1 s',
    progress: 95,
  },
  {
    id: '2',
    icon: 'difference',
    color: 'tertiary' as const,
    title: 'Réplication Maître-Esclave',
    description:
      "Déport systématique des requêtes en lecture sur les réplicas secondaires via log binaire continu. Décharge du nœud maître pour maximiser l'écriture transactionnelle.",
    metricLabel: 'Débit de lecture',
    metricValue: '+350% Scale',
    progress: 85,
  },
  {
    id: '3',
    icon: 'grid_goldenratio',
    color: 'secondary' as const,
    title: 'Partitionnement & Sharding',
    description:
      "Segmentation horizontale des tables à fort volume par clé de hachage géographique, garantissant une indexation locale instantanée et un stockage équilibré.",
    metricLabel: 'Gain Temps de Réponse',
    metricValue: 'x4.8 plus rapide',
    progress: 90,
  },
];

export function getArchitecturePatterns() {
  return ARCHITECTURE_PATTERNS;
}

// ============================================
// PROJETS MOBILE (à remplir)
// ============================================
// ============================================
// APPLICATIONS MOBILES
// ============================================
export interface MobileApp {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: string;
  statusColor: 'primary' | 'secondary' | 'tertiary';
  color: 'primary' | 'secondary' | 'tertiary';
  icon: string;                // Material icon fallback
  logoUrl?: string;            // logo image si dispo
  bullets: string[];
  stack: string[];
  captures: { src: string; caption: string }[];
  specs: { label: string; value: string }[];
  repoUrl?: string;
  demoUrl?: string;
}

export const MOBILE_APPS: MobileApp[] = [
  {
    id: 'masante',
    slug: 'masante-plus',
    name: 'MaSanté+',
    tagline: 'Suivi santé personnel · 100% hors ligne',
    description:
      "Application Flutter pour enregistrer ses douleurs, suivre ses médicaments et générer un rapport PDF pour son médecin.",
    status: 'Disponible',
    statusColor: 'tertiary',
    color: 'tertiary',
    icon: 'health_and_safety',
    logoUrl: '/images/projects/app_mobile/MaSantPlus/Logo.png',
    bullets: [
      'Saisie rapide des douleurs — en moins de 30 secondes',
      'Suivi des médicaments et rappels personnalisés',
      "Graphiques d'évolution sur 24h / 7j / 30j",
      'Rapport PDF structuré pour le médecin',
    ],
    stack: ['Flutter', 'Dart', 'Local Storage', 'PDF Export', 'Offline-First'],
    captures: [
      { src: '/images/projects/app_mobile/MaSantPlus/capture_1.png', caption: 'Accueil' },
      { src: '/images/projects/app_mobile/MaSantPlus/capture_2.png', caption: 'Historique douleur' },
      { src: '/images/projects/app_mobile/MaSantPlus/capture_3.png', caption: 'Médicaments' },
    ],
    specs: [
      { label: 'Framework', value: 'Flutter / Dart' },
      { label: 'Stockage', value: 'Local (offline)' },
      { label: 'Export', value: 'Rapport PDF' },
      { label: 'Confidentialité', value: 'Aucune donnée en ligne' },
    ],
    repoUrl: 'https://github.com/ganafaye',
  },
  {
    id: 'campuspulse',
    slug: 'campuspulse',
    name: 'CampusPulse',
    tagline: 'Emploi du temps universitaire · UADB',
    description:
      "Application mobile d'emploi du temps pour les étudiants de l'UADB. Répond aux changements d'horaires fréquents avec une expérience fluide et accessible hors ligne.",
    status: 'En développement',
    statusColor: 'secondary',
    color: 'secondary',
    icon: 'school',
    logoUrl: undefined,
    //public\images\projects\app_mobile\CampusPulse\images_trans\Capture_ecran_application_acceuille_apres_login-removebg-preview.png
    bullets: [
      'Authentification étudiante via numéro de carte UADB',
      'Emploi du temps offline-first stocké localement',
      'Alertes temps réel pour changements de salle / annulations',
      'Clean Architecture + Riverpod — code découplé et testable',
    ],
    stack: ['Flutter', 'Dart', 'Riverpod', 'Hive', 'Clean Architecture'],
    captures: [
      { src: '/images/projects/app_mobile/CampusPulse/images_trans/Capture_ecran_application_acceuille_invit__-removebg-preview.png', caption: 'Accueil invité' },
      { src: '/images/projects/app_mobile/CampusPulse/images_trans/Capture_ecran_application_Login-removebg-preview.png', caption: 'Connexion' },
      { src: '/images/projects/app_mobile/CampusPulse/images_trans/Capture_ecran_application_emplois_du_temps-removebg-preview.png', caption: 'Emploi du temps' },
    ],
    specs: [
      { label: 'Framework', value: 'Flutter / Dart' },
      { label: 'State', value: 'Riverpod' },
      { label: 'Local DB', value: 'Hive' },
      { label: 'Architecture', value: 'Clean' },
    ],
    repoUrl: 'https://github.com/ganafaye',
  },
  {
    id: 'mesdepenses',
    slug: 'mes-depenses',
    name: 'Mes Depenses',
    tagline: 'Gestion des finances personnelles',
    description:
      "Application Flutter pour suivre revenus, dépenses, comptes et statistiques — avec détection automatique des opérations depuis les SMS et notifications.",
    status: 'V1 · Validée',
    statusColor: 'tertiary',
    color: 'primary',
    icon: 'account_balance_wallet',
    logoUrl: '/images/projects/app_mobile/MesDepenses/logo.png',
    bullets: [
      'Multi-comptes avec soldes globaux et individuels',
      'Détection automatique des opérations via SMS et notifications',
      'Statistiques et évolution financière dans le temps',
      'Sécurité PIN / biométrie — données stockées localement',
    ],
    stack: ['Flutter', 'Dart', 'Local Storage', 'SMS Parser', 'PIN / Biometric'],
    captures: [
      { src: '/images/projects/app_mobile/MesDepenses/Capture_1_App_Mes_depenses_version_1.0.0 .png', caption: 'Tableau de bord' },
      { src: '/images/projects/app_mobile/MesDepenses/Capture_2_App_Mes_depenses_version_1.0.0 .png', caption: 'Nouvelle opération' },
      { src: '/images/projects/app_mobile/MesDepenses/Capture_3_App_Mes_depenses_version_1.0.0 .png', caption: 'Statistiques' },
    ],
    specs: [
      { label: 'Framework', value: 'Flutter / Dart' },
      { label: 'Stockage', value: 'Local (téléphone)' },
      { label: 'Sécurité', value: 'PIN / biométrie' },
      { label: 'Statut', value: 'V1 validée' },
    ],
    repoUrl: 'https://github.com/ganafaye',
  },
];

export async function getMobileApps(): Promise<MobileApp[]> {
  return MOBILE_APPS;
}

// ============================================
// ARTICLES / BLOG (à remplir)
// ============================================
export const ARTICLES: Article[] = [
  // TODO
];

// ============================================
// LABORATOIRES
// ============================================
export interface LabProject {
  name: string;
  status: string;
  statusStyle: 'live' | 'version' | 'draft';
  description: string;
  tags: string[];
}

export interface LabStat {
  label: string;
  value: string;
  color: 'primary' | 'secondary' | 'tertiary';
}

export interface Lab {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  status: string;
  color: 'primary' | 'secondary';
  icon: string;
  coverImage: string;
  coverBadge: string;
  description: string;
  bullets: string[];
  stats: LabStat[];
  stack: string[];
  internalProjects?: LabProject[];
  topology?: {
    title: string;
    nodes: { icon: string; label: string; color: 'primary' | 'secondary' | 'tertiary' }[];
  };
  demoUrl?: string;
  repoUrl?: string;
}

export const LABS: Lab[] = [
  {
    id: 'ialab',
    slug: 'data-ia-lab',
    name: 'Data Science & IA Lab',
    subtitle: 'Modèles ML, Analytics, Streamlit',
    status: 'En ligne',
    color: 'secondary',
    icon: 'psychology',
    coverImage: '/images/labs/ia-lab.png',
    coverBadge: 'STREAMLIT LIVE',
    description:
      "Plateforme Streamlit regroupant tous mes travaux de Data Science, Intelligence Artificielle et Machine Learning : analyses exploratoires, modèles prédictifs, dashboards interactifs et démos d'algorithmes.",
    bullets: [
      'Modèles ML — régression, classification, clustering',
      'Analyses exploratoires et visualisations interactives',
      'Déploiement Streamlit — accès public via navigateur',
      'Notebooks & pipelines — Pandas, Scikit-Learn, Plotly',
    ],
    stats: [
      { label: 'Projets déployés', value: '5+', color: 'secondary' },
      { label: 'Modèles entraînés', value: '3', color: 'primary' },
      { label: 'Uptime Streamlit', value: '99.9%', color: 'tertiary' },
      { label: 'Dataset max', value: '4k', color: 'secondary' },
    ],
    stack: ['Python', 'Streamlit', 'Scikit-Learn', 'Pandas', 'NumPy', 'Plotly', 'MLflow'],
    internalProjects: [
      {
        name: 'Dakar Immo AI',
        status: 'Live',
        statusStyle: 'live',
        description:
          'Estimation prédictive des prix au m² à Dakar. Modèles entraînés sur 45k+ annonces.',
        tags: ['Scikit-Learn', 'Random Forest', 'XGBoost'],
      },
      {
        name: 'Analyseur Qualité Données',
        status: 'v1.8',
        statusStyle: 'version',
        description:
          "Dashboard d'audit et détection d'anomalies tabulaires automatisé.",
        tags: ['Streamlit', 'Pandas', 'Plotly'],
      },
    ],
    demoUrl: 'https://gana-data-homelab.streamlit.app/',
    repoUrl: 'https://github.com/ganafaye',
  },
  {
    id: 'devopslab',
    slug: 'devops-cloud-lab',
    name: 'DevOps & Cloud Lab',
    subtitle: 'Homelab Infrastructure, Cloud & Orchestration',
    status: 'Auto-hébergé',
    color: 'primary',
    icon: 'dns',
    coverImage: '/images/labs/devops-lab.png',
    coverBadge: 'GITOPS',
    description:
      "Homelab auto-hébergé simulant un système d'information à haute disponibilité : micro-services cloisonnés, routage ingress résilient, observabilité distribuée et intégration GitOps automatisée.",
    bullets: [
      'Cluster K8s HA — MicroK8s multi-nœuds avec Istio Mesh',
      'Observabilité — Prometheus, Grafana, alerting Telegram',
      'IaC — Terraform, Ansible, GitLab CI/CD auto-hébergés',
      'Sécurité réseau — pfSense, VLAN isolés, Tunnel TLS Cloudflare',
    ],
    stats: [
      { label: 'Nœuds K8s', value: '2', color: 'primary' },
      { label: 'Dashboards', value: '2', color: 'tertiary' },
      { label: 'Uptime annuel', value: '99.7%', color: 'primary' },
      { label: 'Services actifs', value: '2+', color: 'secondary' },
    ],
    stack: ['MicroK8s', 'Istio Mesh', 'Terraform', 'Ansible', 'Prometheus', 'Grafana', 'Vault', 'pfSense'],
    topology: {
      title: 'Topologie réseau & isolation',
      nodes: [
        { icon: 'router', label: 'pfSense', color: 'primary' },
        { icon: 'swap_calls', label: 'Traefik Ingress', color: 'primary' },
        { icon: 'token', label: 'K8s Cluster (6 nœuds)', color: 'secondary' },
        { icon: 'folder_special', label: 'ZFS Storage', color: 'tertiary' },
      ],
    },
    demoUrl: 'https://ganahomelabinfra.byethost18.com/',
    repoUrl: 'https://github.com/ganafaye',
  },
];

export async function getLabs(): Promise<Lab[]> {
  return LABS;
}
// ============================================
// INFORMATIONS DE CONTACT
// ============================================
export const CONTACT_INFO = {
  email: 'ganafaye88@gmail.com',
  phone: '', // laisser vide pour masquer la carte téléphone
  location: 'Dakar & Bambey, Sénégal',
  timezone: 'Fuseau GMT · UTC+0',
  availability: 'Missions freelance & CDI',
  availabilityDetail: 'Recherche active post-diplôme',
  responseTime: 'Garantie < 24 heures',
  socials: {
    github: {
      url: 'https://github.com/ganafaye',
      handle: '@ganafaye',
      label: 'GitHub',
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/gana-faye/',
      handle: 'Gana FAYE',
      label: 'LinkedIn',
    },
  },
};

export function getContactInfo() {
  return CONTACT_INFO;
}



// ============================================
// FAQ CONTACT
// ============================================
export const CONTACT_FAQ = [
  {
    id: '1',
    icon: 'calendar_month',
    color: 'primary' as const,
    title: 'Disponibilités & Calendrier',
    description:
      "Actuellement en Master 2 SI à l'UADB. Ouvert aux missions freelance ponctuelles dès maintenant, et disponible pour un contrat temps plein (CDI / Ingénieur SI) à compter de mon diplôme.",
  },
  {
    id: '2',
    icon: 'flight_takeoff',
    color: 'secondary' as const,
    title: 'Mobilité géographique',
    description:
      "Basé au Sénégal (Dakar & Bambey), j'opère avec aisance en télétravail international (fuseau GMT). Mobile pour des déplacements professionnels et séminaires.",
  },
  {
    id: '3',
    icon: 'handshake',
    color: 'tertiary' as const,
    title: 'Modalités de mission',
    description:
      "Prestations sous convention de services : audit d'architecture, déploiement CI/CD, pipelines de données ou refonte applicative. Tarification au forfait ou au temps passé.",
  },
];

export function getContactFAQ() {
  return CONTACT_FAQ;
}

// ============================================
// FONCTIONS D'ACCÈS (utilisées par les composants)
// ============================================

export async function getHeroSlides() {
  return HERO_SLIDES;
}

export async function getTypewriterPhrases() {
  return TYPEWRITER_PHRASES;
}

export async function getStats() {
  return STATS;
}

export async function getEducations(): Promise<Education[]> {
  return [...EDUCATIONS].sort((a, b) => a.order - b.order);
}

export async function getSkills(): Promise<Skill[]> {
  return [...SKILLS].sort((a, b) => a.order - b.order);
}

export async function getSkillDomains(): Promise<SkillDomain[]> {
  return SKILL_DOMAINS;
}

export async function getFeaturedCertifications(): Promise<Certification[]> {
  return CERTIFICATIONS.filter((c) => c.featured && c.status === 'PUBLISHED');
}

export async function getAllCertifications(): Promise<Certification[]> {
  return CERTIFICATIONS.filter((c) => c.status === 'PUBLISHED');
}

export async function getProjects(): Promise<Project[]> {
  return PROJECTS.filter((p) => p.status === 'PUBLISHED');
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return PROJECTS.find((p) => p.slug === slug && p.status === 'PUBLISHED') ?? null;
}
// ============================================
// PUBLICATIONS (Rapports, TPs, RETEX, Blog)
// ============================================
export type PublicationType = 'TP' | 'RETEX' | 'BLOG' | 'SECURITE' | 'PROJET';

export interface Publication {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  type: PublicationType;
  category: string;
  date: string;
  pages?: number;
  pdfUrl: string;
  coverImage?: string;
  tags: string[];
  featured?: boolean;
}

export const PUBLICATIONS: Publication[] = [
  // ============ RAPPORTS PROJETS & TPs ============
  {
    id: '1',
    slug: 'projet-cloud',
    title: 'Projet Cloud — Infrastructure distribuée',
    excerpt:
      "Conception et déploiement d'une infrastructure cloud complète : virtualisation, orchestration, scalabilité et supervision.",
    type: 'PROJET',
    category: 'Cloud',
    date: '2026',
    pdfUrl: '/Travaux_Blog/Rapport/projet-cloud.pdf',
    tags: ['Cloud', 'Infrastructure', 'Orchestration'],
    featured: true,
  },
  {
    id: '2',
    slug: 'tp-clouds-techno',
    title: 'TP — Technologies Cloud',
    excerpt:
      "Exploration pratique des technologies cloud : IaaS, PaaS, conteneurs, et services managés (AWS, GCP).",
    type: 'TP',
    category: 'Cloud',
    date: '2026',
    pdfUrl: '/Travaux_Blog/Rapport/tp-clouds-techno.pdf',
    tags: ['Cloud', 'AWS', 'IaaS', 'PaaS'],
  },
  {
    id: '3',
    slug: 'projet-campuspulse',
    title: 'Projet CampusPulse — Application mobile UADB',
    excerpt:
      "Rapport final du projet CampusPulse : application mobile d'emploi du temps universitaire, architecture Flutter offline-first.",
    type: 'PROJET',
    category: 'Mobile',
    date: 'Mai 2026',
    pdfUrl: '/Travaux_Blog/Rapport/projet-campuspulse.pdf',
    tags: ['Flutter', 'Mobile', 'UADB'],
    featured: true,
  },
  {
    id: '4',
    slug: 'tp-docker-complet',
    title: 'TP — Docker : de zéro à la production',
    excerpt:
      "Guide complet Docker : images, conteneurs, volumes, réseaux, Docker Compose, Docker Swarm et bonnes pratiques de production.",
    type: 'TP',
    category: 'DevOps',
    date: 'Mai 2026',
    pdfUrl: '/Travaux_Blog/Rapport/tp-docker-complet.pdf',
    tags: ['Docker', 'DevOps', 'Swarm', 'Compose'],
    featured: true,
  },
  {
    id: '5',
    slug: 'tp-kubernetes',
    title: 'TP — Kubernetes : orchestration de conteneurs',
    excerpt:
      "Déploiement d'un cluster Kubernetes : pods, deployments, services, ingress, configmaps, secrets et autoscaling.",
    type: 'TP',
    category: 'DevOps',
    date: 'Juin 2026',
    pdfUrl: '/Travaux_Blog/Rapport/tp-kubernetes.pdf',
    tags: ['Kubernetes', 'K8s', 'Orchestration', 'DevOps'],
    featured: true,
  },

  // ============ SÉCURITÉ SI ============
  // --- Cache Poisoning ---
  {
    id: '6',
    slug: 'cours-cache-poisoning',
    title: 'Cours — Tromperie du cache Web',
    excerpt:
      "Étude théorique du Web Cache Poisoning : mécanismes, vecteurs d'attaque et stratégies de mitigation.",
    type: 'SECURITE',
    category: 'Sécurité',
    date: 'Juil 2026',
    pdfUrl: '/Travaux_Blog/Sec_SI/cours-cache-poisoning.pdf',
    tags: ['Web Cache', 'Poisoning'],
  },
  {
    id: '7',
    slug: 'tp-cache-poisoning',
    title: 'TP — Exploitation Web Cache Poisoning',
    excerpt:
      "Travaux pratiques sur l'exploitation du Web Cache Poisoning : mise en place d'un lab, exploitation et remédiation.",
    type: 'SECURITE',
    category: 'Sécurité',
    date: 'Juil 2026',
    pdfUrl: '/Travaux_Blog/Sec_SI/tp-cache-poisoning.pdf',
    tags: ['Web Cache', 'Exploitation'],
  },

  // --- Attaque LLM ---
  {
    id: '8',
    slug: 'cours-llm',
    title: 'Cours — Attaques sur les LLM',
    excerpt:
      "Étude des vulnérabilités propres aux Large Language Models : prompt injection, jailbreak, data leakage.",
    type: 'SECURITE',
    category: 'IA & Sécurité',
    date: 'Juil 2026',
    pdfUrl: '/Travaux_Blog/Sec_SI/Attaque_LLM/cours-llm.pdf',
    tags: ['LLM', 'Prompt Injection', 'IA'],
    featured: true,
  },
  {
    id: '9',
    slug: 'lab-llm-1',
    title: 'Lab 1 — Exploitation LLM',
    excerpt:
      "Premier laboratoire pratique sur l'exploitation des failles LLM : techniques et résultats.",
    type: 'SECURITE',
    category: 'IA & Sécurité',
    date: 'Juil 2026',
    pdfUrl: '/Travaux_Blog/Sec_SI/Attaque_LLM/lab-llm-1.pdf',
    tags: ['LLM', 'Lab', 'Exploitation'],
  },
  {
    id: '10',
    slug: 'lab-llm-2',
    title: 'Lab 2 — Exploitation LLM avancée',
    excerpt:
      "Deuxième laboratoire sur les LLM : scénarios d'attaque avancés et contre-mesures.",
    type: 'SECURITE',
    category: 'IA & Sécurité',
    date: 'Juil 2026',
    pdfUrl: '/Travaux_Blog/Sec_SI/Attaque_LLM/lab-llm-2.pdf',
    tags: ['LLM', 'Lab', 'Avancé'],
  },

  // --- Attaque API ---
  {
    id: '11',
    slug: 'cours-api-rest',
    title: 'Cours — Attaques sur API REST',
    excerpt:
      "Panorama des vulnérabilités API REST : OWASP API Top 10, BOLA, Broken Auth, rate limiting.",
    type: 'SECURITE',
    category: 'Sécurité API',
    date: 'Juil 2026',
    pdfUrl: '/Travaux_Blog/Sec_SI/Attaque_API/cours-api-rest.pdf',
    tags: ['API REST', 'OWASP API'],
    featured: true,
  },
  {
    id: '12',
    slug: 'lab-api',
    title: 'Lab — Test d\'une API vulnérable',
    excerpt:
      "Laboratoire pratique sur le test d'une API intentionnellement vulnérable : découverte et exploitation.",
    type: 'SECURITE',
    category: 'Sécurité API',
    date: 'Juil 2026',
    pdfUrl: '/Travaux_Blog/Sec_SI/Attaque_API/lab-api.pdf',
    tags: ['API', 'Pentest', 'Lab'],
  },
  {
    id: '13',
    slug: 'lab-api-doc',
    title: 'Lab — Documentation API',
    excerpt:
      "Analyse et documentation des failles identifiées lors du test d'API.",
    type: 'SECURITE',
    category: 'Sécurité API',
    date: 'Juil 2026',
    pdfUrl: '/Travaux_Blog/Sec_SI/Attaque_API/lab-api-doc.pdf',
    tags: ['API', 'Documentation'],
  },

  // --- Attaque CSRF ---
  {
    id: '14',
    slug: 'cours-csrf',
    title: 'Cours — Attaques CSRF',
    excerpt:
      "Étude complète des attaques Cross-Site Request Forgery : mécanismes, vecteurs et protections (tokens, SameSite).",
    type: 'SECURITE',
    category: 'Sécurité Web',
    date: 'Juil 2026',
    pdfUrl: '/Travaux_Blog/Sec_SI/Attaque_CSRF/cours-csrf.pdf',
    tags: ['CSRF', 'Sécurité Web'],
    featured: true,
  },
  {
    id: '15',
    slug: 'lab-csrf-1',
    title: 'Lab CSRF 1 — Attaque basique',
    excerpt:
      "Premier laboratoire CSRF : mise en place d'une attaque basique et observation des effets.",
    type: 'SECURITE',
    category: 'Sécurité Web',
    date: 'Juil 2026',
    pdfUrl: '/Travaux_Blog/Sec_SI/Attaque_CSRF/lab-csrf-1.pdf',
    tags: ['CSRF', 'Lab'],
  },
  {
    id: '16',
    slug: 'lab-csrf-2',
    title: 'Lab CSRF 2 — Contournement de token',
    excerpt:
      "Deuxième laboratoire : contournement de tokens CSRF mal implémentés.",
    type: 'SECURITE',
    category: 'Sécurité Web',
    date: 'Juil 2026',
    pdfUrl: '/Travaux_Blog/Sec_SI/Attaque_CSRF/lab-csrf-2.pdf',
    tags: ['CSRF', 'Bypass'],
  },
  {
    id: '17',
    slug: 'lab-csrf-3',
    title: 'Lab CSRF 3 — Attaque avancée',
    excerpt:
      "Troisième laboratoire : scénarios CSRF avancés avec interactions multi-étapes.",
    type: 'SECURITE',
    category: 'Sécurité Web',
    date: 'Juil 2026',
    pdfUrl: '/Travaux_Blog/Sec_SI/Attaque_CSRF/lab-csrf-3.pdf',
    tags: ['CSRF', 'Avancé'],
  },
  {
    id: '18',
    slug: 'lab-csrf-4',
    title: 'Lab CSRF 4 — Remédiation',
    excerpt:
      "Quatrième laboratoire : mise en place des protections CSRF (SameSite, tokens synchronisés).",
    type: 'SECURITE',
    category: 'Sécurité Web',
    date: 'Juil 2026',
    pdfUrl: '/Travaux_Blog/Sec_SI/Attaque_CSRF/lab-csrf-4.pdf',
    tags: ['CSRF', 'Remédiation'],
  },

  // --- Attaque WebSocket ---
  {
    id: '19',
    slug: 'cours-websocket',
    title: 'Cours — Attaques WebSocket',
    excerpt:
      "Étude des vulnérabilités WebSocket : hijacking, injection de messages, cross-site WebSocket.",
    type: 'SECURITE',
    category: 'Sécurité Web',
    date: 'Juil 2026',
    pdfUrl: '/Travaux_Blog/Sec_SI/Attaque_WebSocket/cours-websocket.pdf',
    tags: ['WebSocket', 'Hijacking'],
  },

  // --- Injection SQL ---
  {
    id: '20',
    slug: 'cours-injection-sql',
    title: 'Cours — Injection SQL complète',
    excerpt:
      "Formation complète sur les injections SQL : types, techniques d'exploitation et prévention (prepared statements).",
    type: 'SECURITE',
    category: 'Sécurité BDD',
    date: 'Juil 2026',
    pdfUrl: '/Travaux_Blog/Sec_SI/Injection_SQL/cours-injection-sql.pdf',
    tags: ['SQL Injection', 'OWASP'],
    featured: true,
  },
  {
    id: '21',
    slug: 'lab-sql-1',
    title: 'Lab Injection SQL 1',
    excerpt:
      "Premier laboratoire d'injection SQL : extraction de données via UNION-based.",
    type: 'SECURITE',
    category: 'Sécurité BDD',
    date: 'Juil 2026',
    pdfUrl: '/Travaux_Blog/Sec_SI/Injection_SQL/lab-sql-1.pdf',
    tags: ['SQL', 'UNION-based'],
  },
  {
    id: '22',
    slug: 'lab-sql-2',
    title: 'Lab Injection SQL 2',
    excerpt:
      "Deuxième laboratoire : blind SQL injection et exploitation avancée.",
    type: 'SECURITE',
    category: 'Sécurité BDD',
    date: 'Juil 2026',
    pdfUrl: '/Travaux_Blog/Sec_SI/Injection_SQL/lab-sql-2.pdf',
    tags: ['SQL', 'Blind'],
  },

  // --- Sécurité Authentification ---
  {
    id: '23',
    slug: 'cours-auth',
    title: 'Cours — Vulnérabilités d\'authentification',
    excerpt:
      "Étude des vulnérabilités d'authentification : brute force, session fixation, JWT, MFA bypass.",
    type: 'SECURITE',
    category: 'Sécurité Auth',
    date: 'Juil 2026',
    pdfUrl: '/Travaux_Blog/Sec_SI/Securite_Auth/cours-auth.pdf',
    tags: ['Auth', 'JWT', 'MFA'],
  },
];
// ============================================
// FONCTIONS D'ACCÈS — PUBLICATIONS
// ============================================
export async function getPublications(): Promise<Publication[]> {
  return PUBLICATIONS;
}

export async function getFeaturedPublications(): Promise<Publication[]> {
  return PUBLICATIONS.filter((p) => p.featured);
}

export function getPublicationTypes(): string[] {
  return Array.from(new Set(PUBLICATIONS.map((p) => p.type)));
}