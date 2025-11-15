import { ElementType } from "react";

export interface Metrica {
    id: number;
    value: string;
    label: string;
    icon: ElementType;
}

export interface AwsCertification {
    id: number;
    title: string;
    level: 'Foundational' | 'Associate' | 'Professional' | 'Specialty';
    description: string;
    path: string;
    // icon: ElementType;
    icon: string;
}

export interface Testimonios {
    id: number;
    quote: string;
    author: string;
    role: string;
    avatarUrl: string;
}