"use client";

import React from 'react';

export const CoverPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-4xl font-bold mb-4">Pahne Pars CNC</h1>
      <h2 className="text-2xl mb-8">Industrial Equipment and Services Catalog</h2>
      <div className="space-y-2 text-gray-600">
        <p>📍 Tehran, Meydan Fath, Alley 15</p>
        <p>📞 +98 918 754 2732</p>
        <p>📧 pahneparscnc@gmail.com</p>
        <p>🌐 pahnepars.ir</p>
      </div>
    </div>
  );
};