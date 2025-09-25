import localFont from 'next/font/local';

export const calsans = localFont({
  src: './CalSans-SemiBold.woff2',
  variable: '--font-calsans',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});