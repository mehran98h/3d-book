"use client";

import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

interface PageProps {
  children: React.ReactNode;
  pageNumber: number;
}

export const Page = forwardRef<HTMLDivElement, PageProps>(({ children, pageNumber }, ref) => {
  return (
    <div ref={ref} className="w-full h-full bg-white shadow-lg rounded-r-lg p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative h-full"
      >
        {children}
        <div className="absolute bottom-4 right-4 text-gray-400">
          {pageNumber}
        </div>
      </motion.div>
    </div>
  );
});

Page.displayName = 'Page';