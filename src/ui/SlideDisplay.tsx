import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface SlideDisplayProps {
  itemsArray: string[];
  interval?: number; 
}

function SlideDisplay({ itemsArray, interval = 4000 }: SlideDisplayProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % itemsArray.length);
    }, interval);

    return () => clearInterval(timer);
  }, [itemsArray.length, interval]);

  return (
    <div className="inline-block overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          transition={{
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96],}}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {itemsArray[currentIndex]},
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default SlideDisplay;
