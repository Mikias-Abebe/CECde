// src/app/layout.tsx
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
        
        {/* Persistent Navbar across all pages */}
        <Navbar />

        {/* Unique Page Content */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
       

      </body>
    </html>
  );
}