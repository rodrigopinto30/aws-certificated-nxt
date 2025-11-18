import { MessageSquare, Network, TrendingUp, Users } from 'lucide-react';
import { CertificacionPaso } from '@/types'; 

export const communityBenefits: CertificacionPaso[] = [
    {
        id: 1,
        icon: MessageSquare,
        title: "Q&A with Experts",
        description: "Get your toughest questions answered by certified AWS professionals and seasoned instructors in real-time.",
    },
    {
        id: 2,
        icon: Network,
        title: "Networking Opportunities",
        description: "Connect with peers, potential employers, and collaborators who are also working towards their cloud goals.",
    },
    {
        id: 3,
        icon: TrendingUp,
        title: "Study Groups & Accountability",
        description: "Join structured study groups to stay accountable, review difficult concepts, and practice together.",
    },
    {
        id: 4,
        icon: Users,
        title: "Exclusive Content Access",
        description: "Gain access to community-only resources, webinars, and advanced exam strategy sessions.",
    },
];