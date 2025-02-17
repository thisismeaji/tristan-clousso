import Navigation from "@/components/navigation/Navigation";
import "./globals.css";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header>
          <Navigation/>
        </header>
        {children}
      </body>
    </html>
  );
}
