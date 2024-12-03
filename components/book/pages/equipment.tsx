"use client";

import React from 'react';

export const EquipmentPage: React.FC = () => {
  return (
    <div className="prose max-w-none">
      <h2 className="text-3xl font-bold mb-6">Our Equipment</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">CNC Machines</h3>
          <ul className="list-disc pl-6">
            <li>3-axis and 4-axis milling machines</li>
            <li>CNC Turning (400mm diameter, 700mm length)</li>
            <li>4-axis Boring Machine</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Manual Machines</h3>
          <ul className="list-disc pl-6">
            <li>1.5m Tabriz manual turning machine</li>
            <li>Bulgarian manual milling machine</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Cutting Equipment</h3>
          <ul className="list-disc pl-6">
            <li>Laser cutting (up to 20mm)</li>
            <li>Plasma cutting</li>
            <li>Punch cutting</li>
            <li>CNC Bending Machine</li>
          </ul>
        </div>
      </div>
    </div>
  );
};