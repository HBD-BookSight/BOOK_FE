"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const pageTransitonTemplate = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const layoutVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={layoutVariants}
        className="relative size-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default pageTransitonTemplate;
