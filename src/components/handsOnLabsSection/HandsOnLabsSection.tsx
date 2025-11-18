import { labSteps } from "@/data/lab-data";
import LabStepCard from "./LabStepCard";

const HandsOnLabsSection = () => {
  return (
    <section className="mb-20 mt-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <h2
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl"
            data-testid="section-title"
          >
            Hands-On Labs: Practice Makes Perfect
          </h2>
          <p
            className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
            data-testid="section-subtitle"
          >
            Learn how to deploy real AWS services without the risk of incurring
            costs. Our methodology prepares you for both the job environment and
            the challenges of the certification exam.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-testid="lab-container"
        >
          {labSteps.map((step) => (
            <LabStepCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HandsOnLabsSection;
