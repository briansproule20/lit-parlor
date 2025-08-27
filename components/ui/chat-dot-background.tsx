import React from "react";

export const ChatDotBackground: React.FC = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `
          radial-gradient(#1a3d1a 1px, transparent 1px),
          linear-gradient(135deg, #fefbf0 0%, #f5deb3 25%, #deb887 50%, #f5deb3 75%, #fefbf0 100%)
        `,
        backgroundSize: '20px 20px, 100% 100%'
      }}
    />
  );
};
