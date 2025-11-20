import { ElementType } from "react";
import { LucideIcon } from 'lucide-react';

export interface Metrica {
    id: number;
    value: string;
    label: string;
    proposal?: string;
    icon?: ElementType;
}

export type AwsCertificationLevel = 
  | "Foundational"
  | "Associate"
  | "Professional"
  | "Specialty";
export interface AwsCertification {
    id: number;
    title: string;
    level: AwsCertificationLevel;
    description: string;
    path: string;
    // icon: ElementType;
    icon?: string;
}

export interface Testimonios {
    id: number;
    quote: string;
    author: string;
    role: string;
    avatarUrl: string;
}

export interface CertificacionPaso {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}