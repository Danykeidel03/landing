export const personalInfo = {
  name: 'Daniel Fernandez',
  role: 'Full Stack Developer',
  specialty: 'Magento 2 · React · Node.js',
  location: 'León, España',
  email: 'trunkxx777@gmail.com',
  linkedin: 'https://www.linkedin.com/in/daniel-fernandez-fer24191/',
  github: 'https://github.com/',
  availability: true,
  bio: 'Desarrollo soluciones. Pero sobre todo, resuelvo problemas.',
  description:
    'Especialista en Magento 2 y tecnologías modernas como React y Node.js. Me enfoco en unir backend robusto con interfaces limpias, rápidas y usables.',
}

export const stack = [
  { label: 'Magento 2', category: 'ecommerce' },
  { label: 'Hyvä Themes', category: 'ecommerce' },
  { label: 'PHP', category: 'backend' },
  { label: 'Node.js', category: 'backend' },
  { label: 'Laravel', category: 'backend' },
  { label: 'React', category: 'frontend' },
  { label: 'JavaScript', category: 'frontend' },
  { label: 'Knockout.js', category: 'frontend' },
  { label: 'LESS / CSS3', category: 'frontend' },
  { label: 'MongoDB', category: 'database' },
  { label: 'Docker', category: 'devops' },
  { label: 'Git', category: 'devops' },
]

export const experience = [
  {
    company: 'IAGT Amazing Software',
    role: 'Magento Developer',
    period: 'Dic 2025 — Actualidad',
    type: 'Remoto',
    current: true,
    description:
      'Desarrollo con Hyvä Themes y personalización de temas Magento 2 tradicionales. Gestión completa del ciclo de desarrollo en entornos con Docker.',
    tech: ['Magento 2', 'Hyvä', 'Docker', 'PHP', 'Git', 'Knockout.js'],
  },
  {
    company: 'Mi Tienda de Arte',
    role: 'Magento Developer',
    period: 'Jul 2023 — Dic 2025',
    type: 'Presencial · León',
    current: false,
    description:
      'Desarrollo y personalización de temas en Magento 2. Módulos personalizados en PHP, integración con APIs externas y optimización del rendimiento.',
    tech: ['Magento 2', 'PHP', 'JavaScript', 'APIs REST', 'Git'],
  },
  {
    company: 'Be Call Group',
    role: 'Desarrollador — Prácticas',
    period: 'Feb 2023 — Abr 2023',
    type: 'Presencial',
    current: false,
    description:
      'Desarrollo con PHP y JavaScript, aplicaciones de escritorio con Electron.js y extensiones para Chrome con Manifest V3.',
    tech: ['PHP', 'JavaScript', 'Electron.js', 'Chrome Extensions'],
  },
]

export const education = [
  {
    institution: 'Evolve',
    degree: 'Máster en Desarrollo Full Stack & IA',
    period: 'Ene 2025 — Jul 2025',
    grade: '8.4',
    highlights: ['MERN Stack', 'React + Hooks', 'Node.js + Express', 'MongoDB', 'JWT Auth'],
  },
  {
    institution: 'BIG school',
    degree: 'Certificado Desarrollo con IA',
    period: 'Mar 2026',
    grade: null,
    highlights: ['IA aplicada al desarrollo', 'De 0 a producción'],
  },
  {
    institution: 'IES San Andrés',
    degree: 'CFGS Desarrollo de Aplicaciones Web',
    period: '2021 — 2023',
    grade: null,
    highlights: ['HTML/CSS/JS', 'PHP', 'Bases de datos', 'Redes'],
  },
]

export const projects = [
  {
    title: 'Balonmano Sariegos',
    description:
      'Web completa para club deportivo. Partidos, noticias, equipos y tienda. Foco en rendimiento, SEO y experiencia de usuario.',
    url: 'https://balonmanosariegos.com',
    tech: ['React', 'Vite', 'Cloudinary', 'WebP', 'SEO', 'Open Graph'],
    highlights: ['Lazy loading', 'Imágenes WebP optimizadas', 'Responsive', 'Twitter Cards'],
  },
  {
    title: 'FitTracker App',
    description:
      'Aplicación de seguimiento de calorías y rutinas con comunidad integrada. Subida de ejercicios y comidas personalizadas.',
    url: null,
    github: 'https://github.com/',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT', 'Cloudinary'],
    highlights: ['Tiempo real con Socket.io', 'Auth con JWT', 'Escalable desde el inicio'],
  },
]

export const services = [
  {
    icon: '🛒',
    title: 'Tiendas Magento 2',
    description:
      'Desarrollo y personalización de tiendas Magento 2. Temas Hyvä, módulos a medida, integraciones con APIs y optimización de rendimiento.',
  },
  {
    icon: '⚡',
    title: 'Webs y Aplicaciones React',
    description:
      'Desde landing pages rápidas hasta aplicaciones MERN completas. Código limpio, escalable y optimizado para SEO.',
  },
  {
    icon: '🔧',
    title: 'Backend & APIs',
    description:
      'APIs REST con Node.js y Laravel. Autenticación segura, integraciones con servicios externos y arquitectura robusta.',
  },
  {
    icon: '🐳',
    title: 'Entornos y Despliegue',
    description:
      'Configuración de entornos Docker, pipelines de despliegue y mantenimiento de aplicaciones en producción.',
  },
]
