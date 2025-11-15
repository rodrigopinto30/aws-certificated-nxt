"use client";
import { pathData } from "@/data/path-data";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { useEffect, useCallback } from "react";
import MetricaCard from "./MetricaCard";
import { Metrica } from "@/types";

const CertificationRouteSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const autoplayDelay = 4000;
  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [emblaApi]);

  useEffect(() => {
    const stop = autoplay();
    return stop;
  }, [autoplay]);

  return (
    <section className="overflow-hidden " role="region" ref={emblaRef}>
      <div className="flex" data-testid="metrica-card">
        {pathData.map((item: Metrica, index) => (
          <MetricaCard key={index} met={item} />
        ))}
      </div>
    </section>
  );
};

export default CertificationRouteSection;
