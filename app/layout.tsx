import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import getCurrentUser from './actions/getCurrentUser';
import ClientOnly from './components/ClientOnly';
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import Navbar from './components/navbar/Navbar';
import './globals.css';
import ToasterProvider from './providers/ToasterProvider';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  console.log("layout",currentUser)
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
