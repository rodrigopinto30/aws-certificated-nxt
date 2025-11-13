import Image from "next/image";
import React from "react";
import awsImage from "../../../public/aws-devops-professional-engineer-course-training-online-banner.png";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className=" h-screen w-full snap-start flex flex-col items-center justify-center transition-colors duration-500">
      <div className="flex flex-col w-full text-center">
        <span className="text-7xl font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-800">
          Accelerate Your Path: Become a Certified AWS Cloud Architect
        </span>
        <p className="text-xl md:text-2xl font-light mb-12 mt-12">
          The Moment to Build Your Future is Now. Launch Your Cloud Career
          Transformation Today.
        </p>
        {/* <div className="flex flex-row space-x-3">
          <Button>Get started</Button>
          <Button>Get started 2</Button>
        </div> */}
      </div>

      <Button>Get Credits</Button>
    </section>
  );
};

export default HeroSection;
