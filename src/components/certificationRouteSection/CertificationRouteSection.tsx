import React from "react";
import { pathData } from "@/data/path-data";

const CertificationRouteSection = () => {
  return (
    <section className="bg-pink-200 h-screen w-full snap-start flex flex-col items-center justify-center transition-colors duration-500">
      <div className="max-w-7xl w-full mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
          Master the AWS Core Services
        </h2>
        <p className="text-xl md:text-2xl font-light mb-12">
          Start with Cloud Computing fundamentals, then choose your
          specialization path among the 12 key certifications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 h-auto">
          {pathData.map((path: any, index: number) => (
            <div key={index}>{path.metrica}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationRouteSection;
