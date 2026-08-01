import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-sky-50/50 text-slate-800 font-sans">
      
      {/* Shared Header */}
      

      {/* Page Content */}
      <main className="max-w-4xl mx-auto py-16 px-6">
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-sky-100 shadow-sm space-y-4">
          <h1 className="text-3xl font-bold text-sky-950">Über uns / About Us</h1>
          <hr className="border-sky-100" />
          <p className="text-slate-600 leading-relaxed text-base">
            Willkommen bei Christ’s Evangelical Church in München / Dachau. 
            Wir sind eine lebendige christliche Gemeinschaft, die sich dem Lobpreis, der Gemeinschaft und dem Dienst an anderen in Liebe widmet.
          </p>
        </div>
      </main>

    </div>
  );
}