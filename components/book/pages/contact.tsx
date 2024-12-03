"use client";

import React from 'react';

export const ContactPage: React.FC = () => {
  return (
    <div className="prose max-w-none">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <div className="space-y-4">
        <p className="flex items-center gap-2">
          <span className="font-semibold">Address:</span>
          Tehran, Meydan Fath, Alley 15
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold">Phone:</span>
          +98 918 754 2732
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold">Email:</span>
          pahneparscnc@gmail.com
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold">Website:</span>
          pahnepars.ir
        </p>
      </div>
    </div>
  );
};