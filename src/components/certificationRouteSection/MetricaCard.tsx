import { motion } from "framer-motion";
import { Metrica } from "@/types";

interface MetricaCardProps {
  met: Metrica;
}

const MetricaCard = ({ met }: MetricaCardProps) => {
  return (
    <motion.div
      data-testid="metrica-props-card"
      className="flex-[0_0_100%] flex flex-col justify-center items-center py-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="text-7xl font-bold">{met.label}</div>
      <div className="text-7xl text-indigo-500 font-extrabold mt-4">
        {met.value}
      </div>
    </motion.div>
  );
};

export default MetricaCard;
