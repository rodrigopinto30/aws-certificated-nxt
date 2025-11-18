import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud } from "lucide-react";
import { AwsCertification } from "@/types";

interface CertificationCardProps {
  cert: AwsCertification;
}

const levelColors = {
  Foundational: "bg-gray-500 hover:bg-gray-600",
  Associate: "bg-blue-500 hover:bg-blue-600",
  Professional: "bg-orange-500 hover:bg-orange-600",
  Specialty: "bg-red-500 hover:bg-red-600",
};

const CertificationCard = ({ cert }: CertificationCardProps) => {
  const IconComponent = cert.icon;
  const levelClass = levelColors[cert.level] || "bg-gray-500";

  return (
    <Card
      className="flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-2 border-gray-200"
      data-testid="certification-card"
    >
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="flex flex-col space-y-1.5">
          <CardTitle className="text-lg font-semibold leading-tight">
            {cert.title}
          </CardTitle>
          <div className="flex space-x-2 pt-1">
            <Badge className={levelClass}>{cert.level}</Badge>
            <Badge variant="secondary" className="bg-gray-100 text-gray-700">
              {cert.path} Path
            </Badge>
          </div>
        </div>
        {/* Icono de la certificación */}
        <Cloud
          className="h-8 w-8 text-blue-600"
          data-testid="certification-icon"
        />
      </CardHeader>
      <CardContent className="pt-2">
        <CardDescription className="text-sm text-gray-600">
          {cert.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default CertificationCard;
