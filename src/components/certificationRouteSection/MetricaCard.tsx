import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { awsCertifications } from "@/data/aws-certifications";
import { Badge } from "@/components/ui/badge";
import { Cloud } from "lucide-react";

interface MetricaCardProps {
  // met: Metrica;
  met: any;
}

// metrica: "Average Salary Increase",
// value: 18000,
// propouse
const MetricaCard = ({ met }: MetricaCardProps) => {
  return (
    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-2 border-gray-200">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="flex flex-col space-y-1.5">
          <CardTitle className="text-lg font-semibold leading-tight">
            {met.metrica}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <CardDescription className="text-sm text-gray-600"></CardDescription>
      </CardContent>
    </Card>
  );
};

export default MetricaCard;
