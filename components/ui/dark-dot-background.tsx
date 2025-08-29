import React from "react";

interface DarkDotBackgroundProps {
  isDarkMode?: boolean;
}

export const DarkDotBackground: React.FC<DarkDotBackgroundProps> = ({ isDarkMode = false }) => {
  const backgroundStyle = React.useMemo(() => ({
    background: isDarkMode
      ? `
        radial-gradient(#374151 1px, transparent 1px),
        linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)
      `
      : `
        radial-gradient(#92400e 1px, transparent 1px),
        linear-gradient(135deg, #fefbf0 0%, #f5deb3 25%, #deb887 50%, #f5deb3 75%, #fefbf0 100%)
      `,
    backgroundSize: '20px 20px, 100% 100%'
  }), [isDarkMode]);

  return (
    <div
      key={isDarkMode ? 'dark' : 'light'} // Force re-render on theme change
      className="absolute inset-0 pointer-events-none transition-all duration-300"
      style={backgroundStyle}
    />
  );
};
