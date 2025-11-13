import { ElementType } from "react";

export interface Metrica {
    id: number;
    value: string;
    label: string;
    icon: ElementType;
}

export interface AwsCertification {
    id: number;
    level: 'Foundational' | 'Associate' | 'Professional' | 'Specialty';
    title: string;
    path: string;
    description: string;
    icon: ElementType;
}

export interface Testimonios {
    id: number;
    quote: string;
    author: string;
    role: string;
    avatarUrl: string;
}