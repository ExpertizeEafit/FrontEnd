export interface Requirement {
    id: string;
    name: string;
    description: string;
    status: string;
}

export interface StyleProps {
    classes: string[];
    icon: string;
}

export interface Seniority {
    name: string;
    description: string;
    requirements?: Requirement[];
    priorTo?: string[];
    style: StyleProps;
    type: string;

}