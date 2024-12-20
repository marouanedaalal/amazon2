import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { FaWhatsapp } from 'react-icons/fa'; // Import de l'icône WhatsApp
import Providers from '@/components/Providers';
import DrawerButton from '@/components/DrawerButton';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '9fti',
  description:
    'Chez [Nom du site], nous privilégions les produits locaux et de saison. Nous travaillons en étroite collaboration avec des producteurs passionnés pour vous offrir des fruits et légumes frais, des viandes de qualité et des épices savoureuses. Découvrez le vrai goût du terroir, livré directement à votre porte.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="drawer">
            <DrawerButton />
            <div className="drawer-content">
              <div className="min-h-screen flex flex-col">
                <Header />
                {children}
                <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                  <p>Copyright © 2024 - All right reserved by 9fti</p>
                </footer>
                {/* Icône WhatsApp toujours visible */}
                <a
                  href="https://wa.me/212707095481" // Remplacez par votre numéro WhatsApp
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full shadow-lg text-4xl p-3 hover:bg-green-600 hover:scale-110 transform transition-all duration-300 z-50"
                  aria-label="Contactez-nous sur WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <Sidebar />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
