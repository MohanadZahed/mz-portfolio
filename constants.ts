import { Experience, Link, Project, TechSkillList, TechGroup, SkillLevel } from '~/models/general.js';


export const menuLinks: Link[] = [
    {
        title: 'about',
        url: '/',
        icon: 'i-pajamas-slight-smile'
    },
    {
        title: 'experience',
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
        title: 'mobilcom-debitel – eCare-relaunch [Outsourcing]',
        description: '',
        techStack: ['Angular', 'Typescript', 'HTML & SCSS', 'GraphQL', 'Nx'],
    },
    {
        title: 'Framework-agnostic integration for Emporix and Vue Storefront Middleware',
        description: '',
        techStack: ['Nuxt.js', 'Typescript', 'HTML & SCSS'],
    },
    {
        title: 'HABA pro / HABA play – Performance optimization',
        description: '',
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
        title: 'ottos.ch | sherpaoutdoor [Outsourcing]',
        description: '',
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
        description: '',
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
        title: 'Spar',
        url: '/',
        description: '',
        techStack: ['Javascript', 'jQuery', 'HTML & Less', 'SAP Commerce Cloud', 'Spring Boot'],
    },
    {
        title: 'Dachdecker',
        url: '/',
        description: '',
        techStack: ['Javascript', 'jQuery', 'HTML & Less', 'SAP Commerce Cloud', 'Spring Boot'],
    },
    {
        title: 'supplix',
        url: '/',
        description: '',
        techStack: ['Javascript', 'jQuery', 'HTML & Less', 'SAP Commerce Cloud', 'Spring Boot'],
    },
    {
        title: 'daw-group',
        url: '/',
        description: '',
        techStack: ['Javascript', 'jQuery', 'HTML & Less', 'SAP Commerce Cloud', 'Spring Boot'],
    },
]

export const techSkillList: TechSkillList = {
    [TechGroup.FRONTEND]: [
        {
            name: 'Angular 17',
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
