import { Zap, Clock, CheckCircle } from 'lucide-react';
import { CertificacionPaso } from '@/types'; 

export const labSteps: CertificacionPaso[] = [
  {
    id: 1,
    icon: Zap,
    title: "Step-by-Step Guidance",
    description:
      "You’ll start with detailed instructions to build the AWS resource without getting lost.",
  },
  {
    id: 2,
    icon: Clock,
    title: "Timed Challenge",
    description:
      "Then the environment resets. You must replicate the solution on your own, simulating exam conditions.",
  },
  {
    id: 3,
    icon: CheckCircle,
    title: "Verification and Feedback",
    description:
      "Our system automatically validates your deployment and gives you instant feedback to correct mistakes.",
  },
];
