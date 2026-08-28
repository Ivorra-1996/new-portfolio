export type ProjectIcon = 'hand' | 'checklist' | 'coins' | 'towers';

export type Project = {
  title: string;
  tag: string;
  description: string;
  stack: string[];
  tech: string[];
  link: string;
  icon: ProjectIcon;
};

export const projects: Project[] = [
  {
    title: 'Lavado de manos con IA',
    tag: 'Frontend · IA',
    description:
      'Demo que reconoce y supervisa cada paso del lavado de manos mediante un modelo de inteligencia artificial.',
    stack: ['Next.js', 'TensorFlow', 'YOLO'],
    tech: ['nextjs', 'tensorflow', 'yolo'],
    link: 'https://github.com/ADOX-SA/lavadodemanos_demo',
    icon: 'hand',
  },
  {
    title: '[Ejemplo] Gestor de tareas',
    tag: 'Ejemplo · Fullstack',
    description: 'Tarjeta de muestra para probar el filtro por tecnología.',
    stack: ['React', 'Node.js', 'TypeScript'],
    tech: ['react', 'node', 'typescript'],
    link: '#',
    icon: 'checklist',
  },
  {
    title: '[Ejemplo] API de pagos',
    tag: 'Ejemplo · Backend',
    description: 'Tarjeta de muestra para probar el filtro por tecnología.',
    stack: ['Node.js', 'Express', 'PostgreSQL'],
    tech: ['node', 'express', 'postgresql'],
    link: '#',
    icon: 'coins',
  },
  {
    title: '[Ejemplo] Landing corporativa',
    tag: 'Ejemplo · Frontend',
    description: 'Tarjeta de muestra para probar el filtro por tecnología.',
    stack: ['Next.js', 'React', 'TypeScript'],
    tech: ['nextjs', 'react', 'typescript'],
    link: '#',
    icon: 'towers',
  },
];

export const filters = [
  { label: 'Todos', value: 'all' },
  { label: 'Next.js', value: 'nextjs' },
  { label: 'React', value: 'react' },
  { label: 'Node.js', value: 'node' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'TensorFlow', value: 'tensorflow' },
];
