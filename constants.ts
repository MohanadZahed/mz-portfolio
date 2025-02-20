import { Experience, Project, TechSkillList, TechGroup, SkillLevel, MenuLink } from '~/models/general.js';

export const menuLinks: MenuLink[] = [
    {
        title: 'about',
        url: '/',
        icon: 'i-pajamas-slight-smile'
    },
    {
        title: 'experience',
        xsTitle: 'experience-xs',
        url: '/experience',
        icon: 'i-uil-suitcase'
    },
    {
        title: 'projects',
        url: '/projects',
        icon: 'i-lucide-pencil-ruler'
    },
    {
        title: 'skills',
        url: '/skills',
        icon: 'i-lucide-brain-cog'
    },
]

export const experiences: Experience[] = [
    {
        title: 'mw.jobTitle',
        company: 'Medienwerft GmbH | Hamburg',
        date: 'mw.date',
        activities: ['mw.activity1', 'mw.activity2', 'mw.activity3', 'mw.activity4', 'mw.activity5'],
        titleMinWidth: '12.125rem',
    },
    {
        title: 'merentis.jobTitle',
        company: 'MERENTIS GmbH | Bremen',
        date: 'merentis.date',
        activities: ['merentis.activity1', 'merentis.activity2', 'merentis.activity3'],
        titleMinWidth: '13.63rem'
    },
]

export const projects: Project[] = [
    {
        title: 'Sozialversicherung für Landwirtschaft, Forsten und Gartenbau',
        description: 'svlfg',
        techStack: ['Angular', 'SAP Composable Storefront', 'Typescript', 'HTML & SCSS', 'SAP Commerce Cloud'],
    },
    {
        title: 'mobilcom-debitel – eCare-relaunch',
        description: 'mobilcom',
        video: '/Ecare-Relaunch-usecase.mp4',
        videoTitle: 'mobilcom-debitel E-care Relaunch Usecase',
        techStack: ['Angular', 'Typescript', 'HTML & SCSS', 'GraphQL', 'Nx'],
    },
    {
        title: 'Agnostic integration for Emporix and Vue Storefront Middleware',
        description: 'emporix',
        techStack: ['Nuxt.js', 'Typescript', 'Alokai', 'Emporix'],
    },
    {
        title: 'HABA pro | HABA play',
        description: 'haba',
        techStack: ['Angular', 'SAP Composable Storefront', 'Typescript', 'HTML & SCSS', 'SAP Commerce Cloud'],
        links: [
            {
                title: 'HABA Play',
                url: 'https://www.haba-play.com/'
            },
            {
                title: 'HABA Pro',
                url: 'https://www.haba-pro.com/'
            }
        ]
    },
    {
        title: 'ottos.ch | sherpa outdoor',
        description: 'ottos',
        techStack: ['Angular', 'SAP Composable Storefront', 'Typescript', 'HTML & SCSS', 'SAP Commerce Cloud'],
        links: [
            {
                title: 'ottos.ch',
                url: 'https://www.ottos.ch/'
            },
            {
                title: 'sherpaoutdoor',
                url: 'https://www.sherpaoutdoor.com/'
            }
        ]
    },
    {
        title: 'mein schöner Garten | Landgard | Ordertage',
        description: 'landgard',
        techStack: ['Angular', 'SAP Composable Storefront', 'Typescript', 'HTML & SCSS', 'SAP Commerce Cloud'],
        links: [
            {
                title: 'mein-schoener-garten',
                url: 'https://www.mein-schoener-garten.de/'
            },
            {
                title: 'Landgard',
                url: 'https://www.mylandgard.de/'
            },
            {
                title: 'Ordertage',
                url: 'https://ordertage.mylandgard.de/'
            }
        ]
    },
    {
        title: 'SPAR',
        url: 'https://www.spar.hu/onlineshop/',
        description: 'spar',
        techStack: ['Javascript', 'jQuery', 'HTML & Less', 'SAP Commerce Cloud', 'Spring Boot'],
    },
    {
        title: 'Dachdecker',
        url: 'https://www.deg-sued.de/dde/de/DESuedOnlineShop',
        description: 'dachdecker',
        techStack: ['Javascript', 'jQuery', 'HTML & Less', 'SAP Commerce Cloud', 'Spring Boot'],
    },
    {
        title: 'supplix',
        url: 'https://www.supplix.shop/',
        description: 'supplix',
        techStack: ['Javascript', 'jQuery', 'HTML & Less', 'SAP Commerce Cloud', 'Spring Boot'],
    },
    {
        title: 'daw-group',
        url: 'https://www.farbtex.de/de/unternehmen/cms-gruppe',
        description: 'daw',
        techStack: ['Javascript', 'jQuery', 'HTML & Less', 'SAP Commerce Cloud', 'Spring Boot'],
    },
    {
        title: 'FroSTA Work Instruction',
        description: '',
        techStack: ['Android Native', 'Ionic', 'HTML & SCSS', 'Java', 'Angular 6', 'Jax-Rs ', 'SQL-Server'],
    },
    {
        title: 'LSW Kommissionierung',
        description: '',
        techStack: ['Ionic', 'HTML & SCSS', 'Java', 'Jax-Rs', 'SQL-Server', 'SAP JCo'],
    },
    {
        title: 'Daimler File Search',
        description: '',
        techStack: ['Java', 'SQL-Server', 'SAP JCo'],
    },
    {
        title: 'Kamper Einrechnungsapp ',
        description: '',
        techStack: ['Xamarin Cross-Platform', 'C#', 'XML'],
    },
]

