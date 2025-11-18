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

export default BenefitCard;
