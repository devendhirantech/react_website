import React from "react";
import { motion } from "framer-motion";
export default function Button({ children, className, primary = false, ...props }) {
  return (
    <motion.button  
     className={className}
     {...props}
    >
    {children}
    </motion.button>
  );
}