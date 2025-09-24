'use client';

import React from 'react';

interface TimePeriodStackProps {
  title: string;
  period: string;
  description: string;
  // Image and additional content will be added here later
  imageUrl?: string;
  additionalContent?: React.ReactNode;
}

export const TimePeriodStack: React.FC<TimePeriodStackProps> = ({
  title,
  period,
  description,
  imageUrl,
  additionalContent
}) => {
  return (
    <div className="relative w-full h-full">
      {/* Stack Container */}
      <div className="absolute inset-0 flex flex-col">
        {/* Header Stack Layer */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-t-lg border-b border-slate-600">
          <h3 className="text-2xl font-bold text-white mb-2 font-serif">
            {title}
          </h3>
          <p className="text-slate-300 text-sm font-serif">
            {period}
          </p>
        </div>

        {/* Content Stack Layer */}
        <div className="flex-1 bg-gradient-to-br from-slate-700 to-slate-600 p-6">
          {/* Image placeholder for future use */}
          {imageUrl && (
            <div className="mb-4">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-32 object-cover rounded-md"
              />
            </div>
          )}

          {/* Description */}
          <p className="text-slate-200 text-sm leading-relaxed font-serif mb-4">
            {description}
          </p>

          {/* Additional content placeholder */}
          {additionalContent && (
            <div className="mt-4">
              {additionalContent}
            </div>
          )}
        </div>

        {/* Bottom Stack Layer */}
        <div className="bg-gradient-to-br from-slate-600 to-slate-500 p-4 rounded-b-lg">
          <div className="text-xs text-slate-300 text-center font-serif">
            Literary Movement
          </div>
        </div>
      </div>

      {/* Stack Shadow Effect */}
      <div className="absolute inset-0 transform translate-x-1 translate-y-1 bg-slate-900 rounded-lg -z-10 opacity-50"></div>
      <div className="absolute inset-0 transform translate-x-2 translate-y-2 bg-slate-950 rounded-lg -z-20 opacity-30"></div>
    </div>
  );
};