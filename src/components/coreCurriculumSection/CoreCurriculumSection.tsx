import { awsCertifications } from "@/data/aws-certifications";
import CertificationCard from "./CertificationCard";

const CoreCurriculumSection = () => {
  return (
    <section
      id="section-2"
      data-testid="core-curriculum-section"
      className="h-fit w-full snap-start flex items-center justify-center  text-gray-700 p-4"
    >
      <div className="max-w-7xl w-full mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
          Master the AWS Core Services
        </h2>
        <p className="text-xl md:text-2xl font-light mb-12">
          Start with Cloud Computing fundamentals, then choose your
          specialization path among the 12 key certifications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-auto">
          {awsCertifications.map((cert: any) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCurriculumSection;
