import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <h1 className="text-xl font-bold text-indigo-900">Grace Community Church</h1>
        <div className="space-x-6 text-sm font-medium">
          <a href="#services" className="hover:text-indigo-600">Services</a>
          <a href="#about" className="hover:text-indigo-600">About Us</a>
          <a href="#give" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Give Online</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Welcome Home to Grace Church
          </h2>
          <p className="text-lg text-slate-300">
            A vibrant community walking in faith, hope, and love. Join us this Sunday in person or online.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <a href="#services" className="px-6 py-3 bg-indigo-600 font-semibold rounded-lg shadow hover:bg-indigo-500">
              Plan Your Visit
            </a>
            <a href="#sermons" className="px-6 py-3 bg-slate-800 border border-slate-700 font-semibold rounded-lg hover:bg-slate-700">
              Watch Online
            </a>
          </div>
        </div>
      </section>

      {/* Service Times & Location */}
      <section id="services" className="max-w-5xl mx-auto py-16 px-6">
        <h3 className="text-2xl font-bold text-center mb-10">Worship With Us</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
            <h4 className="text-xl font-semibold text-indigo-900 mb-2">Sunday Morning Service</h4>
            <p className="text-slate-600 mb-4">In-Person & Live Stream</p>
            <p className="text-2xl font-bold text-slate-800">9:00 AM & 11:00 AM</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
            <h4 className="text-xl font-semibold text-indigo-900 mb-2">Midweek Prayer & Youth</h4>
            <p className="text-slate-600 mb-4">Every Wednesday Night</p>
            <p className="text-2xl font-bold text-slate-800">7:00 PM</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
        <p>© {new Date().getFullYear()} Grace Community Church. All rights reserved.</p>
        <p className="mt-2">123 Faith Way, Churchville | contact@gracechurch.org</p>
      </footer>
    </main>
  );
}