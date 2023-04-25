export interface ControlsProps {
    name: string;
    url: string;
}

export interface Requirement {
    id: string;
    name: string;
    description: string;
    status: string;
    controls?: ControlsProps[];
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
    status: string;
    type: string;

}