export const techSkillList: TechSkillList = {
    [TechGroup.FRONTEND]: [
        {
            name: 'Angular 18',
            skillLevel: SkillLevel.EXPERT,
        },
        {
            name: 'SAP Composable Storefront (Spartacus)',
            skillLevel: SkillLevel.EXPERT,
        },
        {
            name: 'Vue 3',
            skillLevel: SkillLevel.INTERMEDIATE,
        },
        {
            name: 'Nuxt 3',
            skillLevel: SkillLevel.INTERMEDIATE,
        },
        {
            name: 'Typescript',
            skillLevel: SkillLevel.EXPERT,
        },
        {
            name: 'Javascript',
            skillLevel: SkillLevel.EXPERT,
        },
        {
            name: 'JQuery',
            skillLevel: SkillLevel.EXPERT,
        },
        {
            name: 'SCSS',
            skillLevel: SkillLevel.EXPERT,
        },
        {
            name: 'Css',
            skillLevel: SkillLevel.EXPERT,
        },
        {
            name: 'Tailwind CSS',
            skillLevel: SkillLevel.INTERMEDIATE,
        },
        {
            name: 'Bootstrap',
            skillLevel: SkillLevel.INTERMEDIATE,
        },
        {
            name: 'Html',
            skillLevel: SkillLevel.EXPERT,
        },
        {
            name: 'RxJS',
            skillLevel: SkillLevel.EXPERT,
        },
        {
            name: 'NgRx',
            skillLevel: SkillLevel.EXPERT,
        },
        {
            name: 'RESTful-API',
            skillLevel: SkillLevel.EXPERT,
        },
        {
            name: 'GraphQL-API',
            skillLevel: SkillLevel.INTERMEDIATE,
        },
        {
            name: 'Supabase',
            skillLevel: SkillLevel.JUNIOR,
        },
        {
            name: 'storybook',
            skillLevel: SkillLevel.INTERMEDIATE,
        },
        {
            name: 'Ionic',
            skillLevel: SkillLevel.INTERMEDIATE,
        },
        {
            name: 'Android Native (Java)',
            skillLevel: SkillLevel.JUNIOR,
        },
        {
            name: 'Xamarin',
            skillLevel: SkillLevel.JUNIOR,
        },
        {
            name: 'Cypress',
            skillLevel: SkillLevel.INTERMEDIATE,
        }
    ],
    [TechGroup.BACKEND]: [
        {
            name: 'Java',
            skillLevel: SkillLevel.INTERMEDIATE,
        },
        {
            name: 'Nodejs',
            skillLevel: SkillLevel.JUNIOR,
        },
        {
            name: 'JSTL',
            skillLevel: SkillLevel.INTERMEDIATE,
        },
        {
            name: 'Springboot',
            skillLevel: SkillLevel.JUNIOR,
        },
        {
            name: 'SQL Server',
            skillLevel: SkillLevel.INTERMEDIATE,
        },
        {
            name: '.NET',
            skillLevel: SkillLevel.JUNIOR,
        },
        {
            name: 'C#',
            skillLevel: SkillLevel.INTERMEDIATE,
        },
        {
            name: 'Solidity',
            skillLevel: SkillLevel.JUNIOR,
        }
    ],
    [TechGroup.DEVOPS]: [
        {
            name: 'GIT',
            skillLevel: SkillLevel.EXPERT,
        },
        {
            name: 'CI/CD',
            skillLevel: SkillLevel.JUNIOR,
        },
        {
            name: 'Docker',
            skillLevel: SkillLevel.JUNIOR,
        }
    ]
}

export const webDevelopmentTools = [
    "Responsive Design",
    "NPM",
    "SSR",
    "SEO",
    "State Management",
    "Lazy loading",
    "Unit and E2E testing",
    "PWA",
    "API Integration",
    "Monorepo and Polyrepo architecture",
    "Atom Design",
    "Accessibility",
    "ESLint",
    "StyleLint",
    "Prettier",
    "Husky"
];
