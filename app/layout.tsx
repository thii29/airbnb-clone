import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import ClientOnly from './components/ClientOnly';
import Navbar from './components/navbar/Navbar';
import './globals.css';
import Modal from './components/modals/Modal';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <Modal actionLabel="Submit" title='Hi meow meow' isOpen/>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
