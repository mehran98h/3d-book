"use client";

import React from 'react';

export const ServicesPage: React.FC = () => {
  return (
    <div className="prose max-w-none">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Industrial Component Manufacturing</h3>
          <p>High-precision manufacturing for various industries with mass production capabilities.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Industrial Welding</h3>
          <p>CO2 and Argon welding services for high-quality assembly requirements.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Metal Cutting and Bending</h3>
          <ul className="list-disc pl-6">
            <li>Laser Cutting (up to 20mm thickness)</li>
            <li>Plasma and Punch Cutting</li>
            <li>CNC Bending for complex curves</li>
          </ul>
        </div>
      </div>
    </div>
  );
};