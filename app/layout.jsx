import { Inter, Merriweather } from 'next/font/google';

import Store from '#/store/store';
import Navbar from '#/components/navbar/page';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const merri = Merriweather({ subsets: ['latin'], variable: '--font-display' });

export const metadata = {
  title: 'Teaching House',
  description: 'Teaching House',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' data-theme='--th-friendly'>
      <body className={`${inter.variable} ${merri.variable} font-sans`}>
        <Store>
          <Navbar />
          {children}
        </Store>
      </body>
    </html>
  );
}
