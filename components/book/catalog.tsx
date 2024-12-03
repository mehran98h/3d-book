"use client";

import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { motion } from 'framer-motion';
import { Page } from './page';
import { Navigation } from './navigation';
import { CoverPage } from './pages/cover';
import { IntroductionPage } from './pages/introduction';
import { ServicesPage } from './pages/services';
import { EquipmentPage } from './pages/equipment';
import { ContactPage } from './pages/contact';

export const Catalog = () => {
  const [page, setPage] = useState(0);
  const totalPages = 5;

  const handlePageChange = (e: any) => {
    setPage(e.data);
  };

  const handlePrevious = () => {
    const prevButton = document.querySelector('.page-previous') as HTMLElement;
    if (prevButton) prevButton.click();
  };

  const handleNext = () => {
    const nextButton = document.querySelector('.page-next') as HTMLElement;
    if (nextButton) nextButton.click();
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-[1000px] h-[700px]"
      >
        <HTMLFlipBook
          width={500}
          height={700}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1000}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={handlePageChange}
          className="book"
        >
          <Page pageNumber={1}>
            <CoverPage />
          </Page>

          <Page pageNumber={2}>
            <IntroductionPage />
          </Page>

          <Page pageNumber={3}>
            <ServicesPage />
          </Page>

          <Page pageNumber={4}>
            <EquipmentPage />
          </Page>

          <Page pageNumber={5}>
            <ContactPage />
          </Page>
        </HTMLFlipBook>

        <Navigation
          currentPage={page}
          totalPages={totalPages}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </motion.div>
    </div>
  );
};