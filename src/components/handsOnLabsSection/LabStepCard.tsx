import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CertificacionPaso } from "@/types";

interface LabStepCardProps {
  step: CertificacionPaso;
}
const LabStepCard = ({ step }: LabStepCardProps) => {
  const IconComponent = step.icon;

  return (
    <Card className="flex flex-col border-none shadow-none bg-white p-4">
      <CardHeader className="p-0 pb-3 flex flex-row items-center space-x-4">
        <div className="p-3 rounded-full bg-sky-100 text-sky-600 flex-shrink-0">
          <IconComponent
            className="h-6 w-6"
            aria-label={`Icono de ${step.title}`}
          />
        </div>
        <CardTitle className="text-xl font-semibold text-gray-800 m-0">
          {step.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <CardDescription className="text-gray-600 text-sm">
          {step.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default LabStepCard;
