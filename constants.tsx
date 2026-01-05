
import React from 'react';
import { Brain, Heart, Search, Users, BookOpen, ClipboardCheck } from 'lucide-react';
import { Service, Professional } from './types';

export const SERVICES: Service[] = [
  {
    id: 'psicoterapia',
    title: 'Psicoterapia Clínica',
    description: 'Atendimento individualizado focado em depressão, ansiedade, traumas e desenvolvimento pessoal.',
    icon: 'Heart'
  },
  {
    id: 'neuropsicologia',
    title: 'Avaliação Neuropsicológica',
    description: 'Investigação profunda das funções cognitivas e emocionais para diagnósticos precisos.',
    icon: 'Brain'
  },
  {
    id: 'pesquisa',
    title: 'Hub de Investigação',
    description: 'Desenvolvimento de protocolos baseados em evidências e estudos científicos sobre comportamento humano.',
    icon: 'Search'
  },
  {
    id: 'grupos',
    title: 'Terapia de Grupo',
    description: 'Espaços de acolhimento compartilhado e suporte mútuo mediado por especialistas.',
    icon: 'Users'
  }
];

export const CLINICAL_STRATEGY_FACTORS = {
  center: {
    title: 'Equilíbrio',
    subtitle: 'Núcleo Central',
    image: 'images/equilibrio.png'
  },
  topLeft: {
    title: 'Psicologia e Psicoterapias',
    subtitle: '(Nível Psicoafetivo)',
    image: 'images/psicologiaepsicoterapia.png'
  },
  topRight: {
    title: 'Mindfulness',
    subtitle: '(Nível Sensorial)',
    image: 'images/mindfullness.png'
  },
  bottomLeft: {
    title: 'Supervisão e Investigação',
    subtitle: '(Nível Intelectual)',
    image: 'images/supervisaoeinvestigacao.png'
  },
  bottomRight: {
    title: 'Clínica e Saúde',
    subtitle: '(Nível Físico)',
    image: 'images/clinicaesaude.png'
  }
};


export const PROFESSIONALS: Professional[] = [
  {
    id: 'prof-1',
    name: 'Dra. Andreia Paiva Moura',
    role: 'Lorem ipsum dolor sit amet',
    specialty: 'Lorem ipsum dolor sit amet',
    licenseNumber: '00001',
    curiosities: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ],
    bio: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
      'Cras venenatis euismod malesuada. Nullam ac erat ante. Pellentesque habitant morbi tristique senectus et netus.',
      'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.'
    ],
    education: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    ],
    image: 'images/andreia-paiva.png'
  },
  {
    id: 'prof-2',
    name: 'Maria Castro Paupério',
    role: 'Dolor sit amet consectetur',
    specialty: 'Consectetur adipiscing elit',
    licenseNumber: '00002',
    curiosities: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ],
    bio: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    ],
    education: [
      'Lorem ipsum dolor sit amet',
      'Consectetur adipiscing elit',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    ],
    image: 'images/maria-castro-pauperio.png'
  },
  {
    id: 'prof-3',
    name: 'Doutora Ana Leite',
    role: 'Lorem ipsum dolor sit',
    specialty: 'Dolor sit amet',
    licenseNumber: '00003',
    curiosities: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ],
    bio: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
      'Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
      'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.'
    ],
    education: [
      'Lorem ipsum dolor sit amet',
      'Consectetur adipiscing elit',
      'Sed do eiusmod tempor incididunt ut labore'
    ],
    image: 'images/ana-leite.png'
  },
  {
    id: 'prof-4',
    name: 'Dra. Mariana Miguel Castro',
    role: 'Lorem ipsum dolor',
    specialty: 'Sit amet consectetur',
    licenseNumber: '00004',
    curiosities: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Ut enim ad minim veniam, quis nostrud exercitation.'
    ],
    bio: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet magna quam.',
      'Praesent in libero vel turpis pellentesque egestas sit amet vel nunc.',
      'Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.'
    ],
    education: [
      'Lorem ipsum dolor sit amet',
      'Consectetur adipiscing elit',
      'Sed do eiusmod tempor incididunt ut labore'
    ],
    image: 'images/mariana-miguel-castro.png'
  },
  {
    id: 'prof-5',
    name: 'Dra. Cláudia Bernardo',
    role: 'Dolor sit amet',
    specialty: 'Consectetur adipiscing elit',
    licenseNumber: '00005',
    curiosities: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    ],
    bio: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    ],
    education: [
      'Lorem ipsum dolor sit amet',
      'Consectetur adipiscing elit',
      'Sed do eiusmod tempor incididunt ut labore'
    ],
    image: 'images/claudia-bernardo.png'
  },
  {
    id: 'prof-6',
    name: 'Dra. Maria Matos',
    role: 'Dolor sit amet',
    specialty: 'Consectetur adipiscing elit',
    licenseNumber: '00005',
    curiosities: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    ],
    bio: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    ],
    education: [
      'Lorem ipsum dolor sit amet',
      'Consectetur adipiscing elit',
      'Sed do eiusmod tempor incididunt ut labore'
    ],
    image: 'images/maria-matos.png'
  }
];


export const TESTIMONIALS = [
  {
    id: 1,
    name: "Mariana Costa",
    role: "Paciente",
    content: "O CCIAPM mudou a minha forma de encarar o tratamento. Sentir que há uma base científica por trás de cada sessão traz uma segurança imensa.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "Dr. Alberto Schmidt",
    role: "Paciente",
    content: "A infraestrutura do hub de investigação é comparável aos melhores centros europeus. A integração clínica é exemplar e inovadora.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "João Pereira",
    role: "Paciente",
    content: "O relatório detalhado que recebi foi um divisor de águas para o meu diagnóstico. Profissionalismo e clareza absoluta em todo o processo.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
  }
];

export const ICONS: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
  Search: <Search className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  ClipboardCheck: <ClipboardCheck className="w-6 h-6" />
};
