import { motion } from "framer-motion";
import { stairAnimation } from "./Stairs.data";

export function Stairs() {
  const reverseIndex = (index: number) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
  };
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
}
