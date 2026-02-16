"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionWrapper {
  children: ReactNode;
  className?: string;
  viewport?: boolean;
}

export const MotionWrapper = ({
  children,
  className = "",
  viewport = true,
}: MotionWrapper) => (
  <motion.div
    className={className}
    initial={{ opacity: 0 }}
    transition={{
      opacity: { delay: 0.4, duration: 1.5 },
    }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: viewport ? true : false }}
  >
    {children}
  </motion.div>
);
