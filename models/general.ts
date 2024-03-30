export interface Link {
    title: string;
    url: string;
    icon?: string;
}

export interface Project {
    title: string;
    description: string;
    techStack: string[];
    url?: string;
    links?: Link[];
    video?: string;
    videoTitle?: string;
}

export interface Experience {
    title: string;
    company: string;
    date: string;
    activities: string[];
    titleMinWidth: string;

}

export enum TechGroup {
    FRONTEND = 'Frontend',
    BACKEND = 'Backend',
    DEVOPS = 'DevOps',
}

export enum SkillLevel {
    JUNIOR = 'Junior',
    INTERMEDIATE = 'Intermediate',
    EXPERT = 'Expert',
}

export interface TechSkill {
    name: string;
    skillLevel: SkillLevel;
}

export type TechSkillList = {
    [key in TechGroup]: TechSkill[];
};
