import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { communityBenefits } from "@/data/community-data";
import { CertificacionPaso } from "@/types";

interface BenefitCardProps {
  benefit: CertificacionPaso;
}

const BenefitCard = ({ benefit }: BenefitCardProps) => {
  const IconComponent = benefit.icon;

  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <IconComponent
        className="h-10 w-10 text-indigo-500 mb-4"
        aria-label={`Icon for ${benefit.title}`}
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {benefit.title}
      </h3>
      <p className="text-sm text-gray-500">{benefit.description}</p>
    </div>
  );
};

const CommunitySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl"
            data-testid="community-title"
          >
            The Power of Community: Learn Together
          </h2>
          <p
            className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
            data-testid="community-subtitle"
          >
            Don't learn in isolation. Join thousands of cloud enthusiasts and
            certified engineers to share knowledge, solve problems, and
            accelerate your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {communityBenefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            className="bg-indigo-500 hover:bg-indigo-600 text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg transition duration-300"
            size="lg"
          >
            Join the Exclusive Community Today!
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Access included with your course enrollment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
