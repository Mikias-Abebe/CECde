// src/app/layout.tsx
import './globals.css';
import Navbar from './components/Navbar';

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

        {/* Persistent Footer across all pages */}
        <footer className="bg-slate-950 text-slate-400 py-8 px-6 text-center text-xs border-t border-slate-900">
          <p className="font-semibold text-slate-300">Christ’s Evangelical Church in Munich | የክርስቶስ ወንጌላዊት ቤተክርስቲያን</p>
          <p className="mt-1 text-slate-400">Rudolf-Diesel-Straße 9, 85221 Dachau-Ost</p>
          <p className="mt-2 text-slate-500">© {new Date().getFullYear()} CEC Munich. All rights reserved.</p>
        </footer>

      </body>
    </html>
  );
}